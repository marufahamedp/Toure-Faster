import { useEffect, useState } from "react"
import initializeAuthentication from "../Firebase/firebase.ini";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, signInWithEmailAndPassword,createUserWithEmailAndPassword, updateProfile, sendEmailVerification, sendPasswordResetEmail   } from "firebase/auth";
initializeAuthentication();
const useFirebase = () =>{
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isLoading, setIsloading] = useState(true);
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    // for sing in with google

    const singInUsingGoogle = () =>{
       return signInWithPopup(auth, googleProvider)
       .finally(()=> setIsloading(false))
        .catch(error =>{
            setError(error.message);
        })
    }

    // for sing in with email and password

    const singInwithEpass = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
        .finally(()=> setIsloading(false))
        .catch((error) =>{
            setError(error.code);
        })
    }

    // for registration

    const registration = (email, password, fullname) =>{
        createUserWithEmailAndPassword(auth, email, password)
        .finally(()=> setIsloading(false))
        .then((result) => {
          const user = result.user;
          setUserName(fullname);
          setUser(user);
          setError('');
          verifyEmail();
          logOut();
        })
        .catch((error) => {
            setError(error.code);
        });
    }


    // for verify email


    const verifyEmail = () =>{
        sendEmailVerification(auth.currentUser)
        .then((result) =>{ })
        .finally(()=> setIsloading(false))
    }

    // for update user name

    const setUserName = (fullname) =>{
        updateProfile(auth.currentUser, {displayName: fullname})
        .then((result) =>{
            
        })
        .finally(()=> setIsloading(false))
    }

    // for reset pass

    const resetPassword = (email) =>{
        sendPasswordResetEmail(auth, email)
        .then((result) =>{ })
        .finally(()=> setIsloading(false))
    }

// for log out

    const logOut = () =>{
        signOut(auth)
        .then(()=> {
            setUser({})
            
        })
        .finally(()=> setIsloading(false));
    }
    useEffect( () => {
        onAuthStateChanged(auth, user=>{
            if(user){
                setUser(user);
            }
            setIsloading(false);
        })
    })
    return {
        user,
        error,
        logOut,
        singInUsingGoogle,
        singInwithEpass,
        registration,
        resetPassword,
        isLoading
    }
}
export default useFirebase;