import firebase from 'firebase'

const firebaseConfig = {
  apiKey: 'AIzaSyDIpV6_UTOxBoXvX5tfbSQ4eC2N1msl6O8',
  authDomain: 'whatsapp-810f2.firebaseapp.com',
  projectId: 'whatsapp-810f2',
  storageBucket: 'whatsapp-810f2.appspot.com',
  messagingSenderId: '115872281326',
  appId: '1:115872281326:web:570edabcd9e3a0c89979ff',
}

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app()

const db = app.firestore()

const auth = app.auth()

const provider = new firebase.auth.GoogleAuthProvider()

export { db, auth, provider }
