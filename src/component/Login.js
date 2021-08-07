import React, { Component } from 'react';
import withFirebaseAuth from 'react-with-firebase-auth'
import firebase from 'firebase/app'

import 'firebase/auth';
import firebaseConfig from '../FirebaseConfig';

const firebaseApp = firebase.initializeApp(firebaseConfig);

class Login extends Component {

    state = {
        userLog :  firebase.auth().currentUser
      
    }

    componentDidMount() {
        firebase.auth().onAuthStateChanged((user) => {

          });
             
    }


    render() {
        const {
            user,
            signOut,
            signInWithGoogle,
        } = this.props;

        return (
            <div className="text-center d-inline-block">
                {user &&
                    <p>Hello, {user.displayName}</p>

                }

                {
                    user
                        ? <button onClick={signOut}>Sign out</button>
                        :
                        <a className="fh5co_display_table" onClick={signInWithGoogle}>
                            <div className="fh5co_verticle_middle">
                                <i className="fa fa-google-plus"></i>
                            </div>
                        </a>

                }
            </div>
        );
    }
}

const firebaseAppAuth = firebaseApp.auth();

const providers = {
    googleProvider: new firebase.auth.GoogleAuthProvider(),
};

export default withFirebaseAuth({
    providers,
    firebaseAppAuth,
})(Login);