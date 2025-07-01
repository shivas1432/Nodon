import { execa } from 'execa';
import { existsSync } from 'fs';
import path from 'path';
import { logInfo, logSuccess } from './utils/utils.js';

export async function installDependencies(projectName: string) {
  const projectPath = path.resolve(process.cwd(), projectName);
  const pkgJsonPath = path.join(projectPath, 'package.json');

  if (existsSync(pkgJsonPath)) {
    logInfo('\n📦 Installing dependencies...');

    try {
      await execa('npm', ['install'], {
        cwd: projectPath,
        stdio: 'inherit'
      });

      logSuccess('✅ Dependencies installed!');
    } catch (err) {
      console.error('❌ Failed to install dependencies.', err);
    }
  } else {
    logInfo('\nℹ️ No package.json found at project root. Skipping npm install.');
  }
}
