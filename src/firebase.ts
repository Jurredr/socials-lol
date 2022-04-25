// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDTS80wNyaBL7OI0-gDCpm_PEJ-gFWMMWI',
  authDomain: 'socials-lol.firebaseapp.com',
  projectId: 'socials-lol',
  storageBucket: 'socials-lol.appspot.com',
  messagingSenderId: '537437076620',
  appId: '1:537437076620:web:c1f16eed369c0554574fa9',
  measurementId: 'G-YB3C560SB3'
}

// Initialize Firebase
const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig)
const analytics = getAnalytics(app)

const db = getFirestore(app)
const storage = getStorage(app)

export { app, analytics, db, storage }
