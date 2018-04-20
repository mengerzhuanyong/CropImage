/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {
    Component
} from 'react';
import {
    Text,
    View,
    Image,
    Platform,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker'

type Props = {};
const ImagePickerOptions = {
    multiple: true,
    mediaType: 'photo',
    includeBase64: true,
    compressImageQuality: 0.5,
};

export default class App extends Component < Props > {

    constructor(props) {
        super(props);
        this.state =  {
            images: [],
        };
    }

    handleImagesPicker = () => {
        ImagePicker.openPicker(ImagePickerOptions)
            .then(images => {
                console.log(images);
                this.setState({
                    images
                })
                // alert(images[0].sourceURL);
            });
    }

    renderImages = (data) => {
        if(data.length <= 0) {
            return;
        }
        let images = data.map((obj,index)=>{
            return (
                <TouchableOpacity
                    style = {styles.imageItemView}
                    key = {"image" + index}
                    activeOpacity = {1}
                    onPress = {() => {}}
                >
                    <Image source={{uri: obj.path}} style={styles.imageItem} />
                </TouchableOpacity>
            )
        });
        return (
            <View style={styles.imagesView}>
                {images}
            </View>
        )
    }

    render() {
        let {images} = this.state;
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={() => this.handleImagesPicker()}>
                    <Text style={styles.welcome}>点击上传</Text>
                </TouchableOpacity>
                {images && this.renderImages(images)}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f60',
    },
    welcome: {
        margin: 10,
        fontSize: 20,
        color: '#fff',
        textAlign: 'center',
    },
    imagesView: {
        flexWrap: 'wrap',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    imageItemView: {
        margin: 5,
        width: 100,
        height: 80,
        // backgroundColor: '#123',
    },
    imageItem: {
        width: 100,
        height: 80,
        resizeMode: 'contain',
    },
});