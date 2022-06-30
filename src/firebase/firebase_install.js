// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref } from 'https://www.gstatic.com/firebasejs/9.1.2/firebase-database.js';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCk5EX3A9A64HdN83aM-g17Lmr8yqrnTq0",
    authDomain: "openfit-b640f.firebaseapp.com",
    projectId: "openfit-b640f",
    storageBucket: "openfit-b640f.appspot.com",
    messagingSenderId: "711315569207",
    appId: "1:711315569207:web:0cb9eab925a9b8cb195db2",
    measurementId: "G-BJ8P1GCBFP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase();
onAuthStateChanged(auth, (user) => {
    var new_counter = parseInt(localStorage.getItem("account_counter")) + 1;
    update(ref(database, "users/" + user.uid), {
        account_counter: new_counter
    });
    set(ref(database, "users/" + user.uid + "/accounts/account_" + new_counter), {
        account_name: name,
        account_adress: url,
        account_username: username,
        account_email: email,
        account_password: password,
        account_fees: fees,
        account_info: info,
        account_pi: pi
    })
    document.getElementById("create_creator_studio_window_first_layer").parentNode.removeChild(document.getElementById("create_creator_studio_window_first_layer"));
    show_all_accounts();
    //add the info texts to the body
    //remove the add account side window button
    try {
        document.getElementById("side_window_info_text").parentNode.removeChild(document.getElementById("side_window_info_text"));
    } catch (error) {
        try {
            document.getElementById("account_settings_info").innerHTML = "<p>existing accounts <div>" + localStorage.getItem("account_counter") + "/1000" + "</div></p>";
        } catch (error) { }
    }
});