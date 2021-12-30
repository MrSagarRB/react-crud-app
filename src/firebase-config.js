import { initializeApp} from "firebase/app"
import {getFirestore}from "@firebase/firestore";




const firebaseConfig = {
    apiKey: "AIzaSyAYWclviCodyXMuUfVs9Ah5XCFTKjZ41iE",
    authDomain: "react-curd-84b07.firebaseapp.com",
    databaseURL: "https://react-curd-84b07-default-rtdb.firebaseio.com",
    projectId: "react-curd-84b07",
    storageBucket: "react-curd-84b07.appspot.com",
    messagingSenderId: "448810911586",
    appId: "1:448810911586:web:75f097fd3dfbd7e17a0e3b",
    measurementId: "G-6W0039TZ2V"
  };


  const app =initializeApp(firebaseConfig);


 export const db=getFirestore(app);


