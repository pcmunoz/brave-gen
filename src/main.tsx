import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router'

import App from './App.tsx'
import FullLayout from './components/layout/FullLayout.tsx'
import {
    settingsCarbonMenu,
    settingsDisplaysMenu,
    settingsUtilitiesMenu,
    sidebarMenu
} from './constants/menu.ts'
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
                {Object.values(sidebarMenu)
                    .filter((each) => !each.disabled)
                    .map((each) => (
                        <Route
                            path={each.link}
                            element={
                                <FullLayout>
                                    <div>{each.label}</div>
                                </FullLayout>
                            }
                        />
                    ))}
                <Route path="settings">
                    <Route
                        index
                        element={
                            <FullLayout>
                                <div>Settings</div>
                            </FullLayout>
                        }
                    />
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
                    {Object.values(settingsUtilitiesMenu)
                        .filter((each) => !each.disabled)
                        .map((each) => (
                            <Route
                                path={each.link}
                                element={
                                    <FullLayout>
                                        <div>{each.label}</div>
                                    </FullLayout>
                                }
                            />
                        ))}
                    {Object.values(settingsCarbonMenu)
                        .filter((each) => !each.disabled)
                        .map((each) => (
                            <Route
                                path={each.link}
                                element={
                                    <FullLayout>
                                        <div>{each.label}</div>
                                    </FullLayout>
                                }
                            />
                        ))}
                    {Object.values(settingsDisplaysMenu)
                        .filter((each) => !each.disabled)
                        .map((each) => (
                            <Route
                                path={each.link}
                                element={
                                    <FullLayout>
                                        <div>{each.label}</div>
                                    </FullLayout>
                                }
                            />
                        ))}
                </Route>
            </Routes>
        </BrowserRouter>
    </StrictMode>
)
