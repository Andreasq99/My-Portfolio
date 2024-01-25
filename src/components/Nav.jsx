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

export default function Nav(){

    const createNavLink = (props)=>{
        const currentPage = useLocation().pathname;
        const colorScheme = currentPage===props.link
            ? 'bg-aviolet text-rviolet hover:bg-aviolet-600 border-aviolet'
            : 'bg-rviolet text-plavender hover:bg-rviolet-300 border-rviolet';
        return (
            <a href={props.link} className=" items-center">
            <button className="mr-4 lg-block">
            <Typography 
                as="li"
                variant="small"
                className={colorScheme + " items-center p-3 font-medium active:bg-rviolet-600 border-2 rounded-md"}
            >
            
                {props.name}
            </Typography>
            </button>
            </a>
        );
    };

    const navList = [{name:'About Me', link:'/'}, {name: 'Resume', link: '/resume'}, {name: 'Portfolio', link:'/portfolio'}, {name: 'Contact', link:'/contact'}];

    return(
        <div className='w-full top-2 p-2 pt-4 flex justify-center'>
        <Navbar id='header' className=" z-10 max-w-full px-4 mx-4 py-2 lg:px-8 lg:py-4 bg-uviolet border-none flex flex-row justify-between">
            <a href='/'> 
            <div className='my-2 p-4 bg-rviolet flex content-center rounded-md'>
                <h1 className='text-4xl text-plavender'>Andreas Quist</h1>
            </div>
            </a>
            <div className="flex flex-row gap-2 items-center h-100%">
                    {navList.map((data)=>
                    (createNavLink(data)))}
            </div>
        </Navbar>
        </div>
    );
    
}