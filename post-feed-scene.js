import React, {Component, PropTypes} from 'react';
import {View, Text, Image, ListView, TouchableHighlight} from 'react-native';

import Post from './post'
import PostScene from './post-scene'
import {igToken} from './config'

export default class PostFeedScene extends Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        navigator: PropTypes.object.isRequired,
    }

    constructor(props, context) {
        super(props, context);
        this._onForward = this._onForward.bind(this);
        this.getPosts()
        console.log(igToken)

        this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: this.ds.cloneWithRows([])
        };
    }

    getPosts() {
        return fetch('https://api.instagram.com/v1/users/self/media/recent?access_token=' + igToken)
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson.data);
                return responseJson.data;
            })
            .then((data) => {
                let dataBlob = data.filter((item) => item.type == 'image');
                this.setState({
                    dataSource: this.ds.cloneWithRows(dataBlob)
                })

                console.log(dataBlob);

            })
            .catch((error) => {
                console.error(error);
            });
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
                    dataSource={this.state.dataSource}
                    renderRow={(rowData) => {
                        return (
                            <TouchableHighlight onPress={() => this._onForward(rowData.images.standard_resolution.url)}>
                                <View>
                                    <Post imageUri={rowData.images.standard_resolution.url}></Post>
                                </View>
                            </TouchableHighlight>
                        )
                    }}
                />
            </View>
        )
    }
}
