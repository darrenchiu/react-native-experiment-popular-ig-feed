import alt from '../alt';
import {igToken} from '../config'

class PostActions {
    updatePosts(posts) {
        return posts;
    }

    fetchPosts() {
        return (dispatch) => {
            // we dispatch an event here so we can have "loading" state.
            dispatch();
            fetch('https://api.instagram.com/v1/users/self/media/recent?access_token=' + igToken)
                .then((response) => response.json())
                .then((responseJson) => {
                    return responseJson.data;
                })
                .then((data) => {
                    this.updatePosts(data);
                })
                .catch((error) => {
                    console.error(error);
                    this.postsFailed(error);
                });
        }
    }

    postsFailed(errorMessage) {
        return errorMessage;
    }
}

export default alt.createActions(PostActions);