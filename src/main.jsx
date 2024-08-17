import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { store, persistor } from './redux/Store.jsx'
import { PersistGate } from 'redux-persist/integration/react'
import { app } from './firebase.config.jsx'
import App from './App.jsx'
import './index.css'
import 'react-toastify/dist/ReactToastify.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store} app={app}>
      <PersistGate loading={"loading"} persistor={persistor} >
      <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
)
 