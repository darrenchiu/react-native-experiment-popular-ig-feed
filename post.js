import React, {Component, PropTypes} from 'react';
import {View, Text, Image, Navigator, Dimensions} from 'react-native';

export default class Post extends Component {
    static propTypes = {
        imageUri: PropTypes.string.isRequired,
    }

    render() {
        console.log(this.props.imageUri);
        return (
            <View style={{flex:1}}>
                <Image
                    style={{'width': Dimensions.get('window').width,
                        'height': Dimensions.get('window').width}}
                    resizeMode='contain'
                    source={{uri: this.props.imageUri}}
                />
                <View style={{height:10}}></View>
            </View>
        )
    }
}
