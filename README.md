# React-Router


## React-Router-Dom

### history:

We use this to push some url: <button onClick={() => props.history.push('/topics')}>Topics</button>

### match:  { isExact, params: {}, path, url }

VERRRRYYYYYY USEFUL: main usage of match beyond being inside of specific topic detail /:topicId another useful thing about it is that this allows our components to build out a nested route structure.

what do I mean by nested routes:

let's say our our topicList page renders out a bunch of links to a bunch of topicDetails 

<Link to={`${props.match.url}/13`}>To topic 13</Link>
<Link to={`${props.match.url}/17`}>To topic 17</Link>
<Link to={`${props.match.url}/121`}>To topic 21</Link>

well, now it does not matter where our topicList is. It will always now be aware and know how to take us to that url even if our topicList was at some obscure url. Now our topicsList does not care about anything regarding where our url is from the point where it matched. all it cares about is that I'm trying to render out or take you to different topics from my path onwards. So this how we can build out dynamic routing without our topics list being aware of the entire url

#### url
The url is just the url of our component that it got rendered up to from the route

### location:

location shows us where er are in the application just look at pathname.


## withRouter

It is a higher order function.

it anables us to access to the history, match and location props in every component wwe want.

### usage
export default withRouter(MenuItem)

Now in MenuItem component I have access to match, location and history as props.

### Higher Order Component
higher order component is essentially a function that takes a component as an argument and returns you a modified component


### Example
Now in this project we have 5 category of MenuItems hats, sneakers, ... and if we click in each of these items it will push us to that specific page.
