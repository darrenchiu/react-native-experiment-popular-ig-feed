import React, {Component, PropTypes} from 'react';
import {View, Text, Image, ListView, TouchableHighlight} from 'react-native';

import Post from './post'
import PostScene from './post-scene'

export default class PostFeedScene extends Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        navigator: PropTypes.object.isRequired,
    }

    constructor(props, context) {
        super(props, context);
        this._onForward = this._onForward.bind(this);

        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows([
                'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin'
            ])
        };
    }

    _onForward() {
        this.props.navigator.push({
            component: PostScene,
            title: 'Post',
        });
    }

    render() {
        return (
            <View style={{flex: 1, paddingTop: 22}}>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={(rowData) => {
                        return (
                            <TouchableHighlight onPress={this._onForward}>
                                <View>
                                    <Post></Post>
                                </View>
                            </TouchableHighlight>
                        )
                    }}
                />
            </View>
        )
    }
}
