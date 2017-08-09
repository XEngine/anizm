import React from 'react'
import {Provider} from 'react-redux'
import Routes from './Routes/Routes'
import moment from 'moment'
import {LocaleProvider} from 'antd'
import 'antd/dist/antd.css'
import trTR from 'antd/lib/locale-provider/tr_TR'
import store from './store'
import history from './history'
import {Router} from 'react-router-dom'
import './Assets/main.scss'
moment.locale('tr')

const App = () => (
    <Provider store={store}>
        <LocaleProvider locale={trTR}>
            <Router history={history}>
                <Routes/>
            </Router>
        </LocaleProvider>
    </Provider>
)
export default App;