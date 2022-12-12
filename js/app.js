import * as flsFunctions from './modules/functions.js';
import popup from './modules/popup.js';
import burgerMenu from './modules/burgerMenu.js';
import tabs from './modules/tabs.js';
import forms from './modules/forms.js';

window.addEventListener('DOMContentLoaded', function() {
    flsFunctions.isWebp();

    tabs();
    burgerMenu();
    popup();
    forms();
});