import React from "react";
import { PieChart as Pie} from "react-minimal-pie-chart"

const PieChart = () => {

    const [statusData, setStatusData] = React.useState([55, 35, 25])

    const data=[
        { title: 'One', value: statusData[0], color: '#6DFF85', label: statusData[0]+'%'},
        { title: 'Two', value: statusData[1], color: '#AFFFBC', label: statusData[1]+'%'},
        { title: 'Three', value: statusData[2], color: 'white', label: '' },
        ]

    return(
        <div className="pie-chart-cont">
            <Pie
            className="piechart--chart"
            radius = {45}
            startAngle={270}
            lineWidth={60}
            data={data}
            label={({ dataEntry }) => `${dataEntry.label}`}
            labelPosition={90}
            />

            <div className="piechart--center">
                <p className="piechart--centerperc">{statusData[0]}%</p>
                <p className="piechart--earned">Earned</p>
            </div>
        </div>
        
    )
}

export default PieChart