import chalk from 'chalk';

export function logInfo(message: string) {
  console.log(chalk.cyan(message));
}

export function logSuccess(message: string) {
  console.log(chalk.green(message));
}

export function logError(message: string) {
  console.log(chalk.red(message));
}