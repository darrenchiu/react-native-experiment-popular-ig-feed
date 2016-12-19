import React, {Component, PropTypes} from 'react';
import {View, Text, Image, Navigator, Dimensions} from 'react-native';

export default class Post extends Component {
    static propTypes = {
        imageUri: PropTypes.string.isRequired,
    }

    render() {
        return (
            <Image
                style={{'width': Dimensions.get('window').width,
                    'height': Dimensions.get('window').width}}
                source={{uri: this.props.imageUri}}
            />
        )
    }
}
