import React from 'react';
import { Switch, Route } from 'react-router-dom'

//styles
import './App.css'

// components
import HomePage from './pages/homepage/homepage.component'
import HatsPage from './pages/hatspage/hatspage.component'

const Topics = (props) => {
  console.log(props)
  return (
    <h1>Topics</h1>
  )
}

const TopicDetail = (props) => {
  console.log(props)
  return (
    <h1>Topics: {props.match.params.topicId}</h1>
  )
}

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/hats' component={HatsPage} />
        <Route exact path='/topics' component={Topics} />
        <Route exact path='/topics/:topicId' component={TopicDetail} />
      </Switch>
    </div>
  );
}

export default App;