# 🚀 Nodon - Production-Ready Node.js Project Generator
Nodon is a powerful project generator that lets you scaffold production-grade Node.js applications in seconds. From simple Node.js setups to advanced REST APIs, GraphQL servers, and scalable Microservices — Nodon helps you bootstrap with best practices and modern tooling, effortlessly.
## ⚡ Quick Start

 ##### Create a new project instantly

 ```
npx create-nodon@latest my-app
```   

## Or Install Globally (Optional):
```
npm install -g nodon
```
##### Then create a project
```
nodon create my-app 
```
# 🎨 Available Templates for Nodon
Kickstart your Node.js projects with these ready-to-use templates. Choose a setup that fits your needs, from minimal Node.js to fully-featured REST APIs and Microservices.

# 📦 Template Options

| Template | Description     | Usage Command                |
| :-------- | :------- | :------------------------- |
| 🟢 **basic-node**   | Minimal Node.js setup with modern tooling.  |`npx create-nodon@latest my-app --template basic-node`  |
| 🔵 **basic-ts**    | Node.js setup with TypeScript.   |`npx create-nodon@latest my-app --template basic-ts`  |
| 🟠 **express-rest-api**    | REST API setup with Express.js.   |`npx create-nodon@latest my-app --template express-rest-api`  |
| 🟠 **express-rest-ts**    | Express.js REST API with TypeScript.   |`npx create-nodon@latest my-app --template express-rest-ts`  |
| 🔴 **graphql-api-ts**    | GraphQL Server with Express & TypeScript.   |`npx create-nodon@latest my-app --template graphql-api-ts`  |
| 🟠 **microservices**    | Production-ready Microservices architecture.   |`npx create-nodon@latest my-app --template microservices`  |


# 📁 Example Template Structures

####  Basic Node.js

```
my-app/
├── index.js            # Entry point of the application
├── package.json        # Project metadata and dependencies
├── .gitignore          # Files to exclude from git
├── .eslintrc.json      # ESLint configuration for code quality
├── README.md           # Project documentation
```
#### Express REST API (JavaScript)

``` 
my-app/
├── src/
│   ├── config/
│   ├── controllers/
│   ├── db/
│   ├── middlewares/
│   ├── models/
│   ├── routes/
│   ├── services/
│   ├── utils/
│   └── app.js
├── .env.example
├── package.json
├── .gitignore

```
#### Express REST API (TypeScript)

```
my-app/
├── src/
│   ├── config/
│   ├── controllers/
│   ├── db/
│   ├── middlewares/
│   ├── models/
│   ├── routes/
│   ├── services/
│   ├── utils/
│   └── app.ts
├── .env.example
├── package.json
├── tsconfig.json
├── .gitignore
```

#### GraphQL API Server (TypeScript)

```
my-app/
├── src/
│   ├── config/
│   ├── db/
│   ├── graphql/
│   ├── middlewares/
│   ├── utils/
│   └── server.ts
├── .env.example
├── package.json
├── tsconfig.json
├── .gitignore
```
#### Microservices Architecture
```
my-app/
├── auth-service/       # Authentication service
├── user-service/       # User management service
├── gateway/            # API Gateway
├── shared/             # Shared utilities and libraries
├── docker-compose.yml  # Multi-service orchestration
├── .gitignore
```
# ✨ Features
##### ✅ Modern ES Modules
##### ✅ TypeScript (for supported templates)
##### ✅ Hot Reload
##### ✅ ESLint & Prettier ready
##### ✅ Scalable Microservices architecture
##### ✅ Production-grade configuration
##### ✅ Docker support (microservices template)
## 📦 Requirements
- Node.js >=18
- npm

## 📄 License

MIT © 2025 Nodon [MIT](https://github.com/omprakash2929/Nodon?tab=MIT-1-ov-file)


## 🌐 Useful Links
- Official Documentation
- Template Showcase
- Community Discussions
