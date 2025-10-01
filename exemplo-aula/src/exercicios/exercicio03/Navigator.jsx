import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Login from './Login';
import Cadastro from './Cadastro';

const Navigator = () => {
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route path={'/login'} element={<Login />}/>
                    <Route path={'/cadastro'} element={<Cadastro />} />
                    <Route path={'/'} element={<Login/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Navigator;