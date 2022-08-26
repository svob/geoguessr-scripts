// ==UserScript==
// @name         Unwanted lobbies remover
// @version      1.0
// @description  Removes lobbies created by blacklisted users from the party.
// @author       Sparrow318
// @match        https://www.geoguessr.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=geoguessr.com
// @grant        none
// @license      MIT
// @downloadURL  none
// @updateURL    none
// ==/UserScript==

const blacklist = [
    "Just_Zaty",
    ]



/* ############################################################################### */
/* ##### DON'T MODIFY ANYTHING BELOW HERE UNLESS YOU KNOW WHAT YOU ARE DOING ##### */
/* ############################################################################### */

const init = () => {
    'use strict';

    const observer = new MutationObserver(() => {
        let lobbies = document.querySelectorAll(".party-lobby-card_creatorNick__wfdXS .user-nick_nick__y4VIt");
        for (let i = 0; i < lobbies.length; i++) {
            if (blacklist.indexOf(lobbies[i].innerText.slice(0, -1)) >= 0) {
                lobbies[i].parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.remove();
            }
        }
    });

    observer.observe(document.querySelector(".version3_main__xNkED"), { subtree: true, childList: true })
};

init();