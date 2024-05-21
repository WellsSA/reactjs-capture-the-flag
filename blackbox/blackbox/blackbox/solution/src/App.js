import { useState, useEffect } from 'react';
import './styles.css';

const FLAG_URL = 'https://localhost:4000/336e5a';
/**
 * This codepen is related to a Capture the flag code challenge.
 * Here's the bonus (code used for step 2):
 *
 * const elements = document.querySelectorAll('code div span i.char');
 * const values = Array.from(elements).map(el => el.getAttribute('value'));
 * const url = values.join('');
 */

export default function App() {
  const [flag, setFlag] = useState('');
  const [displayedFlag, setDisplayedFlag] = useState('');

  useEffect(() => {
    async function fetchFlag() {
      try {
        const response = await fetch(FLAG_URL);
        const text = await new Response(response.body).text();

        setFlag(text);
      } catch (err) {
        setFlag('Error fetching flag');
      }
    }

    fetchFlag();
  }, []);

  useEffect(() => {
    if (!flag) return;
    let currentIndex = 0;
    let word = '';
    const intervalId = setInterval(() => {
      console.info(`${currentIndex}: ${flag[currentIndex]}`);
      word += flag[currentIndex];
      setDisplayedFlag(word);
      currentIndex += 1;

      if (currentIndex === flag.length) {
        clearInterval(intervalId);
      }
    }, 500);
    return () => clearInterval(intervalId);
  }, [flag]);

  return (
    <div className="App">
      <h1>
        {!displayedFlag ? (
          'Loading...'
        ) : (
          <ul style={{ listStyle: 'none' }}>
            {displayedFlag.split('').map((character, index) => (
              <li key={character + index} style={{ display: 'inline' }}>
                {character}
              </li>
            ))}
          </ul>
        )}
      </h1>
    </div>
  );
}
