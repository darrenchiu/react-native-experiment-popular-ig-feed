import React, {Component, PropTypes} from 'react';
import {View, Text, Image, NavigatorIOS, Dimensions} from 'react-native';

import GoogleSignInScene from './google-sign-in-scene'


export default class GoogleSignInNavigator extends Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
    }

    render() {
        return (
            <NavigatorIOS
                initialRoute={{
                  component: GoogleSignInScene,
                  title: this.props.title,
                  passProps: {title: this.props.title}
                }}
                style={{flex: 1}}
            />
        )
    }
}
