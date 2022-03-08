import './App.css'
import { Routes, Route } from 'react-router-dom'

// Import views and components.
import Header from './components/Header'
import Home from './views/Home'
import Form from './views/Form'

function App() {
  return (
    <div className='App'>
      <Header />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/form' element={<Form />} />
      </Routes>
    </div>
  )
}

export default App
