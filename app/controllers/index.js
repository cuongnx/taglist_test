$.index.open();

var list = Alloy.createController("taglist");
$.list_container.add(list.getView());

list.createUpdateList_tag(); 