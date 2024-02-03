import './App.css'
import Header from './components/Header'
import LandingPage from './pages/LandingPage'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import WatchHistory from './pages/WatchHistory'

function App() {

  return (
    <>
    <Header/>
    <Routes>
      {/* homepage */}
      <Route path='/' element={ <LandingPage/>  } /> 
      <Route path='/home' element={ <Home/>  } /> 
      <Route path='/history' element={ <WatchHistory/>  } /> 
    </Routes>
    <Footer/>

    </>
  )
}

export default App
