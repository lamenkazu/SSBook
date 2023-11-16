import {Routes, Route} from 'react-router-dom'
import { Home } from '../pages/Home'
import { Details } from '../pages/Details'
import { DefaultLayout } from '../layouts/DefaultLayout'

export function AppRoutes(){
    return(
        <Routes>
            <Route path='/' element={<DefaultLayout/>}>
                <Route path='/' element={<Home/>} />
                <Route path='/details/:id' element={<Details/>}/>
            </Route>
        </Routes>
    )
}