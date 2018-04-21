/**
 * CropImage - Router
 * https://menger.me
 * @大梦
 */

import React, {Component} from 'react'
import {
    View,
} from 'react-native'
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation'
import CardStackStyleInterpolator from 'react-navigation/src/views/CardStack/CardStackStyleInterpolator'

import stroage from '../store'
import '../store/global'

import GlobalIcons from '../constant/globalIcon'
import GlobalStyles from '../constant/globalStyle'

import TabBarItem from '../component/common/tabBarItem'

import Home from '../page/home/home'
import Mine from '../page/mine/mine'

const TabNavScreen = TabNavigator(
    {
        Home: {
            screen: Home,
            navigationOptions: ({navigation}) => ({
                header: null,
                tabBarLabel: '首页',
                tabBarIcon: ({focused, tintColor}) => (
                    <TabBarItem
                        subScript = {false}
                        tintColor = {tintColor}
                        focused = {focused}
                        normalImage = {GlobalIcons.icon_tabbar_home}
                        selectedImage = {GlobalIcons.icon_tabbar_home_cur}
                    />
                ),
            }),
        },
        Mine: {
            screen: Mine,
            navigationOptions: ({navigation}) => ({
                header: null,
                tabBarLabel: '我的',
                tabBarIcon: ({focused, tintColor}) => (
                    <TabBarItem
                        subScript = {false}
                        tintColor = {tintColor}
                        focused = {focused}
                        normalImage = {GlobalIcons.icon_tabbar_mine}
                        selectedImage = {GlobalIcons.icon_tabbar_mine_cur}
                    />
                ),
            }),
        },
    },
    {
        initialRouteName: 'Mine',
        tabBarComponent: TabBarBottom,
        tabBarPosition: 'bottom',
        swipeEnabled: true,
        tabBarOptions: {
            activeTintColor: '#42b3ff',
            inactiveTintColor: '#808080',
            style: { backgroundColor: '#fff' },
            labelStyle: { fontSize: 12, marginBottom: 4,}
        },
    }

);

const App = StackNavigator(
    {
        TabNavScreen: {
            screen: TabNavScreen
        },
    },
    {
        mode: 'card',
        headerMode: 'screen',
        initialRouteName: 'TabNavScreen',
        navigationOptions: ({navigation, screenProps}) => ({
            gesturesEnabled: true,
            header: null,
            headerBackTitle: null,
            headerTintColor: GlobalStyles.themeColor,
            headerStyle: {
                backgroundColor: '#fff',
            },
            showIcon: true,
            headerTitleStyle: {
                alignSelf: 'center',
            },
            headerRight: (
                <View />
            ),
        }),
        // transitionConfig:()=>({
        //     screenInterpolator: CardStackStyleInterpolator.forHorizontal,
        // }),
    }
);
const defaultGetStateForAction = App.router.getStateForAction;

App.router.getStateForAction = (action, state) => {
    if (global.user) {
        if ((action.routeName === 'Flow' && !global.user.loginState) || (action.routeName === 'Order' && !global.user.loginState) ) {
            this.routes = [
                ...state.routes,
                {
                    key: 'id-' + Date.now(),
                    routeName: 'Login',
                    params: {
                        name: 'name1'
                    }
                },
            ];
            return {
                ...state,
                routes,
                index: this.routes.length - 1,
            };
        }
    }
    return defaultGetStateForAction(action, state);
};

export default App;