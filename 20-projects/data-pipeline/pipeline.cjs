/**
 * THIS APP EXTRACTS POSTS FOR JSONPLACEHOLDER AND FOR EACH USER, THEY ORGANIZE
 * THE POSTS,COMMENTS AND COMMENTS.
 *
 */

const https = require("https");
const fs = require("fs").promises;
const path = require("path");
const { setTimeout: wait } = require("timers/promises");

const BASE_URL = "https://jsonplaceholder.typicode.com";
const MAX_CONCURRENT = 3; // number of users scraped in parallel

// Minimal progress bar
function progressBar(current, total) {
  const percent = Math.floor((current / total) * 100);
  const barLength = 20;
  const filled = Math.floor((percent / 100) * barLength);
  const bar = "█".repeat(filled) + "-".repeat(barLength - filled);
  process.stdout.write(
    `\r📊 Progress: [${bar}] ${percent}% (${current}/${total})`
  );
}

// Fetch JSON with retry and small delay
function fetchJSON(url, retries = 3) {
  return new Promise((resolve, reject) => {
    https
      .get(url, (res) => {
        let data = "";

        if (res.statusCode !== 200) {
          if (retries > 0) {
            return wait(500).then(() => resolve(fetchJSON(url, retries - 1)));
          }
          return reject(new Error(`Request Failed: ${res.statusCode}`));
        }

        res.on("data", (chunk) => (data += chunk));
        res.on("end", () => {
          try {
            resolve(JSON.parse(data));
          } catch (err) {
            reject(err);
          }
        });
      })
      .on("error", (err) => {
        if (retries > 0) {
          return wait(500).then(() => resolve(fetchJSON(url, retries - 1)));
        }
        reject(err);
      });
  });
}

async function processUser(user, outDir) {
  const userDir = path.join(outDir, `user-${user.id}-${user.username}`);
  await fs.mkdir(userDir, { recursive: true });

  await fs.writeFile(
    path.join(userDir, "profile.json"),
    JSON.stringify(user, null, 2)
  );

  const posts = await fetchJSON(`${BASE_URL}/posts?userId=${user.id}`);
  await fs.writeFile(
    path.join(userDir, "posts.json"),
    JSON.stringify(posts, null, 2)
  );

  const commentsPerPost = await Promise.all(
    posts.map((post) => fetchJSON(`${BASE_URL}/comments?postId=${post.id}`))
  );

  const allComments = commentsPerPost.flat();
  await fs.writeFile(
    path.join(userDir, "comments.json"),
    JSON.stringify(allComments, null, 2)
  );
}

async function scrape() {
  try {
    console.log("📡 Fetching all users...");
    const users = await fetchJSON(`${BASE_URL}/users`);
    const outDir = path.join(__dirname, "data");
    await fs.mkdir(outDir, { recursive: true });

    let completed = 0;
    const total = users.length;

    // Limit concurrency
    const queue = [...users];
    const workers = Array.from({ length: MAX_CONCURRENT }, async () => {
      while (queue.length) {
        const user = queue.shift();
        await processUser(user, outDir);
        completed++;
        progressBar(completed, total);
      }
    });

    await Promise.all(workers);
    console.log('\n🎯 Scraping complete. Check the "data" folder.');
  } catch (err) {
    console.error("❌ Scraper error:", err.message);
  }
}

scrape();
