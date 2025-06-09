#!/usr/bin/env node
import { Command } from 'commander';
import chalk from 'chalk';
import { runPrompts } from './src/prompts.js';
import { copyTemplate } from './src/template.js';
import { installDependencies } from './src/installer.js';
import { logSuccess, logInfo } from './src/utils/utils.js';

const program = new Command();

program
  .name('nodon')
  .description('One-command backend scaffolder for Node.js & Express')
  .version('1.0.0')
  .action(async () => {
    console.log(chalk.greenBright('\n🚀 Welcome to Nodon CLI!'));

    const answers = await runPrompts();
    await copyTemplate(answers.template, answers.projectName);
    await installDependencies(answers.projectName);

    logSuccess('\n🎉 Project created successfully!');
    logInfo(`\n👉 cd ${answers.projectName}`);
  });

program.parse();
