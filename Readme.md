# CSV to HTML table

Turns a CSV file into an HTML table. The app runs on a local server so the browser can load the CSV file.

## Run the app

1. Install dependencies (once):

   ```bash
   npm install
   ```

2. Start the server:

   ```bash
   npm start
   ```

3. Open the URL shown in the terminal (e.g. `http://localhost:3000`) and click `index.html`, or go directly to `http://localhost:3000/index.html`.

The page will load the CSV and render it as a table.

## Project layout

- `index.html` – page that shows the table
- `script.js` – fetches the CSV and builds the HTML table
- `australian_rental_market_2026.csv` – CSV file (change `CONFIG.csvPath` in `script.js` to use another file)
