import './styles/App.css'
import { Routes, Route, useLocation } from 'react-router-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

// Import views and components.
import Header from './components/Header'
import Home from './views/Home'
import Evaluation from './views/Evaluation'

function App() {
  const location = useLocation()

  return (
    <div className='App'>
      <Header />

      {/* Routed components with fade-transitions. */}
      <TransitionGroup>
        <CSSTransition timeout={500} classNames='fade' key={location.key}>
          <Routes className='Routes'>
            <Route path='/' element={<Home />} />
            <Route path='/evaluation' element={<Evaluation />} />
          </Routes>
        </CSSTransition>
      </TransitionGroup>
    </div>
  )
}

export default App
