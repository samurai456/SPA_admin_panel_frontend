import { createContext, useState } from 'react'

const TableDataContext = createContext();

function TableDataProvider({children}){
    const [tableData, setTableData] = useState([]);
    return(
        <TableDataContext.Provider value={{tableData, setTableData}}>
            {children}
        </TableDataContext.Provider>
    )
}

export default TableDataProvider;
export {TableDataContext};