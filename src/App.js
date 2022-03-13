import './App.css'
import { Routes, Route } from 'react-router-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

// Import views and components.
import Header from './components/Header'
import Home from './views/Home'
import Form from './views/Form'

function App() {
  return (
    <div className='App'>
      <Header />

      <TransitionGroup>
        <CSSTransition timeout={250} classNames='fade'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/form' element={<Form />} />
          </Routes>
        </CSSTransition>
      </TransitionGroup>
    </div>
  )
}

export default App
