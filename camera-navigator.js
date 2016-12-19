import React, {Component, PropTypes} from 'react';
import {View, Text, Image, NavigatorIOS, Dimensions} from 'react-native';

import CameraScene from './camera-scene'


export default class CameradNavigator extends Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
    }

    render() {
        return (
            <NavigatorIOS
                initialRoute={{
                  component: CameraScene,
                  title: this.props.title,
                  passProps: {title: this.props.title}
                }}
                style={{flex: 1}}
            />
        )
    }
}
