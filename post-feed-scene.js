import React, {Component, PropTypes} from 'react';
import {View, Text, Image, ListView, TouchableHighlight} from 'react-native';

import Post from './post'
import PostScene from './post-scene'

import connectToStores from 'alt-utils/lib/connectToStores';
import PostStore from './stores/PostStore';
import PostActions from './actions/PostActions'

class PostFeedScene extends Component {

    static propTypes = {
        title: PropTypes.string.isRequired,
        navigator: PropTypes.object.isRequired,
    }

    static getStores() {
        return [PostStore];
    }

    static getPropsFromStores() {
        return PostStore.getState();
    }

    constructor(props, context) {
        super(props, context);
        this._onForward = this._onForward.bind(this);
    }

    componentWillMount(){
        PostActions.fetchPosts();
    }

    _onForward(imageUri) {
        this.props.navigator.push({
            component: PostScene,
            title: 'Post',
            passProps: {imageUri: imageUri}
        });
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <ListView
                    dataSource={this.props.dataSource}
                    renderRow={(rowData) => {
                        return (
                            <View>
                                <TouchableHighlight onPress={() => this._onForward(rowData.images.standard_resolution.url)}>
                                    <View>
                                        <Post imageUri={rowData.images.standard_resolution.url}></Post>
                                    </View>
                                </TouchableHighlight>
                                <View style={{height:10}}></View>
                            </View>

                        )
                    }}
                />
            </View>
        )
    }
}

export default connectToStores(PostFeedScene);