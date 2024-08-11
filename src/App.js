// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import DrawerAppBar from './HeaderComponent/AppBar';
import Footer from './HeaderComponent/Footer';
import HomePage from './HeaderComponent';
import ContactUsPage from './ContactUS/ConnectwithUs';
import ScrollToTop from './ScrollToTop';
import CoursePage from './CoursesPage';
import SpecialOffer from './FixedComponent';
import AboutUs from './AboutComponent/AllFiles';
// import StudentsData from './DB/StudentsData';
// import Login from './Login/Login';
// import PrivateRoute from './Login/PrivateRoute';
import { AuthProvider } from './Login/AuthContext';


function App() {
    return (
        <AuthProvider>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Kymera</title>
            </Helmet>
            <Router>
                <ScrollToTop />
                <DrawerAppBar />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutUs />} />
                    <Route path="/course/:courseTitle" element={<CoursePage />} />
                    
                    
                    <Route path="/contact" element={<ContactUsPage />} />
                    {/* <Route path="/login" element={<Login />} /> */}
                    {/* <Route
                        path="/studentsdata"
                        element={
                            <PrivateRoute>
                                <StudentsData />
                            </PrivateRoute>
                        }
                    /> */}
                </Routes>
                <Footer />
                <SpecialOffer />
            </Router>
        </AuthProvider>
    );
}

export default App;
