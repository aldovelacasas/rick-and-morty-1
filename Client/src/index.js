import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { Provider } from 'react-redux'
import store from './components/redux/store'

ReactDOM.render(

   <Provider store={store}>  
  <BrowserRouter>
  <App />
  </BrowserRouter>,
   </Provider>,




  document.getElementById('root')
  

  

  
)