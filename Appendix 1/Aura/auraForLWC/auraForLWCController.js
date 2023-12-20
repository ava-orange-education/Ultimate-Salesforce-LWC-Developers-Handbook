({
    printData : function(component, event) {
        var dt = event.getParam("lwcmessage");
        component.set("v.datalwc", dt);
    }
})
