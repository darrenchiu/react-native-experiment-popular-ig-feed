import React, {Component} from 'react';
import {View, Text, Image, Navigator, Dimensions} from 'react-native';

export default class Post extends Component {

    render() {
        return (
            <View style={{flex:1}}>
                <Image
                    style={{'width': Dimensions.get('window').width,
                        'height': Dimensions.get('window').width}}
                    resizeMode='contain'
                    source={{uri: 'https://scontent-hkg3-1.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/15258641_668593743301826_4909924243904397312_n.jpg?ig_cache_key=MTM5OTkwMzMyMTQ1MTcxOTI0NQ%3D%3D.2'}}
                />
                <View style={{height:10}}></View>
            </View>
        )
    }
}
