import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {ConnectedRouter} from 'connected-react-router'
import Routes from './Routes/Routes'
import moment from 'moment'
import {LocaleProvider} from 'antd';
import trTR from 'antd/lib/locale-provider/tr_TR';
import store from './store'
import history from './history'
import 'antd/dist/antd.less';
import './Assets/main.scss'

moment.locale('tr')

const App = () => (
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <LocaleProvider locale={trTR}>
                <Routes/>
            </LocaleProvider>
        </ConnectedRouter>
    </Provider>
)
export default App;