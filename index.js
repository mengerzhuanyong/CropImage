import { AppRegistry } from 'react-native';
import App from './App';

if ( !__DEV__ ) {
    global.console = {
        log: () => {},
        info: () => {},
        warn: () => {},
        error: () => {},
        gruop: () => {},
        gruopEnd: () => {},
    };
};

console.ignoredYellowBox = ['Remote debugger is in'];

AppRegistry.registerComponent('CropImage', () => App);
