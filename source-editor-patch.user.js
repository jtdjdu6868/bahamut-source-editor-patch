// ==UserScript==
// @name         巴哈姆特哈拉區原始碼編輯補丁
// @namespace    https://jtdjdu6868.com/
// @version      1.0
// @description  臨時補上巴哈姆特哈拉區發文編輯器的原始碼切換功能
// @author       jtdjdu6868
// @match        https://forum.gamer.com.tw/post1.php*
// @icon         http://gamer.com.tw/favicon.ico
// @grant        none
// @run-at       document-idle
// @license      BY
// ==/UserScript==

(function() {
    'use strict';
    jQuery(window).on("load", () => {
        const editorGroup = jQuery("<div>", {
            class: "top-editor__icongroup top-editor__icongroup-fe_source1"
        });
        const sourceSwitchButton = jQuery("<button>", {
            class: 'editor-button fe_source',
            type: 'button',
            tabindex: '-1',
            text: '原始碼'
        }).on("mousedown", function(e) {
            bahaRte.toolbar.alternateView(!0),
            e.preventDefault(),
            e.stopPropagation()
        });
        editorGroup.append(sourceSwitchButton);
        jQuery("#BH-menu-path .editor-toolbar").append(sourceSwitchButton);
    });
})();