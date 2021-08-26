import firebase from "firebase";

const setDoc = (collection, data) => {
    var db = firebase.firestore();
    return db.collection(collection).doc(`${data.id}`).set(data)
        .then(() => {
            console.log("Document successfully written!");
        })
        .catch((error) => {
            console.error("Error writing document: ", error);
        });;
}

export default setDoc