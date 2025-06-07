import inquirer from 'inquirer';

export async function runPrompts() {
  return inquirer.prompt([
    {
      name: 'projectName',
      type: 'input',
      message: 'Project name:',
      validate: (input) => input ? true : 'Project name cannot be empty!'
    },
    {
      name: 'template',
      type: 'list',
      message: 'Select a template:',
      choices: ['basic-js', 'typescript', 'rest-api', 'graphql']
    }
  ]);
}