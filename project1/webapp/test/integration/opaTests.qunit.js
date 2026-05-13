/* global QUnit */
QUnit.config.autostart = false;

sap.ui.require(["demo/project1/test/integration/AllJourneys"
], function () {
	QUnit.start();
});
