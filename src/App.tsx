import './App.css';
import styled from 'styled-components';
import {SectionHeader} from "./components/SectionHeader";
import React from "react";
import {FlexContainer} from "./components/FlexContainer";
import sprite from "./assets/svg/sprite.svg"

function App() {
    return (
        <div className="App">
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Skills</a></li>
                <li><a href="#">Works Works</a></li>
                <li><a href="#">Testimony</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
            <span>Hi There</span>
            <h2>I am Svetlana Dyablo</h2>
            <h1>A Web Developer.</h1>
            <SectionHeader>
                My Skills
            </SectionHeader>
                <FlexContainer>
                        <svg>
                                <use xlinkHref={`${sprite}#code`}/>
                        </svg>
                        <h3>html5</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur  adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim</p>
                </FlexContainer>

            css3
            Lorem ipsum dolor sit amet, consectetur
            adipisicing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua Ut
            enim
            React
            Lorem ipsum dolor sit amet, consectetur
            adipisicing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua Ut
            enim
            typescript
            Lorem ipsum dolor sit amet, consectetur
            adipisicing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua Ut
            enim
            styled components
            Lorem ipsum dolor sit amet, consectetur
            adipisicing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua Ut
            enim
            WEB DESIgN
            Lorem ipsum dolor sit amet, consectetur
            adipisicing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua Ut
            enim
            My Works
            All landing page React spa
            Social Network
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            demo Code
            Timer
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit ut labore et
            dolore magna aliqua Ut enim
            demo Code
            view project
            Testimony
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            @ivan ivanow
            Contact
            Send message
            Name
            Name
            Name
            I Am Available For Freelance
            Hire me
            © 2023 Svetlana Dyablo, All Rights Reserved.
            Sve t l a n a
            Hi There
            I am

            Svetlana Dyablo
            A Web Developer.
            M y S k i l l s
            html5
            Lorem ipsum dolor sit amet, consectetur
            adipisicing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua Ut
            enim
            css3
            Lorem ipsum dolor sit amet, consectetur
            adipisicing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua Ut
            enim
            react
            Lorem ipsum dolor sit amet, consectetur
            adipisicing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua Ut
            enim
            typescript
            Lorem ipsum dolor sit amet, consectetur
            adipisicing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua Ut
            enim
            styled components
            Lorem ipsum dolor sit amet, consectetur
            adipisicing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua Ut
            enim
            web design
            Lorem ipsum dolor sit amet, consectetur
            adipisicing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua Ut
            enim
            © 2023 Svetlana Dyablo, All Rights Reserved.
            S v e t l a n a
            My Works
            All landing page React spa
            view project
            Social Network
            Lorem ipsum dolor sit amet, consectetur
            adipisicing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna
            aliqua Ut enim. Lorem ipsum dolor sit
            amet, consectetur adipisicing elit.
            demo Code
            Timer
            Lorem ipsum dolor sit amet, consectetur
            adipisicing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna
            aliqua Ut enim. Lorem ipsum dolor sit
            amet, consectetur adipisicing elit ut
            labore et dolore magna aliqua Ut enim
            demo Code
            view project
            Testimony
            Lorem ipsum dolor sit amet, consectetur
            adipisicing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua Ut
            enim. Lorem ipsum dolor sit amet, consectetur
            adipisicing elit.
            @ivan ivanow
            Contact
            Send message
            Name
            Name
            Name
            I Am Available For
            Freelance
            Hire me
            Home
            Skills
            Works Works
            Testimony
            Contact
        </div>
    );
}

export default App;

