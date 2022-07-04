import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Header, Footer, DishDetail } from '../components';

import Home from './Home';
import Menu from './Menu';
import Contact from './Contact';
import About from './About';

const RouterComponent = () => {
    const paths = [
        {
            path: "/home",
            elemenet: <Home />
        },
        {
            path: "/menu",
            elemenet: <Menu />
        },
        {
            path: "/menu/:dishId",
            elemenet: <DishDetail />
        },
        {
            path: "/aboutus",
            elemenet: <About />
        },
        {
            path: "/contactus",
            elemenet: <Contact />
        }
    ];

    return (
        <BrowserRouter>
            <Header></Header>
            <Routes>
                <Route path="/" element={<Home />} />
                {paths.map((path, index) => (
                    <Route exact key={index} path={path.path} element={path.elemenet}></Route>
                ))}
            </Routes>
            <Footer></Footer>
        </BrowserRouter>
    )
}

export default RouterComponent;