/**
 * CropImage - TABBARITEM
 * https://menger.me
 * @大梦
 */

import React, {Component} from 'react'
import {
    Text,
    View,
    Image,
    StyleSheet,
    DeviceEventEmitter
} from 'react-native'
import NetRequest from '../../util/utilsRequest'
import NetApi from '../../constant/globalApi'
import {ACTION_NAVGATION} from '../../constant/eventActions'
import {toastShort, consoleLog} from '../../util/utilsToast'
import GlobalStyles from '../../constant/globalStyle'


export default class TabBarItem extends Component {

    constructor(props){
        super(props);
        this.state = {};
        this.netRequest = new NetRequest();
    }

    componentDidMount(){}

    render() {
        return (
            <View style={styles.container}>
                <Image source = {this.props.focused ? this.props.selectedImage : this.props.normalImage} style = {styles.tabBarIcon} />  
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        width: 40,
        height: 40,
        position: 'relative',
    },
    tabBarIcon: {
        width: 40,
        height: 40,
        resizeMode: 'contain'
    }
})