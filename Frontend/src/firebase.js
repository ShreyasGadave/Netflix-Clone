// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA6yG6Ai7hCNW9Y4bSqf5w7Z44SCJHx04w",
  authDomain: "netflix-clone-5e9b2.firebaseapp.com",
  projectId: "netflix-clone-5e9b2",
  storageBucket: "netflix-clone-5e9b2.firebasestorage.app",
  messagingSenderId: "763367799120",
  appId: "1:763367799120:web:a960f14e087c57a2f89455"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth= getAuth(app)
const db = getFirestore(app);

const signup=async (name,email,passoword)=>{
try {
   const res= await createUserWithEmailAndPassword(auth,email,passoword)
   const user =res.user;
   await addDoc(collection(db,'user'), {
    uid: user.uid,
    name,
    authProvider: 'local',
    email,
   })
} catch (error) {
    console.log(error);
    toast.error(error.code.split('/')[1].split('-').join(' '))
}
}

const login=async (email,passoword)=>{
    try {
      await signInWithEmailAndPassword(auth,email,passoword)
    } catch (error) {
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(' '))

    }
} 

const logout=()=>{
    signOut(auth);
}

export{auth,db,login,signup,logout}