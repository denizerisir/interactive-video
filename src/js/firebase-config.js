// Import Firebase modules
import { initializeApp } from 'https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js'
import { getAuth } from 'https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js'
import config from './config.js'

// Firebase configuration
const firebaseConfig = {
  apiKey: config.FIREBASE_API_KEY,
  authDomain: 'interactive-video-1be5e.firebaseapp.com',
  projectId: 'interactive-video-1be5e',
  storageBucket: 'interactive-video-1be5e.firebasestorage.app',
  messagingSenderId: '377189282599',
  appId: '1:377189282599:web:d7d14ceeddb080dfd1af02',
  measurementId: 'G-RX7ZCT9NPG'
}

// Initialize Firebase and Auth
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

// Export auth for use in other modules
export { auth }
