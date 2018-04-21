/**
 * CropImage - App主页面
 * https://menger.me
 * @大梦
 */

import React, {Component} from 'react';
import {
    Text,
    View,
    Image,
    Platform,
    Dimensions,
    ScrollView,
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

    constructor() {
        super();
        this.state = {
            image: [],
            images: []
        };
    }

    pickSingleWithCamera = (cropping) => {
        ImagePicker.openCamera({
            cropping: cropping,
            width: 500,
            height: 500,
            includeExif: true,
        }).then(image => {
            console.log('received image', image);
            this.setState({
                image: {
                    uri: image.path,
                    width: image.width,
                    height: image.height
                },
                images: null
            });
        }).catch(e => alert(e));
    }

    pickSingleBase64 = (cropit) => {
        ImagePicker.openPicker({
            width: 300,
            height: 300,
            cropping: cropit,
            includeBase64: true,
            includeExif: true,
        }).then(image => {
            console.log('received base64 image');
            this.setState({
                image: {
                    uri: `data:${image.mime};base64,` + image.data,
                    width: image.width,
                    height: image.height
                },
                images: null
            });
        }).catch(e => alert(e));
    }

    cleanupImages = () => {
        ImagePicker.clean().then(() => {
            console.log('removed tmp images from tmp directory');
        }).catch(e => {
            alert(e);
        });
    }

    cleanupSingleImage = () => {
        let image = this.state.image || (this.state.images && this.state.images.length ? this.state.images[0] : null);
        console.log('will cleanup image', image);

        ImagePicker.cleanSingle(image ? image.uri : null).then(() => {
            console.log(`removed tmp image ${image.uri} from tmp directory`);
        }).catch(e => {
            alert(e);
        })
    }

    cropLast = () => {
        if (!this.state.image) {
            return Alert.alert('No image', 'Before open cropping only, please select image');
        }

        ImagePicker.openCropper({
            path: this.state.image.uri,
            width: 200,
            height: 200
        }).then(image => {
            console.log('received cropped image', image);
            this.setState({
                image: {
                    uri: image.path,
                    width: image.width,
                    height: image.height,
                    mime: image.mime
                },
                images: null
            });
        }).catch(e => {
            console.log(e);
            Alert.alert(e.message ? e.message : e);
        });
    }

    pickSingle = (cropit, circular = false) => {
        ImagePicker.openPicker({
            width: 300,
            height: 300,
            cropping: cropit,
            cropperCircleOverlay: circular,
            compressImageMaxWidth: 640,
            compressImageMaxHeight: 480,
            compressImageQuality: 0.5,
            compressVideoPreset: 'MediumQuality',
            includeExif: true,
        }).then(image => {
            console.log('received image', image);
            this.setState({
                image: {
                    uri: image.path,
                    width: image.width,
                    height: image.height,
                    mime: image.mime
                },
                images: null
            });
        }).catch(e => {
            console.log(e);
            Alert.alert(e.message ? e.message : e);
        });
    }

    pickMultiple = () => {
        ImagePicker.openPicker({
            multiple: true,
            waitAnimationEnd: false,
            includeExif: true,
        }).then(images => {
            this.setState({
                image: null,
                images: images.map(i => {
                    console.log('received image', i);
                    return {
                        uri: i.path,
                        width: i.width,
                        height: i.height,
                        mime: i.mime
                    };
                })
            });
        }).catch(e => alert(e));
    }

    scaledHeight = (oldW, oldH, newW) => {
        return (oldH / oldW) * newW;
    }

    renderImage = (image) => {
        return <Image style={{width: 300, height: 300, resizeMode: 'contain'}} source={image} />
    }

    renderAsset = (image) => {
        if (image.mime && image.mime.toLowerCase().indexOf('video/') !== -1) {
            return this.renderVideo(image);
        }

        return this.renderImage(image);
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
        let {image, images} = this.state;
        return (
            <ScrollView style={styles.container}>
                <View style={styles.btnView}>
                    <TouchableOpacity onPress={() => this.pickSingleWithCamera(false)} style={styles.btnItem}>
                        <Text style={styles.btnName}>Select Single With Camera</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.pickSingleWithCamera(true)} style={styles.btnItem}>
                        <Text style={styles.btnName}>Select Single With Camera With Cropping</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.pickSingle(false)} style={styles.btnItem}>
                        <Text style={styles.btnName}>Select Single</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.cropLast()} style={styles.btnItem}>
                        <Text style={styles.btnName}>Crop Last Selected Image</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.pickSingleBase64(false)} style={styles.btnItem}>
                        <Text style={styles.btnName}>Select Single Returning Base64</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.pickSingle(true)} style={styles.btnItem}>
                        <Text style={styles.btnName}>Select Single With Cropping</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.pickSingle(true, true)} style={styles.btnItem}>
                        <Text style={styles.btnName}>Select Single With Circular Cropping</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.pickMultiple} style={styles.btnItem}>
                        <Text style={styles.btnName}>Select Multiple</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.cleanupImages} style={styles.btnItem}>
                        <Text style={styles.btnName}>Cleanup All Images</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.cleanupSingleImage} style={styles.btnItem}>
                        <Text style={styles.btnName}>Cleanup Single Image</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.imagesView}>
                    {image ? this.renderAsset(image) : null}
                    {images ? images.map(i => <View key={i.uri}>{this.renderAsset(i)}</View>) : null}
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f60',
    },
    btnView: {
        marginTop: 35,
    },
    btnItem: {},
    btnName: {
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