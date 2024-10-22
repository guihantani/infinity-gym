import { BrowserRouter, Route, Routes } from "react-router-dom";
import BasePage from "./pages/BasePage";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Equipe from "./pages/Equipe";
import Planos from "./pages/Planos";
import NotFound from "./pages/NotFound";
import { ReactLenis } from 'lenis/dist/lenis-react';

function AppRoutes(){
    return(
        <ReactLenis root>
            <BrowserRouter>
                <Routes>
                        <Route path='/' element={<BasePage/>}>
                            <Route index element={<Home/>}></Route>
                            <Route path='sobre' element={<Sobre/>}></Route>
                            <Route path='equipe' element={<Equipe/>}></Route>
                            <Route path='planos' element={<Planos/>}></Route>
                            <Route path='*' element={<NotFound/>}></Route>
                        </Route>
                </Routes>
            </BrowserRouter>
        </ReactLenis>
    )
}

export default AppRoutes;