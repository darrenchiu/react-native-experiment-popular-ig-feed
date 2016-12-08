import React, {Component} from 'react';
import {AppRegistry, ListView, Text, View, Image, NavigatorIOS} from 'react-native';

import Post from './post'
import PostFeedScene from './post-feed-scene'
import PostScene from './post-scene'

class PopularInstagram extends Component {
    // Initialize the hardcoded data

    render() {
        return (
            <NavigatorIOS
                initialRoute={{
                  component: PostFeedScene,
                  title: 'Feed',
                  passProps: {title: "My Initial Scene"}
                }}
                style={{flex: 1}}
            />

        );
    }
}

// App registration and rendering
AppRegistry.registerComponent('PopularInstagram', () => PopularInstagram);