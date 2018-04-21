/**
 * CropImage - 主入口
 * https://menger.me
 * @大梦
 */

import { AppRegistry } from 'react-native';
import App from './src'
// import App from './App'

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

console.ignoredYellowBox = ['Remote debugger is in', 'Warning: isMounted(...) is deprecated', 'Module RCTImageLoader'];

AppRegistry.registerComponent('CropImage', () => App);
