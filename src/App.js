import React, { createContext, useState } from "react";
import AppRouter from "./AppRouter";
import {HTML5Backend} from 'react-dnd-html5-backend'
import {DndProvider} from 'react-dnd';
import data from './data.json';

export const Context = createContext();


const App = () => {

    const [courseData, setCourseData] = useState(data);
    const [springSem, setSpringSem] = useState([]);

    const [fallSem, setFallSem] = useState([]);

    return(

        <Context.Provider value={{courseData, setCourseData, fallSem, setFallSem, setSpringSem, springSem}}>
        <DndProvider backend={HTML5Backend}>
        <AppRouter />   
        </DndProvider>
        </Context.Provider>
    )
}

export default App