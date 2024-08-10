import './App.css'
import Balance from './component/Balance'
import Header from './component/Header'
import History from './component/History'
import New_Transction from './component/New_Transction'
import { GlobalProvider } from './context/GlobalState'
function App() {
 

  return (
    <GlobalProvider>
     <Header/>
     <Balance/>
     <History/>
     <New_Transction/>
    </GlobalProvider>
  )
}

export default App
