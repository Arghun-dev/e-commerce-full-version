# e-commerce-full-version

# React-Router

### history:

We use this to push some url: <button onClick={() => props.history.push('/topics')}>Topics</button>

### match:

VERRRRYYYYYY USEFUL: main usage of match beyond being inside of specific topic detail /:topicId another useful thing about it is that this allows our components to build out a nested route structure.

what do I mean by nested routes:

let's say our our topicList page renders out a bunch of links to a bunch of topicDetails 

<Link to={`${props.match.url}/13`}>To topic 13</Link>
<Link to={`${props.match.url}/17`}>To topic 17</Link>
<Link to={`${props.match.url}/121`}>To topic 21</Link>

well, now it does not matter where our topicList is. It will always now be aware and know how to take us to that url even if our topicList was at some obscure url. Now our topicsList does not care about anything regarding where our url is from the point where it matched. all it cares about is that I'm trying to render out or take you to different topics from my path onwards. So this how we can build out dynamic routing without our topics list being aware of the entire url

### location:

location shows us where er are in the application just look at pathname.
