var args = arguments[0] || {};

createTagbox();

function createTagbox() {
	$.img_container.width = $.tag_img.width = Ti.UI.FILL;
	$.img_container.height = $.tag_img.height = 150;
	$.tag_desc.height = "50dp";
	$.tag_desc.text = args.desc;
}

