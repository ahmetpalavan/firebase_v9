import {initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCKuD06v1VrrGACpjMvDZuERv1KLo2WnOU",
    authDomain: "modern-react-app-87977.firebaseapp.com",
    projectId: "modern-react-app-87977",
    storageBucket: "modern-react-app-87977.appspot.com",
    messagingSenderId: "756070800373",
    appId: "1:756070800373:web:aac5f46314e969ce1f5ebc"
};

const app=initializeApp(firebaseConfig)

const db=getFirestore()
const auth=getAuth()
export{db,auth};
// const auth=getFirestore()