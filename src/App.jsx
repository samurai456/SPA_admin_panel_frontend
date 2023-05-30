import { useContext, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { StatusContext } from './StatusContext.jsx'
import { TableDataContext } from './TableDataContext.jsx'
import { syncServer } from './serverRequest.jsx'
import MainPage from './components/MainPage.jsx'
import AuthorizationPage from './components/AuthorizationPage.jsx'
import RegistrationPage from './components/RegistrationPage.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  const {setStatus} = useContext(StatusContext);
  const {setTableData} = useContext(TableDataContext);
  useEffect(()=>{
    syncServer({ setTableData, setStatus });
  }, [])

  return (
    <div className="container-fluid">
      <Routes>
        <Route path="/" element={ <MainPage /> } />
        <Route path="/authorization" element={ <AuthorizationPage /> }/>
        <Route path="/registration" element={ <RegistrationPage /> } />
      </Routes>
    </div>
  )
}

export default App;
