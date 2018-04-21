/**
 * CropImage - App主页面
 * https://menger.me
 * @大梦
 */

import React, {Component} from 'react'
import {Image, InteractionManager} from 'react-native'
import SplashScreen from 'react-native-splash-screen'

import AppNavigation from './router'
import GlobalStyles from './constant/globalStyle'
import NetRequest from './util/utilsRequest'
import NetApi from './constant/globalApi'

export default class Index extends Component {
    constructor(props) {
        super(props);
        this.state =  {};
        this.netRequest = new NetRequest();
    }

    componentDidMount (){
        this.timer = setTimeout(() => {
            InteractionManager.runAfterInteractions(() => {
                SplashScreen.hide();
            });
        }, 3000);
    }

    componentWillUnmount(){
        this.timer && clearTimeout(this.timer);
    }

    render() {
        return (
            <AppNavigation />
        );
    }
};