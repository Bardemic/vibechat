import './App.css'
import NavBar from "./components/Navbar.tsx";
import CallScreen from "./components/CallScreen.tsx";

function App() {

  return (
    <>
        <div className='flex flex-col bg-zinc-800 w-screen box-content max-h-screen h-screen min-h-screen'>
            <NavBar/>
            <CallScreen />
        </div>
    </>
  )
}

export default App
