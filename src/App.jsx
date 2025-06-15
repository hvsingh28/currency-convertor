import './App.css'
import Convertor from './components/Convertor'
import Header from './components/Header'

function App(){
  return (
    <div className='flex items-center justify-center w-full h-screen bg-slate-500'>
        <Header />
        <Convertor />
    </div>
  )
}

export default App
