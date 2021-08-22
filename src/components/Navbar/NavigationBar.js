import React, { useState } from 'react';
import { MenuItems } from './MenuItem';
import { Button } from "../Shared/Button/Button"
import './NavigationBar.css';
import Modal from "../Shared/Modal/Modal"



function NaviagtionBar() {
    // for screen size 
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => {
        setSidebar(!sidebar)
    }

    //modal
    const [show, setShow] = useState(false);

    return (
        <nav className="NavbarItems">
            {/* <h1 className="navbar-logo">elearning</h1> */}

            {/* Modal start button */}
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100vh"
                }}
            >
                <Button onClick={() => setShow(true)}>Open Modal</Button>
            </div>
            {/* Modal end button */}

            {/* <Button> For Student </Button> */}

            <Modal show={show} onClose={() => setShow(false)}>
                <div className="content">
                    <img
                        src="https://cdn.pixabay.com/photo/2015/01/09/11/11/office-594132__340.jpg"
                        alt="Developer"
                    />
                    <div className="text">
                        <h2>John Doe</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                            aliquid placeat omnis adipisci dolores quae amet mollitia sint,
                            temporibus eum magnam facilis odio ex incidunt? Deleniti quam et
                            rem obcaecati. Laborum atque odit expedita nulla.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
                            labore laborum, assumenda dolorum provident quod itaque earum,
                            officia in placeat dignissimos nostrum? Totam corrupti nihil
                            repudiandae ducimus atque quod eos!
                        </p>
                    </div>
                </div>
            </Modal>

            <div className="menu-icon" onClick={showSidebar} >
                <i className={sidebar ? 'fas fa-times' : 'fas fa-bars'}></i>
            </div>
            <ul className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                {MenuItems.map((item, index) => {
                    return (
                        <li key={index}>
                            <a className={item.cName} href={item.url}>
                                {item.title}
                            </a>
                        </li>
                    )
                })}
            </ul>
            <Button
                onClick={() => { console.log('You clicked on me') }}
                type="button"
                buttonStyle="btn--outline"
                buttonSize="btn--large"

            >
                Sign Up
            </Button>
        </nav >
    )
}

export default NaviagtionBar
