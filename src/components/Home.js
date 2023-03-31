import React from 'react';
import Counter from './Counter';
import Calc from './Calc';
import Tasks from './Tasks';
import TestimonyList from './TestimonyList';

function Home({ screen }){

    switch(screen){
        case 'testimonyList':
            return ( <TestimonyList/> );
        case 'counter':
            return ( <Counter/> );
        case 'calc':
            return ( <Calc/> );
        case 'tasks':
            return ( <Tasks/> );
        default:
            return ( <TestimonyList/> );
    }
}

export default Home;