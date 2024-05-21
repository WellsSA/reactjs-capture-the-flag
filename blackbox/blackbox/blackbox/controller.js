import { readFileSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

export const generateChallengeMarkdownHTML = (serverURL, lang = 'en-US') => {
  try {
    const __dirname = dirname(fileURLToPath(import.meta.url));

    // TODO: add internationalization support (CHALLENGE.lang.md)
    const filePath = join(__dirname, 'CHALLENGE.md');

    const raw = readFileSync(filePath, 'utf8');
    const markdown = raw
      .replace(/{{SERVER_URL}}/g, serverURL)
      .replace(/</g, '&lt;'); // prevents html codeblock being rendered as HTML

    const template =
      '<html><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8" /></head><body><pre style="word-wrap: break-word; white-space: pre-wrap;">{{markdown}}</pre></body></html>';

    return template.replace('{{markdown}}', markdown);
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
