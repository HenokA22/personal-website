// Firebase initialization for the React app (optional usage)
// If you plan to use Analytics or other services in React, import from this module.
// Note: Analytics only works on production hosts or localhost with HTTPS context.

import { initializeApp } from 'firebase/app'
import { getAnalytics, isSupported } from 'firebase/analytics'

const firebaseConfig = {
  apiKey: 'AIzaSyCpAvpgNMn-QcGQiMWWBKlFkrB0QjcfkAo',
  authDomain: 'henok-assalif.firebaseapp.com',
  projectId: 'henok-assalif',
  storageBucket: 'henok-assalif.appspot.com',
  messagingSenderId: '789515310696',
  appId: '1:789515310696:web:706cb33bd74d81b2ae0ddd',
  measurementId: 'G-NCFQ6SL9BF',
}

export const app = initializeApp(firebaseConfig)
export const analyticsPromise = isSupported().then((ok) => (ok ? getAnalytics(app) : null))
