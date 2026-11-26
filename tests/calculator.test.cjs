const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const html = fs.readFileSync(path.join(__dirname, '..', 'calculator.html'), 'utf8');
const script = html.match(/<script>([\s\S]*?)<\/script>/)[1];
function setup() {
  const display = {textContent: '0'};
  let keydown;
  const ctx = vm.createContext({document: {
    getElementById: () => display,
    addEventListener: (_, fn) => { keydown = fn; }
  }});
  vm.runInContext(script, ctx);
  return {display, ctx, key: key => keydown({key})};
}
test('arithmetic', () => {
  const {display, key} = setup();
  for (const k of '2+3*4') key(k);
  key('Enter');
  assert.equal(display.textContent, 14);
});
test('parentheses', () => {
  const {display, key} = setup();
  for (const k of '(2+3)*4') key(k);
  key('Enter');
  assert.equal(display.textContent, 20);
});
test('decimals', () => {
  const {display, key} = setup();
  for (const k of '1.5+2.5') key(k);
  key('Enter');
  assert.equal(display.textContent, 4);
});
test('clear', () => {
  const {display, key} = setup();
  key('9'); key('Escape');
  assert.equal(display.textContent, '0');
});
test('invalid expression', () => {
  const {display, key} = setup();
  key('2'); key('+'); key('Enter');
  assert.equal(display.textContent, 'Ошибка!');
});
