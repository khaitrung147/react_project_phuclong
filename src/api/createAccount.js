import firebase from "firebase";

const createAccount = (email, password) => {
    var db = firebase.firestore();
    return firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in 
            var user = userCredential.user;
            return user.uid
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            // ..
        });
}

export default createAccount