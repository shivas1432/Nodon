import {Command} from 'commander';
import chalk from 'chalk';
import { runPrompts } from './src/prompts';
import { copyTemplate } from './src/template';

const program = new Command();

program.name('nodon').description('One-command backend scaffolder for Node.js & Express')
  .version('1.0.0').action(async()=>{
    console.log(chalk.greenBright('\n🚀 Welcome to Nodon CLI!'));

    const answers = await runPrompts();
    await copyTemplate(answers.template,answers.projectName);


  })