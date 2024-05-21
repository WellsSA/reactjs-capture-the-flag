import { readFileSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const readLocalFile = filename => {
  const __dirname = dirname(fileURLToPath(import.meta.url));
  const filePath = join(__dirname, filename);
  return readFileSync(filePath, 'utf8');
};

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

const shuffleFlagIntoHTML = flag => {
  const encoded = flag;

  return encoded;
};

export const generateChallengeHTML = (serverURL, flagCode) => {
  const template = readLocalFile('challenge-template.html');
  const challenge = shuffleFlagIntoHTML(serverURL + '/' + flagCode);
  const final = template.replace('{{challenge}}', challenge);

  console.log(final);
  return final;
};

export const readChallengeHTML = () => {};
