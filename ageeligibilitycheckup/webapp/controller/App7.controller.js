sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/m/MessageToast"
], function (Controller, JSONModel, MessageToast) {
    "use strict";

    return Controller.extend("demo.ageeligibilitycheckup.controller.App7", {
        onInit: function () {
            var oModel = new JSONModel({
                selectedKey: "1",
                dropdownItems: [
                    { key: "1", text: "Messi" },
                    { key: "2", text: "Ronaldo" },
                    { key: "3", text: "Neymar" }
                ]
            });

            this.getView().setModel(oModel);
        },

        onSelectionChange: function (oEvent) {
            var sSelectedKey = oEvent.getSource().getSelectedKey();
            var sSelectedText = oEvent.getParameter("selectedItem").getText();

            MessageToast.show("Selected: " + sSelectedText + " (" + sSelectedKey + ")");
        }
    });
});