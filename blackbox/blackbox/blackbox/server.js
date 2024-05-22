import 'dotenv/config';

import express from 'express';
import cors from 'cors';
import {
  generateChallengeHTML,
  generateChallengeMarkdownHTML,
  readChallengeHTML,
} from './controller.js';

const { SERVER_URL, SERVER_PORT, FLAG } = process.env;
const FLAG_CODE = btoa(FLAG);

const app = express();
app.use(cors());

app.get('/', (req, res) => {
  const markdown = generateChallengeMarkdownHTML(SERVER_URL);
  res.send(markdown);
});

app.get('/challenge', (req, res) => {
  const challenge = readChallengeHTML();
  res.send(challenge);
});

app.get('/' + FLAG_CODE, (req, res) => {
  res.send(FLAG);
});

app.listen(SERVER_PORT, () => {
  console.info(`[Blackbox ready, challenge started]`);
});

generateChallengeHTML(SERVER_URL, FLAG_CODE);

console.info(
  '\n[en] Please decode the text below. Upon decoding, you will be taken to a URL with further instructions on completing the challenge.',
  '\n---',
  '\n[pt] Por favor, decodifique o texto abaixo. Ao decodificar, você será levado a uma URL com mais instruções sobre como completar o desafio.',
  '\n---',
  '\n[es] Por favor, decodifique el texto a continuación. Al decodificarlo, será dirigido a una URL con más instrucciones sobre cómo completar el desafío.',
  `\n\n Text: ${btoa(SERVER_URL)}`
);
