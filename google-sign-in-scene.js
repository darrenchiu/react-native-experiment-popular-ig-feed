import React, {Component, PropTypes} from 'react';
import {
    View, Text, Image, ListView, TouchableHighlight, Dimensions,
    StyleSheet, TouchableOpacity
} from 'react-native';

import connectToStores from 'alt-utils/lib/connectToStores';
import UserStore from './stores/UserStore';
import UserActions from './actions/UserActions';

import {GoogleSignin, GoogleSigninButton} from 'react-native-google-signin';

class GoogleSignInScene extends Component {

    static propTypes = {
        title: PropTypes.string.isRequired,
        navigator: PropTypes.object.isRequired,
    }

    static getStores() {
        return [UserStore];
    }

    static getPropsFromStores() {
        return UserStore.getState();
    }

    constructor(props, context) {
        super(props, context);
        this._signIn = this._signIn.bind(this);
    }

    componentDidMount() {
        this._setupGoogleSignin();
    }

    async _setupGoogleSignin() {
        try {
            await GoogleSignin.hasPlayServices({ autoResolve: true });
            await GoogleSignin.configure({
                // scopes: ["https://www.googleapis.com/auth/drive.readonly"],
                iosClientId: '39890045666-n0mhq6lcrbgkfe156f0sgs5ebmv1eroh.apps.googleusercontent.com',
            });

            const user = await GoogleSignin.currentUserAsync();
            console.log(user);
            UserActions.updateUser(user);
        }
        catch(err) {
            console.log("Google signin error", err.code, err.message);
        }
    }


    render() {
        if (!this.props.user) {
            return (
                <View style={styles.container}>
                    <GoogleSigninButton style={{width: 212, height: 48}} size={GoogleSigninButton.Size.Standard} color={GoogleSigninButton.Color.Light} onPress={this._signIn.bind(this)}/>
                </View>
            );
        }

        if (this.props.user) {
            return (
                <View style={styles.container}>
                    <Text style={{fontSize: 18, fontWeight: 'bold', marginBottom: 20}}>Welcome {this.props.user.name}</Text>
                    <Text>Your email is: {this.props.user.email}</Text>

                    <TouchableOpacity onPress={() => {this._signOut(); }}>
                        <View style={{marginTop: 50}}>
                            <Text>Log out</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            );
        }
    }


    _signIn() {
        GoogleSignin.signIn()
            .then((user) => {
                console.log(user);
                UserActions.updateUser(user);
            })
            .catch((err) => {
                console.log('WRONG SIGNIN', err);
            })
            .done();
    }

    _signOut() {
        GoogleSignin.revokeAccess().then(() => GoogleSignin.signOut()).then(() => {
            UserActions.clearUser();
        }).done();
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

export default connectToStores(GoogleSignInScene);