// src/App.js
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { publicRoute } from './routes'
import { DefaultLayout, HeaderOnly } from '~/Component/layout'

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRoute.map((route, index) => {
            // Destructure từ route
            const { path, component: Page, layout } = route

            // Chọn Layout phù hợp
            let LayoutComponent
            if (layout === null) {
              LayoutComponent = React.Fragment
            } else if (layout === HeaderOnly) {
              LayoutComponent = HeaderOnly
            } else {
              LayoutComponent = DefaultLayout
            }

            return (
              <Route
                key={index}
                path={path}
                element={
                  <LayoutComponent>
                    <Page />
                  </LayoutComponent>
                }
              />
            )
          })}
        </Routes>
      </div>
    </Router>
  )
}

export default App
