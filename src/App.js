import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// Import components.
import Header from './components/Header'
import Home from './views/Home'
import Form from './views/Form'

function App() {
  return (
    <Router>
      <div className='App'>
        <Header />
        <Route path='/home' component={Home} />
        <Route path='/form' component={Form} />
      </div>
    </Router>
  )
}

export default App
