import {useContext} from 'react'
import {TableDataContext} from '../../TableDataContext.jsx'

function TableBody(){
    const {tableData, setTableData} = useContext(TableDataContext);

    function handleChange(e, id){
        const newTableData = tableData.map(i=>{
            if (i.id === id){
                return {
                    ...i, 
                    checked: e.target.checked
                };
            }
            return i;
        });
        setTableData(newTableData);
    }

    return (
        <tbody>
            {tableData.map(i=>(
                <tr key={i.id}>
                    <td> 
                        <input
                            type="checkbox"
                            checked={i.checked} 
                            onChange={e=>handleChange(e, i.id)}
                        />
                    </td>
                    <td>{i.id}</td>
                    <td>{i.name}</td>
                    <td>{i.email}</td>
                    <td>{i.registrationDate.slice(0, 10)}</td>
                    <td>{i.lastLoginDate.slice(0, 10)}</td>
                    <td className={
                        i.status==='active' ? 'text-success':'text-danger'
                    }>
                        {i.status}
                    </td>
                </tr>
            ))}
        </tbody>
    )
}

export default TableBody;