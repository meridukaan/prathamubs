ubsApp.getPopupTemplate = function(templateConfig, tempVar){
    document.getElementById("templateContent").style.opacity="1";
    document.getElementById("templateContent").style["background-color"] = "transparent";
    ubsApp.startCurrentScenario();
	tempVar.html += ubsApp.getPopupHtml(templateConfig);
	ubsApp.popupConfig = {};
}

ubsApp.getPopupHtml = function(templateConfig) {
    let popupConfig = ubsApp.popupConfig;
    if(!popupConfig.buttons && popupConfig.showCloseButton) {
            let button = {
                'name' : ubsApp.getTranslation("CLOSE"),
                'action' : "ubsApp.callServerClosePopup();" 
            };

            popupConfig.buttons = [];
            popupConfig.buttons[0] = button;
        }

    templateConfig =  $.extend(templateConfig, popupConfig);

    return ubsPopupTemplate(templateConfig);
}