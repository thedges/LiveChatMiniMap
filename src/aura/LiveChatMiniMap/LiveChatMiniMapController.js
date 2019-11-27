({
   doInit : function(component, event, helper) {
		console.log('LiveChatMiniMap:doInit...');
		helper.getLiveChatRecord(component);
	}
})