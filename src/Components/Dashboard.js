import { AccessAlarm, AccountTree, Movie, Photo, Sports } from '@material-ui/icons'
import React from 'react'
import { CircleSlider } from 'react-circle-slider'
function Dashboard() {
    return (
        <div className="dashboard">
            <div className="dashboard__slider">
                <CircleSlider
                    value={20}
                    size={300}
                    knobRadius={20}
                    showTooltip={true}
                    gradientColorFrom="#FEA346"
                    gradientColorTo="#F8616D"
                    showPercentage={true}
                // circleWidth={600S}
                />
            </div>
            <div className="dashboard__Menu">
                <button className="dashboard__Menu--buttons">
                    <Movie />
                </button>
                <button className="dashboard__Menu--buttons">
                    <Photo />
                </button>
                <button className="dashboard__Menu--buttons">
                    <Sports />
                </button>
                <button className="dashboard__Menu--buttons">
                    <AccessAlarm />
                </button >
                <button className="dashboard__Menu--buttons">
                    <AccountTree />
                </button>
            </div>
        </div>
    )
}

export default Dashboard
