
function registrationRequest({name, email, password, callback}){
    fetch(`${location.origin}/api/user`, {
        method: 'post',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name,
            email,
            password,
        })
    }).then(r=>r.json())
    .then(callback)
}
  
function processRegResponse({
    name, 
    email, 
    password, 
    setTableData, 
    setStatus, 
    cbSuccess, 
    cbFail,
}){
    const callback = ({result, message, tableData}) =>{
        if (result!=='success'){
            cbFail(result, message)
            return
        }
        sessionStorage.email = email;
        sessionStorage.password = password;
        setTableData(tableData);
        setStatus('active');
        cbSuccess(result, tableData)
    }
    registrationRequest({name, email, password, callback})
}

export { processRegResponse };