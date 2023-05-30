import {useContext} from 'react'
import {TableDataContext} from '../../TableDataContext.jsx'

function TableHead(){
    const {tableData, setTableData} = useContext(TableDataContext);

    return (
        <thead>
            <tr>
                <th>
                    <input
                        type="checkbox" 
                        checked={tableData.every(i=>i.checked)}
                        onChange={e=>{
                            setTableData(tableData.map(i=>({
                                ...i,
                                checked: e.target.checked,
                            })));
                        }}
                    />
                </th>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Registration date</th>
                <th>Last login date</th>
                <th>Status</th>
            </tr>
        </thead>
    )
}

export default TableHead;