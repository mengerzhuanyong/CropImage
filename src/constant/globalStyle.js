/**
 * CropImage - GlobalStyles
 * https://menger.me
 * @大梦
 */

import {
    Platform,
    Dimensions,
} from 'react-native'

const themeColor = '#2e77e5';
const isIOS = Platform.OS === 'ios';
const {width, height} = Dimensions.get('window');

module.exports = {

    width: width,
    height: height,
    statusBar_Height_Ios: 44,
    statusBar_Height_Android: 50,

    scrollContainer: {
        marginTop: isIOS ? -64 : -70,
    },

    bgColor: '#f0f0f0',
    themeColor: themeColor,
    borderColor: '#999',
    themeDeepColor: '#3974fd',
    themeLightColor: '#719afc',
    shadowStyle: {
        shadowColor: '#ddd',
        shadowOffset: {
            width: 0.5,
            height: 0.5,
        },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 1,
    },

    rightButton: {
        paddingHorizontal: 8,
    },
    rightButtonName: {
        color: '#fff',
        fontSize: 15,
    },

    inputItemView: {
        flexDirection: 'row',
        alignItems: 'center',
        // borderBottomWidth: 1,
        // borderColor: '#ddd',
        justifyContent: 'space-between',
    },
    inputItemCon: {
        height: 45,
    },
    inputClearBtnView: {
        width: 20,
        height: 20,
    },
    inputClearBtnIcon: {
        width: 20,
        height: 20,
        tintColor: '#999',
        resizeMode: 'contain',
    },
    arrowIcon: {
        width: 15,
        height: 15,
        tintColor: '#888',
        resizeMode: 'contain',
    },
    selectIcon: {
        width: 22,
        height: 22,
        resizeMode: 'contain',
    },

    newMessageIcon: {        
        width: 23,
        height: 23,
        marginRight: 10,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
    },

    testContent: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f5f5f5',
    },
    testContentImg: {
        height: width * 0.8,
        resizeMode: 'contain',
    },
    testContext: {
        fontSize: 20,
        color: '#fff',
        marginTop: 100,
    },

    btnView: {
        margin: 20,
        height: 40,
        borderRadius: 5,
        width: width - 40,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: themeColor,
    },
    btnItem: {
        fontSize: 15,
        color: '#fff',
    },
};