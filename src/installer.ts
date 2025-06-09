import {execa} from 'execa';
import { logInfo, logSuccess } from './utils/utils.js';

export async function installDependencies(projectName: string) {
  logInfo('\n📦 Installing dependencies...');

  try {
    await execa('npm', ['install'], {
      cwd: projectName,
      stdio: 'inherit'
    });

    logSuccess('✅ Dependencies installed!');
  } catch (err) {
    console.error('❌ Failed to install dependencies.', err);
  }
}
