import firebase from "firebase";

const updateDoc = (collection, id, data) => {
    var db = firebase.firestore();
    return db.collection(collection).doc(`${id}`).update(data)
        .then(() => {
            console.log("Document successfully written!");
        })
        .catch((error) => {
            console.error("Error writing document: ", error);
        });;
}

export default updateDoc