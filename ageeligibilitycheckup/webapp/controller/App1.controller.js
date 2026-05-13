sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel",
], function (Controller, MessageToast,JSONModel) {
    "use strict";

    return Controller.extend("demo.ageeligibilitycheckup.controller.App1", {

        onInit: function () {

            var oModel = new JSONModel({
                buttonText: "Click Me"
            });

            this.getView().setModel(oModel);
        },

        onButtonPress: function () {
            var oModel = this.getView().getModel();
            var sCurrentText = oModel.getProperty("/buttonText");

            if (sCurrentText === "Click Me") {
                oModel.setProperty("/buttonText", "Clicked!");
            } else {
                oModel.setProperty("/buttonText", "Click Me");
                console.log("asjdbsabduiasbdai");
            }

            MessageToast.show("Button pressed");
        }
    });
});