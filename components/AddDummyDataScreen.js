import { collection, addDoc } from 'firebase/firestore';
import { db, setDoc } from '../firebaseConfig';
const addDummyDataToFirestore = async () => {
    try {
        // Define a collection reference
        const jobsCollectionRef = collection(db, 'jobs');

        // Add multiple dummy documents
        const dummyJobsData = [
            {
                company: 'Facebook',
                jobOverview: 'Looking for a skilled mobile app developer with experience in React Native',
                location: 'Benghazi',
                name: 'Mobile App Developer',
                salary: 60000,
                type: 'Full Time'
            },
            {
                company: 'Company XYZ',
                jobOverview: 'Job overview for Company XYZ',
                location: 'Tripoli',
                name: 'Software Engineer',
                salary: 70000,
                type: 'Contract'
            },
            // Add more dummy job objects as needed
        ];

        // Add each dummy job data to Firestore
        await Promise.all(dummyJobsData.map(async (jobData) => {
            await addDoc(collection(db, 'jobs'), jobData);
        }));

        console.log('Dummy data added to Firestore successfully');
    } catch (error) {
        console.error('Error adding dummy data to Firestore: ', error);
    }
};

export default addDummyDataToFirestore;
