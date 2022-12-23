import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import {CookiesProvider} from 'react-cookie'
import {store} from 'store/store'
import App from 'App'
import reportWebVitals from 'reportWebVitals'

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
)
root.render(
    <React.StrictMode>
        <CookiesProvider>
            <Provider store={store}>
                <BrowserRouter>
                    <App/>
                </BrowserRouter>
            </Provider>
        </CookiesProvider>
    </React.StrictMode>
)

reportWebVitals()
