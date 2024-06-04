import React from 'react'
import Home from './pages/home/home';
import {Routes,Route} from 'react-router-dom'
import SignUpPage from './pages/login/signup';
import SignInPage from './pages/login/signin';
import Titlecards from './components/titlecards/titlecards';
const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<SignUpPage/>}/>
        <Route path='/signin' element={<SignInPage/>}/>
        <Route path='/titlecards' element={<Titlecards/>}/>
        <Route path='/signin' element={<SignInPage/>}/>
        
        
        
      </Routes>
      
    </div>
  )
}

export default App;

