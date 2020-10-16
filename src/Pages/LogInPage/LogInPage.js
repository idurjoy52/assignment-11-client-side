import React, { useContext} from 'react';
import './LoginPage.css';
import "firebase/auth";
import * as firebase from "firebase/app";
import logo from '../../images/logos/logo.png'
import googleLogo from '../../images/google.png'
import { UserContext } from '../../App';
import { Link, useHistory, useLocation } from 'react-router-dom';
import firebaseConfig from '../../firebase.config';

const LogInPage = () => {
    const [loggedInUser,setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const {from} = location.state || {from:{pathname:"/"}}
    if(firebase.apps.length === 0){
        firebase.initializeApp(firebaseConfig);
    }
    const provider = new firebase.auth.GoogleAuthProvider();
    const handleGoogleSignIn = () => {
        firebase.auth().signInWithPopup(provider)
        .then(function(result) {
            const {displayName,email,photoURL} = result.user;
            const signedInUser = {name: displayName,email:email,image:photoURL};
            setLoggedInUser(signedInUser);
            history.replace(from)
          })
          .catch(function(error) {
                console.log(error)
          });
    }

 

    return (
        <div className="container mt-5">
            <div>
               <Link to="/home"><img style={{width: "70x",height: "60px",display:'block',margin:'auto'}} src={logo} alt=""/></Link> 
            </div>
            <div className="login-box mt-5"> 
                <div className="google-signin"> 
                    <h2 className="text-center">Log In With</h2>
                    <button className="btn login-btn d-block" onClick={handleGoogleSignIn}><img style={{height:'40px',width:'50px',marginRight:'30px'}} src={googleLogo} alt=""/> Continue with Google</button>
                </div>
            </div>
        </div>

    );
};

export default LogInPage;