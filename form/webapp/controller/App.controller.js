sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/m/MessageToast"
], (Controller,MessageToast) => {
  "use strict";

  return Controller.extend("demo.form.controller.App", {
      onInit() {
      },
      onNameChange: function(oEvent) {

        var sValue = oEvent.getParameter("value");
        var oInput = oEvent.getSource();

        if (sValue===undefined || sValue.trim().length===0) {
            oInput.setValueState("Error");
            oInput.setValueStateText("Field is Required");

        } else {
            oInput.setValueState("Success");

        }
    },
    onSubmit:function(){
      const name=this.byId("name").getValue();
      const surname=this.byId("surname").getValue();
      const email=this.byId("email").getValue();
      const number=this.byId("mobile").getValue();

      if(!name || !surname || !email || !number ){
        MessageToast.show("Filled required Fields");
      }
      else{
        MessageToast.show("Form Submitted");
      }
    }
  });
});