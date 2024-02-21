import React from "react";
import { PieChart as Pie} from "react-minimal-pie-chart"

const PieChart = () => {

    const data=[
        { title: 'One', value: 10, color: '#6DFF85', label: '55%'},
        { title: 'Two', value: 15, color: '#AFFFBC', label: '30%'},
        { title: 'Three', value: 20, color: 'white', label: '' },
        ]

    return(
        <div className="pie-chart-cont">
            <Pie
            className="piechart--chart"
            radius = {50}
            startAngle={270}
            lineWidth={60}
            data={data}
            label={({ dataEntry }) => `${dataEntry.label}`}
            labelPosition={90}
            />

            <div className="piechart--center">
                <p className="piechart--centerperc">55%</p>
                <p className="piechart--earned">Earned</p>
            </div>
        </div>
        
    )
}

export default PieChart