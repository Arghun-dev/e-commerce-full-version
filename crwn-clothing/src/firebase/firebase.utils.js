import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyCXmfxiLodIGwhhxavIOszAZADjztLY3Tk",
    authDomain: "world-shop-e7d3c.firebaseapp.com",
    databaseURL: "https://world-shop-e7d3c.firebaseio.com",
    projectId: "world-shop-e7d3c",
    storageBucket: "world-shop-e7d3c.appspot.com",
    messagingSenderId: "695602032095",
    appId: "1:695602032095:web:ce1d5fa971c5e1753a286a",
    measurementId: "G-3FHFLH0VW8"
};

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase