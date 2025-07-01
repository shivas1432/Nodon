#!/usr/bin/env node
import { Command } from "commander";
import chalk from "chalk";
import { runPrompts } from "./src/prompts.js";
import { copyTemplate } from "./src/template.js";
import { installDependencies } from "./src/installer.js";
import { logSuccess, logInfo } from "./src/utils/utils.js";

const program = new Command();

program
  .name("create-nodon")
  .description("One-command backend scaffolder for Node.js, Express, GraphQL, Monorepo & more")
  .version("1.0.0")
  .argument("[project-name]", "Name of your project")
  .option("--template <template>", "Project template (basic, express, graphql, monorepo, microservices)")
  .action(async (projectName, options) => {
    
    console.log(chalk.greenBright("\n🚀 Welcome to Nodon CLI!"));

    let finalName = projectName;
    let finalTemplate = options.template;

    // If args not provided, fallback to prompts
    if (!projectName || !options.template) {
      const answers = await runPrompts();
      finalName = finalName || answers.projectName;
      finalTemplate = finalTemplate || answers.template;
    }

    await copyTemplate(finalTemplate, finalName);
    await installDependencies(finalName);

    logSuccess("\n🎉 Project created successfully!");
    logInfo(`\n👉 cd ${finalName}`);
    if (finalTemplate.includes("ts")) {
      logInfo("👉 npm run dev    # Start dev server (TypeScript)");
    } else {
      logInfo("👉 npm run dev    # Start dev server (JS)");
    }
    console.log(chalk.cyan("\nHappy coding! 🚀\n"));
  });

program.parse();
