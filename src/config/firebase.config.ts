import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyCPCqiJXLqd7hBeEVP2GqnqUGFNTW30O-o',
  authDomain: 'club-ecommerce-aeeb5.firebaseapp.com',
  projectId: 'club-ecommerce-aeeb5',
  storageBucket: 'club-ecommerce-aeeb5.firebasestorage.app',
  messagingSenderId: '286775252317',
  appId: '1:286775252317:web:52207b6f316cad1ab244b4'
}

export const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
