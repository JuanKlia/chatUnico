import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBixpz20jhE5PDQDNAyWv4IKDM6HDK8yNk",
  authDomain: "chatunico-852ed.firebaseapp.com",
  databaseURL: "https://chatunico-852ed-default-rtdb.firebaseio.com",
  projectId: "chatunico-852ed",
  storageBucket: "chatunico-852ed.appspot.com",
  messagingSenderId: "325055515211",
  appId: "1:325055515211:web:c6fc319f0a491b5367dbce",
};

const app = initializeApp(firebaseConfig);

const dataBase = getDatabase();

export { dataBase };
