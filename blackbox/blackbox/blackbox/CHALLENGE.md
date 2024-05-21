## The challenge

1. Open this [link]({{SERVER_URL}}/challenge)
2. Find a hidden URL within the HTML
   - Each character of the URL is given by this DOM tree, in this specific order. You need to find (in order) all of the occurrences and join them to get the link.
   - The asterisk **(\*)** is a wildcard representing zero or more characters that can be present in the string. These characters are irrelevant to the result and should be ignored.
   - There can be zero or more DOM nodes between each valid tag. These nodes are irrelevant to the result.
   - Any additional attribute that doesn't interfere with the described pattern can be safely ignored.
     Pattern of the DOM tree for each valid character of the URL

```html
<code data-class="42*">
  <div data-tag="*36">
    <span data-id="*31*">
      <i class="char" value="VALID_CHARACTER"></i>
    </span>
  </div>
</code>
```

(_To validate this step, you should be able to open the URL and get an English word. This means you have captured the flag!_ 🥳)

1. Create a CodeSandbox React application
2. Make an HTTP request to URL obtained in step 2 to load the flag into a React component
   - Don't use any external libraries. Use browser APIs
   - Render a "Loading..." text while the request is ongoing
3. Render the flag you loaded in step 4 with the following conditions:
   - Simulate a typewriter effect with a half second delay between each character. _Start showing nothing and then display characters one by one until the full string is displayed._
   - No style required
   - Render the flag a list, where each character is a list item
   - Animation should trigger after you load the flag
   - Animation should run only once
   - Use React APIs only. Don't use CSS or external libraries

Bonus: Add as a comment the script you used to to get the URL in step 2

## Submission

Paste the flag you captured in step 2 and the link to your CodeSandbox in the job application with the following format:

`<FLAG> - <LINK>`

We're aware answers here might eventually be leaked and we'll probably have to refresh this every couple months or so, but please keep in mind it'll be very easy to tell once that happens and will only result in slowing down our ability to process applications - so please keep the result to yourself.

\[1\]: [https://en.wikipedia.org/wiki/Capture*the_flag*(cybersecurity)](<https://en.wikipedia.org/wiki/Capture_the_flag_(cybersecurity)>)
