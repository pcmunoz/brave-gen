import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router'

import App from './App.tsx'
import './index.css'
import Integrations from './pages/settings/integrations/index.tsx'
import Manage from './pages/settings/manage/index.tsx'
import Tags from './pages/settings/tags/index.tsx'
import Users from './pages/settings/users/index.tsx'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route
                    index
                    element={<App />}
                />
                <Route path="settings">
                    <Route
                        path="manage"
                        element={<Manage />}
                    />
                    <Route
                        path="users"
                        element={<Users />}
                    />
                    <Route
                        path="tags"
                        element={<Tags />}
                    />
                    <Route
                        path="integrations"
                        element={<Integrations />}
                    />
                </Route>
            </Routes>
        </BrowserRouter>
    </StrictMode>
)
