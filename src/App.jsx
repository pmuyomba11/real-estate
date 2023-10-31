import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import SignIn from "./pages/SignIn"
import About from "./pages/About"
import SignUp from "./pages/signUp"
import Profile from "./pages/Profile"
import Header from "./components/Header"

export default function App() {
  return (
    <BrowserRouter className='text-red-500 '>
    <Header />
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/sign-in" element={<SignIn />} />
    <Route path="/about" element={<About />} />
    <Route path="/sign-up" element={<SignUp />} />
    <Route path="/profile" element={<Profile />} />
    </Routes>
    </BrowserRouter>
  )
}
