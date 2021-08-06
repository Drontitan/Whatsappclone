import firebase  from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBESs52i-__5HK1OTlTYVXs82oGBhFIPvQ",
    authDomain: "whatsapp-clone-49e8b.firebaseapp.com",
    projectId: "whatsapp-clone-49e8b",
    storageBucket: "whatsapp-clone-49e8b.appspot.com",
    messagingSenderId: "1005317203852",
    appId: "1:1005317203852:web:41432657a001d72ac4d8a9",
    measurementId: "G-YPS5ZX357W"
};

const firebaseapp = firebase.initializeApp(firebaseConfig);
const db =firebaseapp.firestore();
const auth =firebase.auth();
const provider =new firebase.auth.GoogleAuthProvider();

export {auth , provider};
export  default db;
