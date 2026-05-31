const fs = require('fs');
const path = require('path');

const base = '/Users/kumarsatvik/Documents/GitHub/histare/docs/Artwork Details for Website';
const html = fs.readFileSync(path.join(base, 'Sheet1.html'), 'utf8');

// Files on disk
const files = fs.readdirSync(path.join(base, 'resources')).filter(f => /^cellImage_0_\d+\.jpg$/.test(f));
const totalFiles = files.length;
const fileSet = new Set(files);

// Split into <tr> rows. Use a tolerant regex.
const rows = html.match(/<tr[\s\S]*?<\/tr>/g) || [];

const map = {};            // srNo -> filename or null
const mappedRecords = [];  // srNo with real image file present
const missingSrNos = [];   // srNo with no img or placeholder/missing file
let notIncludedCount = 0;
let notIncludedWithImg = 0;
let notIncludedNoImg = 0;
const details = [];

for (const row of rows) {
  // Extract <td> cells in order
  const cells = row.match(/<td[\s\S]*?<\/td>/g) || [];
  if (cells.length === 0) continue;

  // cell[0] is column A (Sr No.). Strip tags to get text.
  const stripText = (c) => c.replace(/<[^>]*>/g, '').replace(/&nbsp;/g, ' ').trim();
  const srText = stripText(cells[0]);

  // data row only if cell[0] matches /\)$/
  if (!/\)\s*$/.test(srText)) continue;

  const srNo = parseInt(srText.replace(/[^0-9]/g, ''), 10);
  if (isNaN(srNo)) continue;

  // image cell is cells[1] (column B). Find <img src>
  const imgCell = cells[1] || '';
  const m = imgCell.match(/<img[^>]*\bsrc\s*=\s*["']([^"']+)["']/i);
  let filename = null;
  if (m) {
    filename = m[1].replace(/^resources\//, '');
  }

  // Last cell = Image Include/Not included flag
  const lastCell = cells[cells.length - 1] || '';
  const flag = stripText(lastCell);
  const isNotIncluded = /not\s*incl/i.test(flag);

  if (isNotIncluded) {
    notIncludedCount++;
    if (m) notIncludedWithImg++; else notIncludedNoImg++;
  }

  const filePresent = filename && fileSet.has(filename);
  map[srNo] = filePresent ? filename : null;

  if (filePresent) {
    mappedRecords.push(srNo);
  } else {
    missingSrNos.push(srNo);
  }

  details.push({ srNo, filename, filePresent, flag, isNotIncluded, hasImgTag: !!m });
}

// Which files on disk are referenced
const referenced = new Set(Object.values(map).filter(Boolean));
const unreferencedFiles = files.filter(f => !referenced.has(f)).sort((a,b) => {
  const na = +a.match(/_(\d+)\.jpg/)[1], nb = +b.match(/_(\d+)\.jpg/)[1];
  return na - nb;
});

fs.writeFileSync('/Users/kumarsatvik/Documents/GitHub/histare/docs/works-build/image-map.json',
  JSON.stringify(map, null, 2));

const summary = {
  totalFiles,
  dataRows: details.length,
  mappedRecords: mappedRecords.length,
  missingCount: missingSrNos.length,
  missingSrNos: missingSrNos.sort((a,b)=>a-b),
  notIncludedCount,
  notIncludedWithImg,
  notIncludedNoImg,
  referencedFilesCount: referenced.size,
  unreferencedFilesCount: unreferencedFiles.length,
  unreferencedFiles,
};
console.log(JSON.stringify(summary, null, 2));

// Show the not-included rows and any missing/placeholder rows
console.log('\n--- NOT INCLUDED rows ---');
for (const d of details.filter(d=>d.isNotIncluded)) {
  console.log(`Sr ${d.srNo}: hasImgTag=${d.hasImgTag} file=${d.filename} present=${d.filePresent} flag="${d.flag}"`);
}
console.log('\n--- rows with no real file ---');
for (const d of details.filter(d=>!d.filePresent)) {
  console.log(`Sr ${d.srNo}: hasImgTag=${d.hasImgTag} file=${d.filename} flag="${d.flag}"`);
}
console.log('\n--- distinct flag values ---');
const flagCounts = {};
for (const d of details) flagCounts[d.flag] = (flagCounts[d.flag]||0)+1;
console.log(JSON.stringify(flagCounts, null, 2));
