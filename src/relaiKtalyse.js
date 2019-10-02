//const Configuration = require('./Configuration.js');
const BeaconScanner = require('./BLEScanner.js');
const WebsocketClient = require('./WebsocketClient.js');
//configuration = new Configuration("./configuration.json");
beaconScanner = new BeaconScanner("3");
const websocketClient = new WebsocketClient("ws://79.137.78.86:8090");
beaconScanner.addObserver(websocketClient);
beaconScanner.startScan();





