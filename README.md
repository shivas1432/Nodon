# 🚀 Nodon - Production-Ready Node.js Project Generator

Nodon is a powerful project generator that lets you scaffold production-grade Node.js applications in seconds. From simple Node.js setups to advanced REST APIs, GraphQL servers, and scalable Microservices — Nodon helps you bootstrap with best practices and modern tooling, effortlessly.

## ⚡ Quick Start

### Create a new project instantly
```bash
npx create-nodon@latest my-app
```

### Or Install Globally (Optional):
```bash
npm install -g nodon
```

### Then create a project
```bash
nodon create my-app 
```

## 🎨 Available Templates for Nodon

Kickstart your Node.js projects with these ready-to-use templates. Choose a setup that fits your needs, from minimal Node.js to fully-featured REST APIs and Microservices.

## 📦 Template Options

| Template | Description | Usage Command |
| :-------- | :------- | :------------------------- |
| 🟢 **basic-node** | Minimal Node.js setup with modern tooling. | `npx create-nodon@latest my-app --template basic-node` |
| 🔵 **basic-ts** | Node.js setup with TypeScript. | `npx create-nodon@latest my-app --template basic-ts` |
| 🟠 **express-rest-api** | REST API setup with Express.js. | `npx create-nodon@latest my-app --template express-rest-api` |
| 🟠 **express-rest-ts** | Express.js REST API with TypeScript. | `npx create-nodon@latest my-app --template express-rest-ts` |
| 🔴 **graphql-api-ts** | GraphQL Server with Express & TypeScript. | `npx create-nodon@latest my-app --template graphql-api-ts` |
| 🟠 **microservices** | Production-ready Microservices architecture. | `npx create-nodon@latest my-app --template microservices` |

## 📁 Example Template Structures

### Basic Node.js
```
my-app/
├── index.js            # Entry point of the application
├── package.json        # Project metadata and dependencies
├── .gitignore          # Files to exclude from git
├── .eslintrc.json      # ESLint configuration for code quality
├── README.md           # Project documentation
```

### Express REST API (JavaScript)
```
my-app/
├── src/
│   ├── config/
│   ├── controllers/
│   ├── db/
│   ├── middlewares/
│   │   └── errorHandler.js    # Error handling middleware
│   ├── models/
│   ├── routes/
│   │   ├── index.js           # Main routes
│   │   └── users.js           # Sample user routes
│   ├── services/
│   ├── utils/
│   └── app.js                 # Enhanced app with security middleware
├── .env.example
├── .prettierrc                # Prettier configuration
├── nodemon.json              # Hot reload configuration
├── package.json              # Enhanced with dev scripts
├── .gitignore
```

### Express REST API (TypeScript)
```
my-app/
├── src/
│   ├── config/
│   ├── controllers/
│   ├── db/
│   ├── middlewares/
│   │   └── errorHandler.ts    # TypeScript error handling
│   ├── models/
│   ├── routes/
│   │   ├── index.ts           # Main routes with types
│   │   └── users.ts           # Sample typed user routes
│   ├── services/
│   ├── utils/
│   └── app.ts                 # Enhanced TypeScript app
├── .env.example
├── .prettierrc                # Prettier configuration
├── .eslintrc.json            # TypeScript ESLint config
├── nodemon.json              # TypeScript hot reload
├── tsconfig.json             # Enhanced TypeScript config
├── package.json              # TypeScript build scripts
├── .gitignore
```

### GraphQL API Server (TypeScript)
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

### Microservices Architecture
```
my-app/
├── auth-service/       # Authentication service
├── user-service/       # User management service
├── gateway/            # API Gateway
├── shared/             # Shared utilities and libraries
├── docker-compose.yml  # Multi-service orchestration
├── .gitignore
```

## ✨ Enhanced Features

### 🎯 New Improvements
- **🔧 Enhanced Development Experience** - Hot reload with nodemon
- **📝 Code Formatting** - Prettier configuration included
- **🛡️ Error Handling** - Production-ready error middleware
- **🔗 Sample Routes** - Working user CRUD examples
- **⚡ Better Scripts** - Comprehensive npm scripts for development
- **🔒 Security Middleware** - Helmet and CORS included
- **📊 Health Checks** - Built-in health monitoring endpoints
- **📚 TypeScript Support** - Full typing with proper configurations

### 🔧 Core Features
- **✅ Modern ES Modules**
- **✅ TypeScript (for supported templates)**
- **✅ Hot Reload**
- **✅ ESLint & Prettier ready**
- **✅ Scalable Microservices architecture**
- **✅ Production-grade configuration**
- **✅ Docker support (microservices template)**

## 📦 Requirements

- Node.js >=16.0.0 (>=18.0.0 recommended)
- npm >=8.0.0

## 🚀 What's New in Templates

### Express REST API Templates Include:
- **Sample User Routes** - Complete CRUD operations
- **Error Handling Middleware** - Centralized error management
- **Security Headers** - Helmet.js integration
- **Request Logging** - Morgan middleware setup
- **Environment Configuration** - Proper .env handling
- **Development Scripts** - Hot reload, linting, formatting
- **Health Check Endpoints** - Monitor application status

### TypeScript Templates Additionally Include:
- **Type Safety** - Comprehensive TypeScript interfaces
- **Enhanced ESLint** - TypeScript-specific linting rules
- **Build Scripts** - Production build processes
- **Type Checking** - Compile-time error detection

## 📄 License

MIT © 2025 Nodon [MIT](https://github.com/omprakash2929/Nodon?tab=MIT-1-ov-file)

## 🌐 Useful Links

- Official Documentation
- Template Showcase
- Community Discussions

## 🤝 Contributing

We welcome contributions! The templates include modern best practices and are continuously improved. Feel free to submit issues and enhancement requests.