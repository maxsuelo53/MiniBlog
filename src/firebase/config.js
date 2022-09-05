import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCTxHP2Uvx7nGhfVylx5n_VfowPHw15cSE",
  authDomain: "miniblog-70c0b.firebaseapp.com",
  projectId: "miniblog-70c0b",
  storageBucket: "miniblog-70c0b.appspot.com",
  messagingSenderId: "943571134743",
  appId: "1:943571134743:web:3ccd48ef5df783dff5ef52"
};

//Iniciar a conexão com o firebase do google
const app = initializeApp(firebaseConfig);

//Iniciar o banco de dados do google
const db = getFirestore(app)

export {db}