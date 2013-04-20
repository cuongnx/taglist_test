function Controller() {
    function createTagbox() {
        $.img_container.width = $.tag_img.width = Ti.UI.FILL;
        $.img_container.height = $.tag_img.height = 150;
        $.tag_desc.height = "50dp";
        $.tag_desc.text = args.desc;
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    $.__views.tagbox = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        top: "6dp",
        layout: "vertical",
        borderWidth: 2,
        borderColor: "#000",
        id: "tagbox"
    });
    $.__views.tagbox && $.addTopLevelView($.__views.tagbox);
    $.__views.img_container = Ti.UI.createView({
        top: 0,
        id: "img_container"
    });
    $.__views.tagbox.add($.__views.img_container);
    $.__views.tag_img = Ti.UI.createImageView({
        id: "tag_img"
    });
    $.__views.img_container.add($.__views.tag_img);
    $.__views.badge_img = Ti.UI.createImageView({
        top: 0,
        left: 0,
        id: "badge_img"
    });
    $.__views.img_container.add($.__views.badge_img);
    $.__views.tag_desc = Ti.UI.createLabel({
        height: Ti.UI.SIZE,
        width: "90%",
        color: "#000",
        textAlign: "left",
        font: {
            fontSize: Alloy.Globals.SMALL_FONT,
            fontFamily: "Helvetica Neue"
        },
        top: "5dp",
        backgroundColor: "#fff",
        id: "tag_desc"
    });
    $.__views.tagbox.add($.__views.tag_desc);
    $.__views.__alloyId1 = Ti.UI.createView({
        width: "100%",
        height: "25dp",
        top: "5dp",
        borderWidth: 1,
        borderColor: "#000",
        id: "__alloyId1"
    });
    $.__views.tagbox.add($.__views.__alloyId1);
    $.__views.retag = Ti.UI.createLabel({
        width: "50%",
        height: Ti.UI.FILL,
        textAlign: "center",
        color: "#000",
        font: {
            fontSize: Alloy.Globals.SMALL_FONT,
            fontWeight: "normal"
        },
        borderWidth: 1,
        borderColor: "#000",
        left: 0,
        id: "retag"
    });
    $.__views.__alloyId1.add($.__views.retag);
    $.__views.like = Ti.UI.createLabel({
        width: "50%",
        height: Ti.UI.FILL,
        textAlign: "center",
        color: "#000",
        font: {
            fontSize: Alloy.Globals.SMALL_FONT,
            fontWeight: "normal"
        },
        borderWidth: 1,
        borderColor: "#000",
        right: 0,
        id: "like"
    });
    $.__views.__alloyId1.add($.__views.like);
    $.__views.tag_user = Ti.UI.createView({
        top: 0,
        height: Ti.UI.SIZE,
        width: Ti.UI.FILL,
        backgroundColor: "#E8E8E8",
        id: "tag_user"
    });
    $.__views.tagbox.add($.__views.tag_user);
    $.__views.tag_user_ava = Ti.UI.createImageView({
        top: "5dp",
        left: "8dp",
        height: "40dp",
        width: "40dp",
        id: "tag_user_ava"
    });
    $.__views.tag_user.add($.__views.tag_user_ava);
    $.__views.tagged_lbl = Ti.UI.createLabel({
        width: Ti.UI.FILL,
        textAlign: "left",
        font: {
            fontSize: Alloy.Globals.SMALL_FONT,
            fontFamily: "Helvetica Neue"
        },
        top: "5dp",
        left: "55dp",
        id: "tagged_lbl"
    });
    $.__views.tag_user.add($.__views.tagged_lbl);
    $.__views.username = Ti.UI.createLabel({
        color: "#000",
        textAlign: "left",
        font: {
            fontSize: Alloy.Globals.SMALL_FONT,
            fontFamily: "Helvetica Neue",
            fontWeight: "bold"
        },
        top: "20dp",
        left: "55dp",
        id: "username"
    });
    $.__views.tag_user.add($.__views.username);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    createTagbox();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;