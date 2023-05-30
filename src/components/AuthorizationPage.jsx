import { Link, useNavigate } from 'react-router-dom'
import { useState, useContext } from 'react'
import { syncServer } from '../serverRequest.jsx'
import { TableDataContext } from '../TableDataContext.jsx'
import { StatusContext } from '../StatusContext.jsx'
import { ToastComponent } from './ToastComponent.jsx'

function AuthorizationPage(){
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
        sessionStorage.email = email;
        sessionStorage.password = password;
        const callback = (status, tableData) =>{
            if (status==='active'){
                navigate('/');
                return
            }
            setShowToast(true);
            setToastText(`the user is ${status}`);
        };
        syncServer({ setStatus, setTableData, callback })
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
                        Sign in
                    </button>
                </div>
                <div className={adaptive + 'mt-2 d-flex justify-content-end'}>
                    <Link 
                        to="/registration"
                        className="btn btn-link"
                    >
                        Registration
                    </Link>
                </div>
            </form>
        </div>
    )
}

export default AuthorizationPage