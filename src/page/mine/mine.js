/**
 * CropImage - Mine
 * https://menger.me
 * @大梦
 */

import React, {Component} from 'react'
import {
    Text,
    View,
    Image,
    FlatList,
    TextInput,
    ScrollView,
    StyleSheet,
    TouchableOpacity
} from 'react-native'

import NavigationBar from '../../component/common/navigationBar'
import UtilsView from '../../util/utilsView'

import NetApi from '../../constant/globalApi'
import NetRequest from '../../util/utilsRequest'
import GlobalIcons from '../../constant/globalIcon'
import GlobalStyles from '../../constant/globalStyle'
import {toastShort, consoleLog} from '../../util/utilsToast'

export default class Mine extends Component {

    constructor(props) {
        super(props);
        this.state =  {};
        this.netRequest = new NetRequest();
    }

    componentDidMount(){
        this.loadNetData();
    }

    componentWillUnmount(){
        this.timer && clearTimeout(this.timer);
    }

    onPushToNextPage = (pageTitle, page) => {
        let {navigate} = this.props.navigation;
        navigate(page, {
            pageTitle: pageTitle,
        });
    };

    loadNetData = () => {};

    dropLoadMore = async () => {};

    freshNetData = async () => {};

    render(){
        let {} = this.state;
        return (
            <View style={styles.container}>
                <View style={styles.content}>
                    <Text style={styles.contentText}>Mine</Text>
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fafafa',
    },
    content: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#f60',
        justifyContent: 'center',
    },
    contentText: {
        fontSize: 16,
        color: '#fff',
    }
});