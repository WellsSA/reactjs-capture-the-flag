import { readFileSync, writeFileSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const readLocalFile = filename => {
  const __dirname = dirname(fileURLToPath(import.meta.url));
  const filePath = join(__dirname, filename);
  return readFileSync(filePath, 'utf8');
};

const writeLocalFile = (filename, data) => {
  const __dirname = dirname(fileURLToPath(import.meta.url));
  const filePath = join(__dirname, filename);
  return writeFileSync(filePath, data);
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

const shuffleFlagIntoHTML = url => {
  function generateRandomString() {
    const length = Math.floor(Math.random() * 10) + 5; // Random length between 5 and 14
    const characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    // Generate a random seed for character selection
    const seed = Array.from({ length: length }, () =>
      Math.floor(Math.random() * characters.length)
    );

    // Use the seed to select characters and concatenate them into a string
    const randomString = seed.reduce(
      (acc, index) => acc + characters[index],
      ''
    );

    return randomString;
  }

  // Helper function to create a correct structure
  function createCorrectStructure(char) {
    return `
        <code data-class="42${generateRandomString()}">
          <div data-tag="${generateRandomString()}36">
            <span data-id="${generateRandomString()}31${generateRandomString()}">
              <i class="char" value="${char}"></i>
            </span>
          </div>
        </code>
      `;
  }

  // Helper function to create an incorrect structure
  function createIncorrectStructure(char) {
    const tags = ['article', 'section', 'div'];
    const randomTag = tags[Math.floor(Math.random() * tags.length)];
    /* Wells note: We can make so the data-class, data-tag and data-id are actually useful in a near future, 
      but so far for students I thought it would be too dificult since it involves regex to actually 
      filter these on the final solution. So I left it in the final challenge more as a distraction, 
      but they have no impact on the current solution.
    */
    return `
        <code data-class="42${generateRandomString()}">
          <div data-tag="${generateRandomString()}36">
            <span data-id="${generateRandomString()}31${generateRandomString()}">
              <${randomTag} class="char" value="${char}"></${randomTag}>
            </span>
          </div>
        </code>
      `;
  }

  // Function to shuffle the correct and incorrect structures
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  // Generate the correct characters for the URL
  const chars = url.split('').map(char => createCorrectStructure(char));

  // Generate random incorrect structures
  const incorrectChars = Array.from({ length: chars.length }, () => {
    const randomChar = String.fromCharCode(33 + Math.floor(Math.random() * 94));
    return createIncorrectStructure(randomChar);
  });

  // Combine and shuffle them
  const combined = shuffleArray([...chars, ...incorrectChars]);

  // Join the array into a single HTML string
  return combined.join('');
};

export const generateChallengeHTML = (serverURL, flagCode) => {
  const template = readLocalFile('challenge-template.html');
  const challenge = shuffleFlagIntoHTML(serverURL + '/' + flagCode);
  const final = template.replace('{{challenge}}', challenge);

  writeLocalFile('challenge.html', final);
  return final;
};

export const readChallengeHTML = () => {};
