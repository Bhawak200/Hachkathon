import firebase from "firebase";

firebase.initializeApp({
	apiKey: "AIzaSyAQtEk1DzFDK2vcPMMM0EWGkOWwlk666qU",
	authDomain: "doctor-s-info.firebaseapp.com",
	projectId: "doctor-s-info",
	storageBucket: "doctor-s-info.appspot.com",
	messagingSenderId: "381339807978",
	appId: "1:381339807978:web:bf84ca23a2b714fb7ba793",
	measurementId: "G-9WR6174XCS",
});
const db = firebase.firestore();

db.settings({ timestampsInSnapshots: true });
export { db };
