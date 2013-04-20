var left_length = 0;
var right_length = 0;
var update_size = 0;

exports.createUpdateList_tag = function() {
	// first load
	getTagbox();

	//make the list update at end of scroll
	makeDynamicList();
}
function makeDynamicList() {
	var last_offset = 0;
	var tolerance = Ti.Platform.displayCaps.platformHeight * 3 / 2;

	$.scroll_list.addEventListener('scroll', function(e) {
		var current_offset = $.scroll_list.contentOffset.y;
		var list_length = 0;
		Ti.API.info(current_offset);

		if (update_size < 0) {
			list_length = $.list_content.size.height - $.scroll_list.size.height;
		}

		if (current_offset > last_offset) {
			if ((update_size < 0) && ((list_length - current_offset) <= tolerance)) {

				// perform update and prevent continuous update by setting update_size > 0
				$.loading.show();
				update_size = 1;
				Ti.API.info("listWidget: get more tags");
				getTagbox();

			}
		}

		last_offset = current_offset;
	});

}

function getTagbox() {
	update_size = 10;
	for (var i = 0; i < 10; ++i) {
		//create new tagbox for the tag
		createTagbox(i);
	}
}

function createTagbox(i) {
	setTimeout(function() {
		var tagbox = Alloy.createController("tagbox", {
			desc : i,
		});

		addToList(tagbox.getView());
	}, 50);
}

function addToList(view) {
	if ((left_length) <= (right_length)) {
		$.left_list.add(view);
		left_length = $.left_list.size.height;
		Ti.API.info("left: " + left_length);
	} else {
		$.right_list.add(view);
		right_length = $.right_list.size.height;
		Ti.API.info("right: " + right_length);
	}

	update_size -= 1;
	if (update_size <= 0) {

		//finish the update and let the list be able to update again
		finishPopulate();
	}
}

function finishPopulate() {
	left_length = $.left_list.size.height;
	right_length = $.right_list.size.height;

	$.loading.hide();
	update_size = -1;

	Ti.API.info("listWidget: finish get tagbox");
}
