const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");
const { parse } = require("querystring");

const todosPath = path.join(__dirname, "data", "todos.json");

function loadTodos() {
  if (!fs.existsSync(todosPath)) return [];
  return JSON.parse(fs.readFileSync(todosPath));
}

function saveTodos(todos) {
  fs.writeFileSync(todosPath, JSON.stringify(todos, null, 2));
}

function renderPage(res, todos) {
  fs.readFile("./views/index.html", "utf8", (err, html) => {
    if (err) return res.end("Error loading HTML");

    const todoHtml = todos
      .map(
        (todo) => `
      <li>
        <form method="POST" action="/edit">
          <input type="hidden" name="id" value="${todo.id}" />
          <input name="title" value="${todo.title}" />
          <button type="submit">✏️ Edit</button>
        </form>
        <form method="POST" action="/delete" style="display:inline;">
          <input type="hidden" name="id" value="${todo.id}" />
          <button type="submit">🗑️ Delete</button>
        </form>
      </li>`
      )
      .join("");

    html = html.replace("{{todos}}", todoHtml);
    res.setHeader("Content-Type", "text/html");
    res.end(html);
  });
}

const server = http.createServer((req, res) => {
  if (req.url === "/" && req.method === "GET") {
    const todos = loadTodos();
    return renderPage(res, todos);
  }

  if (req.url === "/style.css") {
    fs.readFile("./public/style.css", (err, css) => {
      res.setHeader("Content-Type", "text/css");
      res.end(css);
    });
    return;
  }

  if (req.method === "POST" && ["/add", "/edit", "/delete"].includes(req.url)) {
    let body = "";
    req.on("data", (chunk) => (body += chunk.toString()));
    req.on("end", () => {
      const data = Object.fromEntries(new URLSearchParams(body));
      let todos = loadTodos();

      if (req.url === "/add" && data.title.trim()) {
        todos.push({ id: Date.now(), title: data.title.trim() });
      }

      if (req.url === "/edit") {
        todos = todos.map((todo) =>
          todo.id == data.id ? { ...todo, title: data.title } : todo
        );
      }

      if (req.url === "/delete") {
        todos = todos.filter((todo) => todo.id != data.id);
      }

      saveTodos(todos);
      res.writeHead(302, { Location: "/" });
      res.end();
    });
    return;
  }

  res.statusCode = 404;
  res.end("Not found");
});

server.listen(3000, () => {
  console.log("✅ Todo app running at http://localhost:3000");
});
