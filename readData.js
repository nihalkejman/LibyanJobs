// Import necessary functions from Firebase
import { db } from './firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';

// Function to read data from Firestore
async function readData() {
    try {
        const jobsCollection = collection(db, 'jobs');

        const querySnapshot = await getDocs(jobsCollection);

        querySnapshot.forEach((doc) => {
            const data = doc.data(); // Retrieve the document data
            const { company, jobOverview, name } = data; // Destructure the fields from the document data
            console.log(`Company: ${company}, Job: ${name}, Overview: ${jobOverview}`);
        });
    } catch (error) {
        console.error('Error reading data: ', error);
    }
}

readData();
