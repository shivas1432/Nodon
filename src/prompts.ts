import inquirer from 'inquirer';

export async function runPrompts() {
  return inquirer.prompt([
    {
      name: 'projectName',
      type: 'input',
      message: '🚀 Project name:',
      default: 'my-node-app',
      validate: (input) => input ? true : '❌ Project name cannot be empty!'
    },
    {
      name: 'template',
      type: 'list',
      message: '📂 Select a project template:',
      choices: [
        { name: '🟢 Basic Node.js', value: 'basic-node' },
        { name: '🔵 Basic Node + TypeScript', value: 'basic-ts' },
        { name: '🟠 Advanced REST API (Node + Express)', value: 'express-rest-api' },
        { name: '🟣 Advanced REST API (Express + TypeScript)', value: 'express-rest-ts' },
        { name: '🔴 GraphQL API Server (Express + TypeScript)', value: 'graphql-api-ts' },
        { name: '🟠 Microservices Starter (Multi Service)', value: 'microservices' }
      ]
    }
  ]);
}
