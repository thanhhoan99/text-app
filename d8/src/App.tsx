
import './App.css'
import LoginForm from './pages/LoginForm'
import Register from './pages/Register'
import SignUp from './pages/SignUp'
import UserRegistration from './pages/UserRegistration'


function App() {
  

  return (
    <div  className="min-h-screen bg-gray-100  items-center justify-center">
      <SignUp/>
      <Register/>
      <LoginForm/>
      <UserRegistration />
    </div>
  )
}

export default App
