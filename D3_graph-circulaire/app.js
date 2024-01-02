
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB7hhJE9E6ck3NWKkg2NklHYCI8mcBnQ-0",
    authDomain: "d3-cours-projet-10346.firebaseapp.com",
    projectId: "d3-cours-projet-10346",
    storageBucket: "d3-cours-projet-10346.appspot.com",
    messagingSenderId: "537439448989",
    appId: "1:537439448989:web:d1fcdf4e60e90f8494c974",
    measurementId: "G-MLY7BJK4QM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const form = document.querySelector('form');
const nom = document.querySelector('#nom');
const prix = document.querySelector('#prix');
const erreur = document.querySelector('#erreur');

//console.log(form, nom, prix, erreur);

form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (nom.value && prix.value) {
        const item = {
            nom: nom.value,
            prix: parseInt(prix.value)
        }

        addDoc(collection(db, 'dépenses'), {
            nom: item.nom,
            prix: item.prix
        }).then(() => {
            erreur.textContent = "";
            nom.value = "";
            prix.value = "";
        }).catch((error) => {
            console.error("Erreur lors de l'ajout du document: ", error);
        });

    } else {
        erreur.textContent = "Remplissez les deux champs pour continuer."
    }


})