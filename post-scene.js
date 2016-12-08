import React, { Component, PropTypes } from 'react';
import { View, Text, Image, ListView, TouchableHighlight } from 'react-native';

import Post from './post'

export default class PostScene extends Component {
    static propTypes = {
        imageUri: PropTypes.string.isRequired,
    }

    constructor(props, context) {
        super(props, context);
    }


    render() {
        return (
            <View style={{flex: 1, paddingTop: 22}}>
                <Post imageUri={this.props.imageUri}></Post>
            </View>
        )
    }

}
