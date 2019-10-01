const Configuration = require('./Configuration.js');
const BeaconScanner = require('./BLEScanner.js');
const WebsocketClient = require('./WebsocketClient.js');
configuration = new Configuration("./configuration.json");
beaconScanner = new BeaconScanner(configuration);
const websocketClient = new WebsocketClient(configuration.getConfigurationData('websocket:url'));
beaconScanner.addObserver(websocketClient);
beaconScanner.startScan();





