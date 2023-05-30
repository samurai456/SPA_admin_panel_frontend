function serverRequest({callback}){
    const email = sessionStorage.email;
    const password = sessionStorage.password;
    if(!email || !password){
      callback('not-authorizaed', [])
      return
    }
    fetch(`${location.origin}/api/user/${email}/${password}`)
    .then(r=>r.json())
    .then(({status, tableData})=>{
      callback(status, tableData);
    });
}

function syncServer({ setStatus, setTableData, callback }){
  const cb = (newStatus, newData) =>{
    setTableData(oldData=> newData.map(i=>{
      const oldRecord = oldData.find(x=> x.id===i.id);
      return {...i, checked: oldRecord?.checked || false };
    }));
    setStatus(newStatus);
    if(callback){
      callback(newStatus, newData);
    }
  }
  serverRequest({callback: cb})
}

export default serverRequest;
export { syncServer };