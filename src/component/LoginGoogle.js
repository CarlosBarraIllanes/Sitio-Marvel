import React, { useContext } from "react";
import withFirebaseAuth from 'react-with-firebase-auth'
import firebase from 'firebase/app'
import UserContext from "../context/UserContext";
import 'firebase/auth';
import firebaseConfig from '../FirebaseConfig';

const firebaseApp = firebase.initializeApp(firebaseConfig);

const LoginGoogle = () => {
	const {user,handleAuth,handleLogout} = useContext(UserContext);

        return (
            <div className="text-center d-inline-block">

                {
                    user
                        ? <button onClick={handleLogout}>Sign out</button>
                        :
                        <a className="fh5co_display_table" onClick={handleAuth}>
                            <div className="fh5co_verticle_middle">
                                <i className="fa fa-google-plus"></i>
                            </div>
                        </a>

                }
            </div>



        );
    
}

const firebaseAppAuth = firebaseApp.auth();

const providers = {
    googleProvider: new firebase.auth.GoogleAuthProvider(),
};

export default withFirebaseAuth({
    providers,
    firebaseAppAuth,
})(LoginGoogle);