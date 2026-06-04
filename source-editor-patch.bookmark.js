javascript:(function() {
    if (window.__bahamutSourceEditorPatchRunOnce) {
        return;
    }
    Object.defineProperty(window, "__bahamutSourceEditorPatchRunOnce", {
        value: true,
        configurable: false,
        writable: false,
        enumerable: false
    });
    if (!/^https:\/\/forum\.gamer\.com\.tw\/post1\.php/.test(location.href))
    {
        alert("本書籤只能在巴哈姆特哈拉區的發文頁面使用，請確認網址是否正確");
        return;
    };
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
    jQuery("#BH-menu-path .editor-toolbar").append(editorGroup);
})();