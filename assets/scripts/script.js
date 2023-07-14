"use strict";

const windowTitleEl = document.getElementById(`window_title-date`);
const nowYear = new Date().getFullYear();
windowTitleEl.textContent = nowYear;
