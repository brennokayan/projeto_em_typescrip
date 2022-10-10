import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Create_Student from "../pages/CreateStudent";
export function Routes_services(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/home" element={<Home />}/>
                <Route path="/novoaluno" element={<Create_Student />}/>


                <Route path="*" element={<Navigate to="/home"/>}/>
            </Routes>
        </BrowserRouter>
    )
}