import React, { createContext, useEffect, useState } from "react";
import AppRouter from "./AppRouter";
import {HTML5Backend} from 'react-dnd-html5-backend'
import {DndProvider} from 'react-dnd';
import data from './data.json';
import api from './api/courses'

export const Context = createContext();


const App = () => {

    const [springSem, setSpringSem] = useState([]);

    const [fallSem, setFallSem] = useState([]);

    
    const [data, setData] = React.useState([])
    

    console.log("start")
    useEffect(() => {
        const fetchCourses = async() => {
            try{
                const response = await api.get('/courses')
                setData(response.data)
            } catch (err) {
                console.log(err.response.data)
                console.log(err.response.status)
                console.log(err.response.header)
            }
        }

        fetchCourses()
        
    }, [])
    console.log("stop")

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