import deleteIcon from './static/delete.png'
import unblockIcon from './static/unblock.png'
import { Link, useNavigate } from 'react-router-dom'
import { processPutDeleteResponse } from '../../putDeleteRequest.jsx';
import { TableDataContext } from '../../TableDataContext.jsx'
import { StatusContext } from '../../StatusContext.jsx'
import { useContext } from 'react'

function ToolBar({ handleClick }){
    const { tableData, setTableData } = useContext(TableDataContext);
    const { setStatus } = useContext(StatusContext); 
    const navigate = useNavigate();

    function handleClick(action){
        const selected = tableData.filter(i=>i.checked);
        const ids = selected.map(i=>i.id);
        const method = action==='delete'? 'delete': 'put';
        const changeTo = action==='block'? 'blocked': 'active';

        const callback = status =>{
            if (status!=='active'){
                navigate('/authorization');
            }
        }
        processPutDeleteResponse({
            method,
            setTableData, 
            setStatus,
            callback,
            ids,
            changeTo,
        });
    }

    function logout(){
        setTableData([]);
        delete sessionStorage.email;
        delete sessionStorage.password;
    }

    return (
        <div className="d-flex align-items-center justify-content-between mb-3 mt-3" >
            <div>
                <button 
                    onClick={()=>handleClick('block')}
                    className="btn btn-danger m-1"
                >
                    Block
                </button>
                <button 
                    onClick={()=>handleClick('unblock')}
                    className="btn btn-info m-1"
                >
                    <img src={unblockIcon} height={25}/>
                </button>
                <button 
                    onClick={()=>handleClick('delete')}
                    className="btn btn-danger m-1"
                >
                    <img src={deleteIcon} height={25} />
                </button>
            </div>
            <div>
                <Link 
                    to="/authorization"
                    onClick={logout}
                    className="btn btn-primary m-1"
                >
                    Log out
                </Link>
            </div>
        </div>
    )
}

export default ToolBar;