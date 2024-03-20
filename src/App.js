import React, { createContext, useEffect, useState } from "react";
import AppRouter from "./AppRouter";
import {HTML5Backend} from 'react-dnd-html5-backend'
import {DndProvider} from 'react-dnd';
import api from './api/courses'
import axios from 'axios'
import { API_URL } from "./api/courses";

export const Context = createContext();


const App = () => {

    const [springSem, setSpringSem] = useState([]);

    const [fallSem, setFallSem] = useState([]);

    
    const [dataCourses, setDataCourses] = React.useState([])
    const [coursesList, setCoursesList] = React.useState([])
    const [ogList, setOgList] = React.useState([])

    console.log("start")
    useEffect(() => {
        const fetchCourses = async() => {
            try{
                // const headers = {
                //     "Access-Control-Allow-Origin": "*",
                //     "method" : "GET"
                // }
                const response = await axios.get(API_URL+'courses/')
                const data = await response.data
                console.log("data", data)
                setDataCourses(response.data)
            } catch (err) {
                console.log(err)
                // console.log(err.response.status)
                // console.log(err.response.header)
            }
        }

        fetchCourses()


        
    }, [])
    console.log("stop")

    // React.useEffect()
    useEffect(() => {
        // This effect will run whenever dataCourses changes
        if (dataCourses.length > 0) {
            setOgList(dataCourses.map(course => ({ ...course, toggle: true })))
        }
    }, [dataCourses]);

    useEffect(() => {
        setCoursesList(ogList);
    }, [ogList])
    

    


    return(

        <Context.Provider value={{ogList, coursesList, setCoursesList, fallSem, setFallSem, springSem, setSpringSem}}>
        <DndProvider backend={HTML5Backend}>
        <AppRouter />   
        </DndProvider>
        </Context.Provider>
    )
}

export default App