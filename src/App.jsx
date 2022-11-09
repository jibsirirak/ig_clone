import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

//comment
// import Navbar from './components/Navbar'
// import UserInfo from './components/UserInfo'
// import Story from './components/Story'
// import Toggle from './components/Toggle'
// import UserPosts from './components/UserPosts'
import UserProfile from './pages/UserProfile'
import Home from './pages/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <UserProfile />
      <Home />
    </>
  )
}

export default App
