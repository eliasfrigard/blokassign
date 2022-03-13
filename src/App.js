import './App.css'
import { Routes, Route, useLocation } from 'react-router-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import Div100vh from 'react-div-100vh'

// Import views and components.
import Header from './components/Header'
import Home from './views/Home'
import Form from './views/Form'

function App() {
  const location = useLocation()

  return (
    <div className='App'>
      <Header />

      <TransitionGroup>
        <CSSTransition timeout={500} classNames='fade' key={location.key}>
          <Routes className='Routes'>
            <Route path='/' element={<Home />} />
            <Route path='/form' element={<Form />} />
          </Routes>
        </CSSTransition>
      </TransitionGroup>
    </div>
  )
}

export default App
