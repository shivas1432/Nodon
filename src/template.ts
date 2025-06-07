import * as fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';
import { logInfo, logSuccess } from './utils/utils';

// Hack for __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function copyTemplate(templateName: string, projectName: string) {
  const templateDir = path.resolve(__dirname, '../templates', templateName);
  const targetDir = path.resolve(process.cwd(), projectName);

  logInfo('\n📂 Creating   template files...');

  await fs.copy(templateDir, targetDir);

  logSuccess(`✅ Template Created  to ${targetDir}`);
}
