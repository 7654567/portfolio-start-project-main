import './App.css';
// import styled from 'styled-components';
import {SectionHeader} from "./components/SectionHeader";
import React from "react";
import {FlexContainer} from "./components/FlexContainer";
import sprite from "./assets/svg/sprite.svg"
import social from "./assets/jpg/rectangle1.jpg"
import timer from "./assets/jpg/rectangle2.jpg"
const skills = [
        {name:"css3", text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Utenim"},
        {name:"React", text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Utenim"},
        {name:"typescript", text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Utenim"},
        {name:"styled components", text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Utenim"},
        {name:"WEB DESIgN", text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Utenim"},
        // {name:"css3", text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Utenim"}
        ]
const works = [
    {img:social, link:"", header:"Social Network", text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim Lorem ipsum dolor sit amet, consectetur adipisicing elit."},
    {img:timer, link:"", header:"Timer", text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim Lorem ipsum dolor sit amet, consectetur adipisicing elit."}
]
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
                            {skills.map((item)=> {
                                return (
                                    <div>
                                        <h3>{item.name}</h3>
                                        <p>{item.text}</p>

                                    </div>
                                )
                            })}

                        <SectionHeader>
                            My Works
                        </SectionHeader>
                        <ul>
                            <li><a href="#">All</a></li>
                            <li><a href="#">landing page</a></li>
                            <li><a href="#">React</a></li>
                            <li><a href="#">spa</a></li>
                        </ul>
                        {works.map((item)=> {
                            return (
                                <div>
                                    <img src={item.img} alt="#"/>
                                    <h3>{item.header}</h3>
                                    <p>{item.text}</p>
                                    <button>Social</button>
                                    <button>Network</button>
                                </div>
                            )
                        })}

                        <SectionHeader>
                            Testimony
                        </SectionHeader>
                        <svg>
                            <use xlinkHref={`${sprite}#quote`}/>
                        </svg>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim.
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            @ivan ivanow</p>

                        <SectionHeader>
                            My Contact
                        </SectionHeader>

                        <form action="#">
                            <input type="text" name="name" placeholder="name"/>
                            <input type="text" name="email" placeholder="email"/>
                            <textarea></textarea>
                            <input type="sublin" value="Send message"/>
                        </form>
                        <SectionHeader>
                            I Am Available For Freelance
                        </SectionHeader>
                        <a href="">Hire me</a>
                        <ul>
                            <li>
                                <a href="#">
                                    <svg>
                                        <use xlinkHref={`${sprite}#telegram`}/>
                                    </svg>
                                </a>
                            </li>
                            <li><a href="#"></a></li>
                            <li><a href="#"></a></li>
                            <li><a href="#"></a></li>
                        </ul>
                            <p>© 2023 Svetlana Dyablo, All Rights Reserved.</p>
                            {/*Sve t l a n a*/}
                            {/*Hi There*/}
                            {/*I am*/}

                            {/*Svetlana Dyablo*/}
                            {/*A Web Developer.*/}
                            {/*M y S k i l l s*/}
                            {/*html5*/}
                            {/*Lorem ipsum dolor sit amet, consectetur*/}
                            {/*adipisicing elit, sed do eiusmod tempor*/}
                            {/*incididunt ut labore et dolore magna aliqua Ut*/}
                            {/*enim*/}
                            {/*css3*/}
                            {/*Lorem ipsum dolor sit amet, consectetur*/}
                            {/*adipisicing elit, sed do eiusmod tempor*/}
                            {/*incididunt ut labore et dolore magna aliqua Ut*/}
                            {/*enim*/}
                            {/*react*/}
                            {/*Lorem ipsum dolor sit amet, consectetur*/}
                            {/*adipisicing elit, sed do eiusmod tempor*/}
                            {/*incididunt ut labore et dolore magna aliqua Ut*/}
                            {/*enim*/}
                            {/*typescript*/}
                            {/*Lorem ipsum dolor sit amet, consectetur*/}
                            {/*adipisicing elit, sed do eiusmod tempor*/}
                            {/*incididunt ut labore et dolore magna aliqua Ut*/}
                            {/*enim*/}
                            {/*styled components*/}
                            {/*Lorem ipsum dolor sit amet, consectetur*/}
                            {/*adipisicing elit, sed do eiusmod tempor*/}
                            {/*incididunt ut labore et dolore magna aliqua Ut*/}
                            {/*enim*/}
                            {/*web design*/}
                            {/*Lorem ipsum dolor sit amet, consectetur*/}
                            {/*adipisicing elit, sed do eiusmod tempor*/}
                            {/*incididunt ut labore et dolore magna aliqua Ut*/}
                            {/*enim*/}
                            {/*© 2023 Svetlana Dyablo, All Rights Reserved.*/}
                            {/*S v e t l a n a*/}
                            {/*My Works*/}
                            {/*All landing page React spa*/}
                            {/*view project*/}
                            {/*Social Network*/}
                            {/*Lorem ipsum dolor sit amet, consectetur*/}
                            {/*adipisicing elit, sed do eiusmod tempor*/}
                            {/*incididunt ut labore et dolore magna*/}
                            {/*aliqua Ut enim. Lorem ipsum dolor sit*/}
                            {/*amet, consectetur adipisicing elit.*/}
                            {/*demo Code*/}
                            {/*Timer*/}
                            {/*Lorem ipsum dolor sit amet, consectetur*/}
                            {/*adipisicing elit, sed do eiusmod tempor*/}
                            {/*incididunt ut labore et dolore magna*/}
                            {/*aliqua Ut enim. Lorem ipsum dolor sit*/}
                            {/*amet, consectetur adipisicing elit ut*/}
                            {/*labore et dolore magna aliqua Ut enim*/}
                            {/*demo Code*/}
                            {/*view project*/}
                            {/*Testimony*/}
                            {/*Lorem ipsum dolor sit amet, consectetur*/}
                            {/*adipisicing elit, sed do eiusmod tempor*/}
                            {/*incididunt ut labore et dolore magna aliqua Ut*/}
                            {/*enim. Lorem ipsum dolor sit amet, consectetur*/}
                            {/*adipisicing elit.*/}
                            {/*@ivan ivanow*/}
                            {/*Contact*/}
                            {/*Send message*/}
                            {/*Name*/}
                            {/*Name*/}
                            {/*Name*/}
                            {/*I Am Available For*/}
                            {/*Freelance*/}
                            {/*Hire me*/}
                            {/*Home*/}
                            {/*Skills*/}
                            {/*Works Works*/}
                            {/*Testimony*/}
                            {/*Contact*/}
                    </div>
                );
        }

export default App;

