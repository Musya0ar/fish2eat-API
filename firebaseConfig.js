const admin = require("firebase-admin");
const serviceAccountPath = "/secrets/firebase-adminsdk.json"; // Path where secret is mounted

admin.initializeApp({
    credential: admin.credential.cert(serviceAccountPath),
    databaseURL: process.env.FIREBASE_DATABASE_URL,
});

const db = admin.firestore();
