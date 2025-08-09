# **📦 NPM & `package.json` Guide**

## **1️⃣ What is NPM?**

- **NPM** = Node Package Manager
- Comes with Node.js installation
- Lets you:

  - Install libraries (`npm install express`)
  - Manage dependencies
  - Run scripts
  - Share your own packages

---

## **2️⃣ `package.json`**

- The **manifest file** for your Node.js project
- Contains:

  - Project name, version, description
  - Dependencies & devDependencies
  - Scripts (like `start`, `test`)
  - Metadata (author, license)

Example:

```json
{
  "name": "my-app",
  "version": "1.0.0",
  "description": "A simple Node.js app",
  "main": "index.js",
  "scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js"
  },
  "dependencies": {
    "express": "^4.18.2"
  },
  "devDependencies": {
    "nodemon": "^3.0.1"
  },
  "author": "Clinton",
  "license": "MIT"
}
```

---

## **3️⃣ Creating `package.json`**

### **Interactive setup**

```bash
npm init
```

It will ask:

```
name: (my-app)
version: (1.0.0)
description:
entry point: (index.js)
test command:
git repository:
keywords:
author:
license: (ISC)
```

### **Quick setup (defaults)**

```bash
npm init -y
```

Creates `package.json` instantly with default values.

---

## **4️⃣ Dependencies vs DevDependencies**

### **Dependencies** (`dependencies`)

- Needed **for your app to run in production**
- Installed with:

```bash
npm install express
```

- Saved in:

```json
"dependencies": {
  "express": "^4.18.2"
}
```

### **DevDependencies** (`devDependencies`)

- Needed **only during development** (not production)
- Installed with:

```bash
npm install nodemon --save-dev
# OR
npm install nodemon -D
```

- Saved in:

```json
"devDependencies": {
  "nodemon": "^3.0.1"
}
```

---

## **5️⃣ Semantic Versioning (SemVer)**

Format:

```
MAJOR.MINOR.PATCH
```

Example: `^2.4.3`

- **PATCH** (`2.4.3 → 2.4.4`) → bug fixes, backward compatible
- **MINOR** (`2.4.3 → 2.5.0`) → new features, backward compatible
- **MAJOR** (`2.4.3 → 3.0.0`) → breaking changes

---

### **Version Prefixes**

- **`^` (caret)** → Accepts **updates that don’t change the first non-zero digit**
  `^1.2.3` → updates to `<2.0.0`
- **`~` (tilde)** → Accepts **patch updates only**
  `~1.2.3` → updates to `<1.3.0`
- **No symbol** → Exact version only
  `1.2.3` → no updates unless changed manually
- **`*`** → Any version (avoid for production)

---

## **6️⃣ Useful NPM Commands**

```bash
npm install <package>         # Install a dependency
npm install <package> -D      # Install as devDependency
npm uninstall <package>       # Remove package
npm update                    # Update all packages
npm list --depth=0            # List installed packages
npm outdated                  # Check for outdated packages
npm run <script>              # Run a script from package.json
npm publish                   # Publish your package to npm registry
```

---

## 📌 **Summary**

- **`npm init`** → creates `package.json`
- **Dependencies** → needed in production
- **DevDependencies** → only needed for development
- **SemVer** → `MAJOR.MINOR.PATCH`
- **Carefully use version prefixes** to control updates
