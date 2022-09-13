import {getAuth} from 'firebase/auth';
import {initializeApp} from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyC0Q8Gzq2rwqDJTO66-1Ve3nnjJb61f2xI',
  authDomain: 'fyi-app-a9a7e.firebaseapp.com',
  projectId: 'fyi-app-a9a7e',
  storageBucket: 'fyi-app-a9a7e.appspot.com',
  messagingSenderId: '866475993075',
  appId: '1:866475993075:web:c390ac8d20c4d1701bd486',
  measurementId: 'G-YR8GM7E8YF',
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
