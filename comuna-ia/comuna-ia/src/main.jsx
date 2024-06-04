import React from 'react'
import ReactDOM from 'react-dom/client'
import { GastosProvider } from "./Context";

import App from './App'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GastosProvider>
        <App />
    </GastosProvider>
  </React.StrictMode>,
)
