({
	 getLiveChatRecord: function(component) {

        var action = component.get("c.getLiveChatTranscript");
        action.setParams({
            "recordId": component.get('v.recordId')
        });

        action.setCallback(self, function(a) {
            console.log(JSON.stringify(a.getReturnValue()));
            component.set('v.liveChatRec', a.getReturnValue())
        });
        // Enqueue the action
        $A.enqueueAction(action);

    },
    handleErrors: function (component, errors) {
        var errorMsg;
        console.log('errors=' + JSON.stringify(errors));
        //this.hideSpinner(component);
        
        // Pass the error message if any
        if (errors && Array.isArray(errors) && errors.length > 0) {
            errorMsg = errors[0].message;
        } else {
            errorMsg = errors;
        }
        component.set("v.errorMsg", errorMsg);
        
    }
})