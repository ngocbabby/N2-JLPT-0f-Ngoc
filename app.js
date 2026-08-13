import { categories } from './data.js';

const root = document.getElementById('app');
root.innerHTML = `<main class="home"><h1>N2 日本語資料室</h1>${categories.map(category => `<section><h2>${category.japanese}</h2><p>${category.vietnamese}</p></section>`).join('')}</main>`;
