
function putDeleteRequest({ids, changeTo, callback, method}){
    const email = sessionStorage.email;
    const password = sessionStorage.password;
    fetch(`${location.origin}/api/user/${email}/${password}`, {
        method,
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ ids, changeTo })
    }).then(r=>r.json())
    .then(callback)
}
  
function processPutDeleteResponse({
    method,
    setTableData, 
    setStatus,
    callback,
    ids,
    changeTo,
}){
    const cb = ({status, tableData}) =>{
        setTableData(oldData=> tableData.map(i=>{
            const oldRecord = oldData.find(x=> x.id===i.id);
            return {...i, checked: oldRecord?.checked || false };
          }));
        setStatus(status);
        callback(status, tableData);
    }
    putDeleteRequest({callback: cb, ids, changeTo, method})
}

export { processPutDeleteResponse };