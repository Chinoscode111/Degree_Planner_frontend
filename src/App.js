import React, { createContext, useState } from "react";
import AppRouter from "./AppRouter";
import {HTML5Backend} from 'react-dnd-html5-backend'
import {DndProvider} from 'react-dnd';
import data from './data.json';

export const Context = createContext();


const App = () => {

    const [springSem, setSpringSem] = useState([]);

    const [fallSem, setFallSem] = useState([]);
    
    const [coursesList, setCoursesList] = React.useState(data.map(course => (
        {...course, toggle: true}
    )))

    const ogList = data.map(course => (
        {...course, toggle: true}
    ))


    return(

        <Context.Provider value={{ogList, coursesList, setCoursesList, fallSem, setFallSem, setSpringSem, springSem}}>
        <DndProvider backend={HTML5Backend}>
        <AppRouter />   
        </DndProvider>
        </Context.Provider>
    )
}

export default App