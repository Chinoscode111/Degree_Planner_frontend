import React, { createContext } from "react";
import AppRouter from "./AppRouter";
import {HTML5Backend} from 'react-dnd-html5-backend'
import {DndProvider} from 'react-dnd';
import data from './data.json';

export const Context = createContext();


const App = () => {

    const [courseData, setCourseData] = React.useState(data);


    return(

        <Context.Provider value={{courseData, setCourseData}}>
        <DndProvider backend={HTML5Backend}>
        <AppRouter />   
        </DndProvider>
        </Context.Provider>
    )
}

export default App