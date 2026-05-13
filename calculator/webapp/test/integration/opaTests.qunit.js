/* global QUnit */
QUnit.config.autostart = false;

sap.ui.require(["demo/calculator/test/integration/AllJourneys"
], function () {
	QUnit.start();
});
