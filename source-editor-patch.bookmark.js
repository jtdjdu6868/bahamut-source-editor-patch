javascript:(function() {
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