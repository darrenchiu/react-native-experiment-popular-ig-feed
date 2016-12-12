import alt from '../alt';
import PostActions from '../actions/PostActions'
import {View, Text, Image, ListView, TouchableHighlight} from 'react-native';

class PostStore {
    constructor() {
        this.bindListeners({
            updatePosts: PostActions.updatePosts,
            fetchPosts: PostActions.fetchPosts,
            postsFailed: PostActions.postsFailed
        });


        this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

        this.state = {
            dataSource: this.ds.cloneWithRows([])
        };
    }

    updatePosts(data) {
        let dataBlob = data.filter((item) => item.type == 'image');

        this.setState({
            dataSource: this.ds.cloneWithRows(dataBlob)
        })
    }

    fetchPosts() {
        // reset the array while we're fetching new locations so React can
        // be smart and render a spinner for us since the data is empty.
        // this.setState = [];
    }

    postsFailed(errorMessage) {
        // this.errorMessage = errorMessage;
    }
}

export default alt.createStore(PostStore, 'PostStore');