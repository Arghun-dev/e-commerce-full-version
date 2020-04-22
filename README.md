# React-Router


## React-Router-Dom

### history:

We use this to push some url: 

```
<button onClick={() => props.history.push('/topics')}>Topics</button>
```

### match:  { isExact, params: {}, path, url }

VERRRRYYYYYY USEFUL: main usage of match beyond being inside of specific topic detail /:topicId another useful thing about it is that this allows our components to build out a nested route structure.

what do I mean by nested routes:

let's say our topicList page renders out a bunch of links to a bunch of topicDetails 

```
<Link to={`${props.match.url}/13`}>To topic 13</Link>
<Link to={`${props.match.url}/17`}>To topic 17</Link>
<Link to={`${props.match.url}/121`}>To topic 21</Link>
```

well, now it does not matter where our topicList is. It will always now be aware and know how to take us to that url even if our topicList was at some obscure url. Now our topicsList does not care about anything regarding where our url is from the point where it matched. all it cares about is that I'm trying to render out or take you to different topics from my path onwards. So this how we can build out dynamic routing without our topics list being aware of the entire url

#### url
The url is just the url of our component that it got rendered up to from the route

Example: 
<Route exact path='/' component={HomePage} />

if we were to look at our Route for HomePage, we learned that in our last lesson without this exact keyword any of our paths that start with a / and then anything after is also going to render our HomePage, because technically if we were to navigate to /topics we are still matching the / portion of our url. which means that this Route pattern is matching for our HomePage, but if we were to look at our match we actually see that url only matches up till the / not the /topics so that url no matter what we type, the url match will always only display the url up until where it actually matched


#### path
the path property is just the pattern that the Route is looking to map


#### isExact
is the one that's matching that is only true if the entire url matches the pattern


#### params
this is an object of url parameters
what is url parameter ->>> <Route path='/topics/:topicId' component={TopicDetail} />  ->>> The :topicId is the url parameter or a Route parameter, when we write this in our path we're saying that this route is waiting to match anything up to /topics and then /anything in this spot after, it can be dynamically changing value. But that topicId value we want to be able to access as a parameter. 

### location:

location shows us where we are in the application just look at pathname.


## withRouter

It is a higher order function.

it anables us to access to the history, match and location props in every component we want.

#### usage
export default withRouter(MenuItem)

Now in MenuItem component I have access to match, location and history as props.

#### Higher Order Component
higher order component is essentially a function that takes a component as an argument and returns you a modified component


#### Example
Now in this project we have 5 category of MenuItems hats, sneakers, ... and if we click in each of these items it will push us to that specific page.


# Sign-in & Sign-up

Always keep the state of sign-in and Sign-up pages in their own individual components separately.

So, Sign-in is going to have it's own state and register is going to have it's own state.

### Why is that?
because these two components don't need to talk to each other -> Sing-in does not really care what we enter in register and register does not care what's in the form of sign-in.
So, if we lift the state up and keep the state in the entire page every time we update one state, the state will be changed in both of the components would be re-rendered, so that's two extra calculations that react has to do to re-render this.

In this project we're handling Authentication via firebase,

and We're saving our users in firestore of firebase.

1. first create a project in firebase:

then write these code in src/firebase/firebase.utils.js:

```
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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get()

    if(!snapShot.exists) {
        const { displayName, email } = userAuth
        const createdAt = new Date()

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch(err) {
            console.log('error creating user', err.message);
        }
    }

    return userRef;
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
```

How we're accessing our data in firestore:
This is a method how we are getting our documents and collections from database:
firebase database, is based on collections and documents

```
firestore.collection('users').doc('rrb3mZeYtXyCfhExfU5I').collection('cartItems').doc('')
```

What we're gonna do, is that we're gonna store these authenticated users that we get back from our auth library inside of our database

