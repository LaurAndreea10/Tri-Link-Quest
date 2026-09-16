import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';

const html=readFileSync(new URL('../index.html',import.meta.url),'utf8');
const manifest=JSON.parse(readFileSync(new URL('../manifest.webmanifest',import.meta.url),'utf8'));

test('declares the stable mini-game id',()=>assert.match(html,/data-mini-game-id="tri-link-quest"/));
test('emits the Arcade World result contract',()=>{
  assert.match(html,/ARCADE_GAME_RESULT/);
  assert.match(html,/gameId:'tri-link-quest'/);
  assert.match(html,/arcade:result/);
});
test('contains the three game stages',()=>['PUZZLE','MATCH','CONNECT'].forEach(stage=>assert.match(html,new RegExp(stage))));
test('contains accessibility essentials',()=>{
  assert.match(html,/prefers-reduced-motion/);
  assert.match(html,/:focus-visible/);
  assert.match(html,/aria-live="polite"/);
  assert.match(html,/class="skip"/);
});
test('uses standalone canonical metadata',()=>assert.match(html,/https:\/\/laurandreea10\.github\.io\/Tri-Link-Quest\//));
test('manifest is installable',()=>{
  assert.equal(manifest.display,'standalone');
  assert.equal(manifest.start_url,'./');
  assert.ok(manifest.icons.length>=2);
});

test('lets the player choose all three modes immediately',()=>{
  const nav=html.match(/<nav class="tabs"[\s\S]*?<\/nav>/)?.[0]||'';
  assert.doesNotMatch(nav,/disabled/);
  assert.match(nav,/PUZZLE/);
  assert.match(nav,/MATCH/);
  assert.match(nav,/CONNECT/);
});
