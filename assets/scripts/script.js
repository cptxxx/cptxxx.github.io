"use strict";

const windowTitleEl = document.querySelector(`.window_title`);
const now = new Date();
const windowTitle = `Cpt. XXX — ${now.getMonth()}/${now.getDay()}/${now.getFullYear()}`;
windowTitleEl.textContent = windowTitle;
