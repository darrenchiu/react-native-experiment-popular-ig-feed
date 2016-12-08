import React, {Component, PropTypes} from 'react';
import {View, Text, Image, NavigatorIOS, Dimensions} from 'react-native';

import PostFeedScene from './post-feed-scene'

export default class PostFeedNavigator extends Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
    }

    render() {
        return (
            <NavigatorIOS
                initialRoute={{
                  component: PostFeedScene,
                  title: this.props.title,
                  passProps: {title: this.props.title}
                }}
                style={{flex: 1}}
            />
        )
    }
}
