import React from 'react';
import {useState, useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import {
    Navbar,
    MobileNav,
    Typography,
    Button,
    IconButton,
    Card,
} from "@material-tailwind/react";

export default function Footer(){

    return(
        <div className='w-full bottom-0 py-4 flex justify-center'>
        <footer className=" z-10 bottom-2 my-2 w-full px-4 mx-4 py-2 lg:px-8 lg:py-4 bg-uviolet border-none rounded-xl flex flex-row justify-between items-center">
            <div>

            </div>
            <a href='#bg'> 
                <h1 className='text-xl text-plavender'>Back to Top</h1>
            </a>
            <div class="h-full w-1/6 text-plavender p-2 ">
            <ul>
                <li><a href="mailto:aquist@unc.edu"><img src="./email.png" class="inline-block w-5 h-5"/> aquist@unc.edu</a></li>
                <li><img src="./phone.png" class="inline-block w-5 h-5"/> 206-755-8337</li>
                <li><a href="https://github.com/Andreasq99"><img src="./github.png" class="inline-block w-5 h-5"/> Andreasq99</a></li>
                
            </ul>
        </div>
        </footer>
        </div>
    );
    
}