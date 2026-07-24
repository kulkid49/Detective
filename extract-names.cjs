const fs = require('fs');
const c1 = fs.readFileSync('src/data/cases/case-01.js', 'utf-8');
const c2 = fs.readFileSync('src/data/cases/case-02.js', 'utf-8');

const regex = /id:\s*['"]([^'"]+)['"],\s*name:\s*['"]([^'"]+)['"]/g;

let matches1 = [...c1.matchAll(regex)];
let matches2 = [...c2.matchAll(regex)];

console.log('CASE 1:', matches1.map(m => m[1]));
console.log('CASE 2:', matches2.map(m => m[1]));

// Auto-patch the files
const replaceRegex = /id:\s*['"]([^'"]+)['"],([\s\S]*?)portrait_image:\s*null/g;
const c1Fixed = c1.replace(replaceRegex, (match, id, middle) => {
  return 'id: "' + id + '",' + middle + 'portrait_image: "/images/suspects/' + id + '.jpg"';
});
fs.writeFileSync('src/data/cases/case-01.js', c1Fixed);

const c2Fixed = c2.replace(replaceRegex, (match, id, middle) => {
  return 'id: "' + id + '",' + middle + 'portrait_image: "/images/suspects/' + id + '.jpg"';
});
fs.writeFileSync('src/data/cases/case-02.js', c2Fixed);
