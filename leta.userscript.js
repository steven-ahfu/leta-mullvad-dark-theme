// ==UserScript==
// @name           Leta Mullvad: Inject Remote CSS
// @namespace      http://tampermonkey.net/
// @version        1.0.0
// @description    Mullvad Leta dark theme inspired by duckduckgo
// @match          *://leta.mullvad.net/*
// @grant          GM.xmlHttpRequest
// @connect        *githubusercontent.com
// @author         ahfuerdena
// @date           2025-05-13
// ==/UserScript==

(function () {
    "use strict";

    const cssUrl = 'https://raw.githubusercontent.com/user/repo/branch/file.css)';

    fetch(cssUrl)
        .then(res => res.text())
        .then(css => {
            const style = document.createElement('style');
            style.textContent = css;
            document.head.appendChild(style);
        })
        .catch(err => console.error('Failed to load remote CSS:', err));
})();
