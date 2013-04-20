function Controller() {
    function makeDynamicList() {
        var last_offset = 0;
        var tolerance = 3 * Ti.Platform.displayCaps.platformHeight / 2;
        $.scroll_list.addEventListener("scroll", function() {
            var current_offset = $.scroll_list.contentOffset.y;
            var list_length = 0;
            Ti.API.info(current_offset);
            0 > update_size && (list_length = $.list_content.size.height - $.scroll_list.size.height);
            if (current_offset > last_offset && 0 > update_size && tolerance >= list_length - current_offset) {
                $.loading.show();
                update_size = 1;
                Ti.API.info("listWidget: get more tags");
                getTagbox();
            }
            last_offset = current_offset;
        });
    }
    function getTagbox() {
        update_size = 10;
        for (var i = 0; 10 > i; ++i) createTagbox(i);
    }
    function createTagbox(i) {
        setTimeout(function() {
            var tagbox = Alloy.createController("tagbox", {
                desc: i
            });
            addToList(tagbox.getView());
        }, 50);
    }
    function addToList(view) {
        if (right_length >= left_length) {
            $.left_list.add(view);
            left_length = $.left_list.size.height;
            Ti.API.info("left: " + left_length);
        } else {
            $.right_list.add(view);
            right_length = $.right_list.size.height;
            Ti.API.info("right: " + right_length);
        }
        update_size -= 1;
        0 >= update_size && finishPopulate();
    }
    function finishPopulate() {
        left_length = $.left_list.size.height;
        right_length = $.right_list.size.height;
        $.loading.hide();
        update_size = -1;
        Ti.API.info("listWidget: finish get tagbox");
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    $.__views.scroll_list = Ti.UI.createScrollView({
        width: Ti.UI.FILL,
        contentWidth: Alloy.Globals.PLATFORM_WIDTH,
        contentHeight: Ti.UI.SIZE,
        scrollType: "vertical",
        layout: "vertical",
        top: 0,
        left: 0,
        showVerticalScrollIndicator: false,
        id: "scroll_list"
    });
    $.__views.scroll_list && $.addTopLevelView($.__views.scroll_list);
    $.__views.list_title = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        backgroundColor: "#fff",
        top: 0,
        id: "list_title"
    });
    $.__views.scroll_list.add($.__views.list_title);
    $.__views.list_content = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        top: "3dp",
        id: "list_content"
    });
    $.__views.scroll_list.add($.__views.list_content);
    $.__views.left_list = Ti.UI.createView({
        width: "46%",
        left: "3%",
        height: Ti.UI.SIZE,
        layout: "vertical",
        top: 0,
        id: "left_list"
    });
    $.__views.list_content.add($.__views.left_list);
    $.__views.right_list = Ti.UI.createView({
        width: "46%",
        right: "3%",
        height: Ti.UI.SIZE,
        layout: "vertical",
        top: 0,
        id: "right_list"
    });
    $.__views.list_content.add($.__views.right_list);
    $.__views.list_footer = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        top: "10dp",
        id: "list_footer"
    });
    $.__views.scroll_list.add($.__views.list_footer);
    $.__views.loading = Ti.UI.createActivityIndicator({
        message: " Loading...",
        id: "loading"
    });
    $.__views.scroll_list.add($.__views.loading);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var left_length = 0;
    var right_length = 0;
    var update_size = 0;
    exports.createUpdateList_tag = function() {
        getTagbox();
        makeDynamicList();
    };
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;