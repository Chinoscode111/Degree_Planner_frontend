import React from "react";
import { Context } from "../../App";
import axios from 'axios'
import { API_URL } from "../../api/courses";

const Year = () => {

    const [year, setYear] = React.useState("1")

    const handleYearChange = (event) => {
        setYear(event.target.value)
    }

    const {setFallSem, setSpringSem} = React.useContext(Context)

    React.useEffect(() => {
        console.log(year)
        const fetchCoursesYear = async () => {
            try{
                const response = await axios.get(API_URL+'year')
                const data = await response.data
                console.log(data)
                setFallSem(data[year]['autumn'])
                setSpringSem(data[year]['spring'])
            } catch(err){
                console.log(err.data)
            }
        } 

        fetchCoursesYear()
        
    }, [year])



    return(
        <div className="year">
            <label for="cars">Year:</label>
                <select id="year" name="year" value={year} onChange={handleYearChange}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                </select>
        </div>
    )
}

export default Year