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
        <CSSTransition timeout={500} classNames='fade'>
          <Routes className='Routes' location={location}>
            <Route path='/' element={<Home />} />
            <Route exact path='/evaluation' element={<Evaluation />} />
          </Routes>
        </CSSTransition>
      </TransitionGroup>
    </div>
  )
}

export default App
