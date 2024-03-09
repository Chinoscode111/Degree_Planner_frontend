import React from "react";
import AppRouter from "./AppRouter";
import {HTML5Backend} from 'react-dnd-html5-backend'
import {DndProvider} from 'react-dnd';


const App = () => {
    return(
        <DndProvider backend={HTML5Backend}>
        <AppRouter />   
        </DndProvider>
    )
}

export default App