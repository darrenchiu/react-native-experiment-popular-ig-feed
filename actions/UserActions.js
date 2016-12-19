import alt from '../alt';

class UserActions {
    updateUser(user) {
        return user;
    }

    clearUser() {
        return {};
    }
}

export default alt.createActions(UserActions);