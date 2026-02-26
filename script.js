// Config: change these to use a different CSV or container
const CONFIG = {
  csvPath: 'australian_rental_market_2026.csv',
  containerId: 'table-container',
};

function escapeHtml(text) {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function csvToHtml(csvData) {
  const rows = csvData.trim().split('\n');

  const tableRows = rows.map((row, index) => {
    const cells = row.split(',');
    const cellTag = index === 0 ? 'th' : 'td';

    const cellHtml = cells
      .map((cell) => `<${cellTag}>${escapeHtml(cell.trim())}</${cellTag}>`)
      .join('');

    return `<tr>${cellHtml}</tr>`;
  });

  return `<table border="1">\n${tableRows.join('\n')}\n</table>`;
}

async function loadCsvAndRender(csvPath, containerId) {
  try {
    const response = await fetch(csvPath);
    if (!response.ok) {
      throw new Error(`Failed to load CSV: ${response.status} ${response.statusText}`);
    }

    const csvText = await response.text();
    const tableHtml = csvToHtml(csvText);

    const container = document.getElementById(containerId);
    if (!container) {
      console.error(`Container element with id "${containerId}" not found.`);
      return;
    }

    container.innerHTML = tableHtml;
  } catch (error) {
    console.error(error);
    const container = document.getElementById(containerId);
    if (container) {
      container.textContent = 'Error loading CSV file. See console for details.';
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  loadCsvAndRender(CONFIG.csvPath, CONFIG.containerId);
});