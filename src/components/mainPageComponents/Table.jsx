import TableHead from './TableHead.jsx'
import TableBody from './TableBody.jsx'

function Table(){
    return (
        <table className="table table-striped">
            <TableHead />
            <TableBody />
        </table>
    )
}

export default Table;