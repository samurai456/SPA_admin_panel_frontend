import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import StatusProvider from './StatusContext.jsx'
import TableDataProvider from './TableDataContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <TableDataProvider>
        <StatusProvider>
          <App />
        </StatusProvider>
      </TableDataProvider>
    </BrowserRouter>
  </React.StrictMode>
)
