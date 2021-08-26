import firebase from "firebase";

const getDoc= (collection, id)=>{
        var db = firebase.firestore();
        return db.collection(collection).doc(id).get().then((doc) => {
            return doc.data();

        });
}

export default getDoc