import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './app/App.js'
import {BrowserRouter} from 'react-router-dom'
import store, {persistor} from './entities/Store.js'
import { Provider } from 'react-redux'
import {PersistGate} from 'redux-persist/integration/react'
import './app/Firebase.jsx'

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </PersistGate>
      </Provider>
  </StrictMode>,
)
