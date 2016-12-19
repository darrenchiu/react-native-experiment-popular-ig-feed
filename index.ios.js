import React, {Component} from 'react';
import {AppRegistry, ListView, Text, View, Image, TabBarIOS} from 'react-native';

import PostFeedNavigator from './post-feed-navigator'
import CameraNavigator from './camera-navigator'
import GoogleSignInNavigator from './google-sign-in-navigator'

class PopularInstagram extends Component {
    // Initialize the hardcoded data

    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'login'
        };
    }

    render() {
        return (
            <TabBarIOS selectedTab={this.state.selectedTab}>
                <TabBarIOS.Item
                    selected={this.state.selectedTab === 'feed'}
                    systemIcon="history"
                    onPress={() => {
                          this.setState({
                              selectedTab: 'feed',
                          });
                      }}>
                    <PostFeedNavigator title="Feed"/>
                </TabBarIOS.Item>

                <TabBarIOS.Item
                    selected={this.state.selectedTab === 'camera'}
                    systemIcon="history"
                    onPress={() => {
                            this.setState({
                                selectedTab: 'camera',
                            });
                      }}>
                    <CameraNavigator title="Camera"/>
                </TabBarIOS.Item>

                <TabBarIOS.Item
                    selected={this.state.selectedTab === 'login'}
                    systemIcon="history"
                    onPress={() => {
                            this.setState({
                                selectedTab: 'login',
                            });
                      }}>
                    <GoogleSignInNavigator title="Login"/>
                </TabBarIOS.Item>
            </TabBarIOS>
        );
    }
}

// App registration and rendering
AppRegistry.registerComponent('PopularInstagram', () => PopularInstagram);