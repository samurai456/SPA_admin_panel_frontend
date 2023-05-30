import { Navigate } from 'react-router-dom'
import { useContext } from 'react'
import Table from './mainPageComponents/Table.jsx'
import ToolBar from './mainPageComponents/ToolBar.jsx'
import { syncServer } from '../serverRequest.jsx'
import { StatusContext } from '../StatusContext.jsx'
import { TableDataContext } from '../TableDataContext.jsx'

function MainPage() {
  const {status, setStatus} = useContext(StatusContext);
  const {tableData, setTableData} = useContext(TableDataContext);

  function handleClick(action){
    const userIds = tableData.filter(i=>i.checked);
    syncServer({action, userIds, setStatus, setTableData});
  }
  
  if (status==='loading'){
    return (
      <div>
        Loading...
      </div>
    )
  }
  if (status!=='active'){
    return <Navigate to="/authorization" />
  }

  return (
    <div className="container-fluid">
      <ToolBar handleClick={handleClick} />
      <Table />
    </div>
  )
}

export default MainPage;
