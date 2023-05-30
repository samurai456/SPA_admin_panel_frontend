import { Link, Form } from 'react-router-dom'
import { useState, useContext } from 'react'
import { TableDataContext } from '../TableDataContext.jsx'
import { StatusContext } from '../StatusContext.jsx'
import { useNavigate } from 'react-router-dom'
import { processRegResponse } from '../registrationRequest.jsx'
import { ToastComponent } from './ToastComponent.jsx'

function RegistrationPage(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showToast, setShowToast] = useState(false);
    const [toastText, setToastText] = useState('');
    const { setTableData } = useContext(TableDataContext);
    const { setStatus } = useContext(StatusContext);
    const navigate = useNavigate();
    const adaptive = " col-xl-3 col-xs-10 col-sm-7 col-md-5 ";

    function handleSubmit(e){
        e.preventDefault();
        const cbFail = (result, message) =>{
            setToastText(message);
            setShowToast(true);
        }
        const cbSuccess = ()=>{
            navigate('/');
        }
        processRegResponse({
            name, 
            email, 
            password, 
            cbFail, 
            cbSuccess,
            setTableData,
            setStatus,
        });
    }

    function handleClick(e){
        console.log('link')
    }

    return (
        <div className="mt-5">
            <ToastComponent 
                text={toastText} 
                showToast={showToast} 
                setShowToast={setShowToast} 
            />
            <form 
                className="d-flex flex-column align-items-center"
                onSubmit={handleSubmit}
                
            >
                <div className={adaptive}>
                    <label className="control-label">
                        Name
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        value={name}
                        onChange={e=>setName(e.target.value)}
                    />
                </div>  
                <div className={adaptive}>
                    <label className="control-label">
                        Email
                    </label>
                    <input
                        type="email"
                        className="form-control"
                        value={email}
                        onChange={e=>setEmail(e.target.value)}
                    />
                </div>
                <div className={adaptive}>
                    <label className="control-label">
                        Password
                    </label>
                    <input 
                        type="password" 
                        className="form-control"
                        value={password}
                        onChange={e=>setPassword(e.target.value)}
                    />
                </div>
                <div className={adaptive + 'mt-2 d-flex justify-content-end'}>
                    <button className="btn btn-primary">
                        Sign up
                    </button>
                </div>
                <div className={adaptive + 'mt-2 d-flex justify-content-end'}>
                    <Link
                        to="/authorization"
                        className="btn btn-link"
                        onClick={handleClick}
                    >
                        Log in
                    </Link>
                </div>
            </form>
        </div>
    )
}

export default RegistrationPage