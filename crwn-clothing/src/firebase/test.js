import firebase from 'firebase/app'
import 'firebase/firestore'

const firestore = firebase.firestore()

firestore.collection('users').doc('rrb3mZeYtXyCfhExfU5I').collection('cartItems').doc('')