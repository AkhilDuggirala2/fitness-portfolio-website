import { initializeApp } from "@firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCJve4AsAKIBZHUY2jq6zN6eZ_tkS5ANl4",
  authDomain: "fitness-portfolio-website-demo.firebaseapp.com",
  projectId: "fitness-portfolio-website-demo",
  storageBucket: "fitness-portfolio-website-demo.appspot.com",
  messagingSenderId: "494551763601",
  appId: "1:494551763601:web:37cf13bdcc7971f5dc0d30",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
