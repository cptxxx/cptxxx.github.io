"use strict";

const windowTitleEl = document.querySelector(`.window_title`);
const now = new Date();
const windowTitle = `Cpt. XXX — ${now.getFullYear()}/${now.getMonth()}/${now.getDay()}`;
windowTitleEl.textContent = windowTitle;
