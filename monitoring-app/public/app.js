// 🔥 Your Firebase config (copy from console)
const firebaseConfig = {
    apiKey: "AIzaSyC2X7ccYXvsInGc1IgpIt7X4cAwFEswL4A",
    authDomain: "monitoring-app-d15ea.firebaseapp.com",
    projectId: "monitoring-app-d15ea",
    storageBucket: "monitoring-app-d15ea.firebasestorage.app",
    messagingSenderId: "1061823524277",
    appId: "1:1061823524277:web:cd5319298b0d0133943dfc",
    measurementId: "G-JBFFS1KS3Z"
};

// ✅ Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// 📝 Save data to Firestore
document.getElementById("saveBtn").addEventListener("click", async () => {
    try {
        await db.collection("users").add({
            name: "Mary John",
            timestamp: new Date()
        });
        alert("Data saved to Firestore!");
    } catch (error) {
        console.error("Error saving data: ", error);
    }
});

// 📖 Read data from Firestore
document.getElementById("readBtn").addEventListener("click", async () => {
    try {
        const snapshot = await db.collection("users").get();
        let output = "";
        snapshot.forEach(doc => {
            output += `${doc.id} => ${JSON.stringify(doc.data())}<br>`;
        });
        document.getElementById("output").innerHTML = output;
    } catch (error) {
        console.error("Error reading data: ", error);
    }
});
