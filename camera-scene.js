import React, {Component, PropTypes} from 'react';
import {
    View, Text, Image, ListView, TouchableHighlight, Dimensions,
    StyleSheet
} from 'react-native';

import connectToStores from 'alt-utils/lib/connectToStores';
import PostStore from './stores/PostStore';

import Camera from 'react-native-camera';

class CameraScene extends Component {

    static propTypes = {
        title: PropTypes.string.isRequired,
        navigator: PropTypes.object.isRequired,
    }

    static getStores() {
        return [PostStore];
    }

    static getPropsFromStores() {
        return PostStore.getState();
    }

    constructor(props, context) {
        super(props, context);
    }

    render() {

        return (
            <View style={styles.container}>
                <Camera ref={(cam) => { this.camera = cam; }}
                        style={styles.preview}
                        aspect={Camera.constants.Aspect.fill}>
                    <Text style={styles.capture} onPress={this.takePicture.bind(this)}>[CAPTURE]</Text>
                </Camera>
            </View>
        )
    }

    takePicture() {
        this.camera.capture()
            .then((data) => console.log(data))
            .catch(err => console.error(err));
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width
    },
    capture: {
        flex: 0,
        backgroundColor: '#fff',
        borderRadius: 5,
        color: '#000',
        padding: 10,
        margin: 40
    }
});

export default connectToStores(CameraScene);