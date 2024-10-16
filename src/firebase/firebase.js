// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDocs, collection } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBhkLht-F5RO3qtWNB_715uOXqpIdhDoNA",
    authDomain: "bagrie-shop-project.firebaseapp.com",
    projectId: "bagrie-shop-project",
    storageBucket: "bagrie-shop-project.appspot.com",
    messagingSenderId: "855460445198",
    appId: "1:855460445198:web:b4af4c10eafbc91cd3905f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

//Obtener toda una coleccion
export async function getProducts() {
    try {
        const querySnapshot = await getDocs(collection(db, "products"))
        const productsList = querySnapshot.docs.map(docu => {
            return {
                id: docu.id,
                ...docu.data()
            }
        })
        return productsList;
    } catch (error) {
        console.error("error al obtener el documento: ", error);
    }
}