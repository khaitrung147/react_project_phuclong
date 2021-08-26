import firebase from "firebase";

const deleteDoc = (collection, id) => {
    var db = firebase.firestore();
    return db.collection(collection).doc(`${id}`).delete().then(() => {
        console.log("Document successfully deleted!");
    }).catch((error) => {
        console.error("Error removing document: ", error);
    });
}

export default deleteDoc