import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import DoctorRegPage from './Pages/DoctorRegPage';
import PatientRegPage from './Pages/PatientRegPage';

const App =()=>{
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/about" element = {<AboutPage/>}/>
                    <Route path="/doctorReg" element = {<DoctorRegPage/>}/>
                    <Route path="/patientReg" element = {<PatientRegPage/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}
export default App;