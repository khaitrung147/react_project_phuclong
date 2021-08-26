import firebase from "firebase";

const getCollection= (collection)=>{
        var db = firebase.firestore();
        return db.collection(collection).get().then((querySnapshot) => {
            let data=[];
            querySnapshot.forEach(item=>{
                data.push(item.data());
            });
            return data;
        });
}

export default getCollection