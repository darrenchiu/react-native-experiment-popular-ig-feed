import alt from '../alt';
import UserActions from '../actions/UserActions'
import {View, Text, Image, ListView, TouchableHighlight} from 'react-native';

class UserStore {
    constructor() {
        this.bindListeners({
            updateUser: UserActions.updateUser,
            clearUser: UserActions.clearUser,
        });

        this.state = {
            user: null
        };
    }

    updateUser(user) {
        console.log(this.state);
        this.setState({user: user});
        console.log(this.state);
    }

    clearUser() {
        this.setState({user: null});
    }
}

export default alt.createStore(UserStore, 'UserStore');