import React from 'react'
import { BrowserRouter, HashRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'

import App from './App'
const container = document.querySelector('#root')

const root = createRoot(container)
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
)
