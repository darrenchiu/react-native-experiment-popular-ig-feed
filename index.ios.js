import React, {Component} from 'react';
import {AppRegistry, ListView, Text, View, Image, TabBarIOS} from 'react-native';

import Post from './post'
import PostFeedScene from './post-feed-scene'
import PostScene from './post-scene'
import PostFeedNavigator from './post-feed-navigator'

class PopularInstagram extends Component {
    // Initialize the hardcoded data

    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'welcome'
        };
    }

    render() {
        return (
            <TabBarIOS selectedTab={this.state.selectedTab}>
                <TabBarIOS.Item
                    selected={this.state.selectedTab === 'welcome'}
                    systemIcon="history"
                    onPress={() => {
                          this.setState({
                              selectedTab: 'welcome',
                          });
                      }}>
                    <PostFeedNavigator title="9GAG"/>
                </TabBarIOS.Item>

                <TabBarIOS.Item
                    selected={this.state.selectedTab === 'more'}
                    systemIcon="history"
                    onPress={() => {
                            this.setState({
                                selectedTab: 'more',
                            });
                      }}>
                    <PostFeedNavigator title="TechCrunch"/>
                </TabBarIOS.Item>
            </TabBarIOS>
        );
    }
}

// App registration and rendering
AppRegistry.registerComponent('PopularInstagram', () => PopularInstagram);