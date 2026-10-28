import {readFile,access} from 'node:fs/promises';
import assert from 'node:assert/strict';
const html=await readFile('index.html','utf8'),js=await readFile('app.js','utf8');
const ids=[...html.matchAll(/\bid="([^"]+)"/g)].map(match=>match[1]);assert.equal(new Set(ids).size,ids.length,'HTML IDs must be unique');
for(const [,ref] of html.matchAll(/(?:href|src)="([^"]+)"/g)){if(ref.startsWith('#'))assert(ids.includes(ref.slice(1)),`Missing anchor ${ref}`);else if(!/^(https?:|mailto:)/.test(ref))await access(ref);}
assert(html.includes('https://ko-fi.com/eegoist'),'Ko-fi destination missing');assert(html.includes('releases/latest/download/Dynamic-Island-Setup-x64.exe'),'Direct installer link missing');
for(const [,key] of html.matchAll(/data-i18n(?:-label)?="([^"]+)"/g))assert(js.includes(`${key}:`),`Missing translation ${key}`);
assert(!html.includes('Dynamic-Island-Win/releases'),'Public downloads must not depend on a private repository');
console.log(`Checked ${ids.length} unique IDs, local assets, anchors, translation keys and public download destinations.`);
