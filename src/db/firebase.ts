
import { initializeApp } from "firebase/app";
import { getDatabase,ref , set, get, child } from "firebase/database";

// import { useEffect, useState } from "react";


// const firebaseConfig = {
//   apiKey: "AIzaSyBlAzpfx89n_7vzJ-Bs5XQu1ccQXfzqUpk",
//   authDomain: "watch-party-7a698.firebaseapp.com",
//   databaseURL: "https://watch-party-7a698-default-rtdb.firebaseio.com",
//   projectId: "watch-party-7a698",
//   storageBucket: "watch-party-7a698.appspot.com",
//   messagingSenderId: "490953233273",
//   appId: "1:490953233273:web:ac0af7dc5f9b89bc9695a8"
// };

// const app = initializeApp(firebaseConfig);
// const database = getDatabase(app);


// export function WriteUserData( videoId:any, progress:any):any {

// const [snapshot,setSnapshto] = useState()

//   const db = getDatabase();
//   set(ref(db, 'videoId/' ), {
//     videoId: videoId,
//     progress: progress  
//   });  

//   useEffect(() => {
//     const dbRef = ref(getDatabase());
//    get(child(dbRef, `videoId/videoId`)).then((snapshot) => {
//      if (snapshot.exists()) {
//        console.log(snapshot.val());
       
//      } else {
//        console.log("No data available");
//      }
//    }).catch((error) => {
//      console.error(error);
//    });
   
//    },[snapshot])

  
// }

// export function getData () {

//  }
