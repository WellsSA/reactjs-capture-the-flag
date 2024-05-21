import { readFileSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

export const generateChallengeMarkdown = (serverURL, lang = 'en-US') => {
  try {
    const __dirname = dirname(fileURLToPath(import.meta.url));

    // TODO: add internationalization support (CHALLENGE.lang.md)
    const filePath = join(__dirname, 'CHALLENGE.md');

    const data = readFileSync(filePath, 'utf8');

    return data.replace(/{{SERVER_URL}}/g, serverURL);
  } catch (err) {
    throw new Error(err);
  }
};

export const generateFlagHTML = () => {
  const flag = 'navigate';
  const template =
    '<html><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8" /></head><body>{{flag}}</body></html>';
  return template.replace('{{flag}}', flag);
};
