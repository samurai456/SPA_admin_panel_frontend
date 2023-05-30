import { createContext, useState } from 'react'

const StatusContext = createContext();

function StatusProvider({children}){
    const [status, setStatus] = useState('loading');
    return(
        <StatusContext.Provider value={{status, setStatus}}>
            {children}
        </StatusContext.Provider>
    )
}

export default StatusProvider;
export {StatusContext};