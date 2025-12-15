# React Micro-Frontend Demo (Module Federation)

This repository demonstrates a **React Micro-Frontend (MFE)** architecture using **Webpack 5 Module Federation**.

The setup consists of:
- **app** – consumes remote components
- **form-elements** – exposes reusable UI components

---

## Project Structure

```
mfe-demo/
├── host/
│   ├── package.json
│   ├── babel.config.js
│   ├── webpack.config.js
│   ├── public/
│   │   └── index.html
│   └── src/
│       ├── App.jsx
│       └── index.js
│
└── form-elements/
    ├── package.json
    ├── babel.config.js
    ├── webpack.config.js
    ├── public/
    │   └── index.html
    └── src/
        ├── App.jsx
        ├── Input.jsx
        └── index.js

```

```yaml
## Tech Stack

- React 18
- Webpack 5
- Webpack Module Federation
- Babel
- yarn/npm

## Prerequisites

- Node.js >= 16
```

## Installation

Install dependencies in main applications.

```bash
cd form-elements
yarn install
```

Install dependencies in remote applications.

```bash
cd ../app
yarn install
```

Running the Applications
1. Start the Remote App

```bash
cd form-elements
yarn start
```

The remote app will run on:

```bash
http://localhost:3001
http://localhost:3001/entry.js
```

2. Start the Host App

```bash
cd app
yarn start
```

The host app will run on:

```arduino
http://localhost:3000
```
