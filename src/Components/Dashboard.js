import { AccessAlarm, AccountTree, Height, Movie, Photo, Sports } from '@material-ui/icons'
import React, { useState } from 'react'
import { CircleSlider } from 'react-circle-slider'
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import ReactPlayer from 'react-player';

function rand() {
    return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();

    return {
        // top: `${top}%`,
        // left: `${left}%`,
        // transform: `translate(-${top}%, -${left}%)`,
    };
}
const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: '10%',
        width: '80%',
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

function Dashboard() {
    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = useState(false)
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const body = (
        <div style={modalStyle} className={classes.paper}>
            <h2 id="simple-modal-title">Watch the Clip</h2>

            <div className="video-wrapper">
                <ReactPlayer
                    url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
                    controls={true}
                    style={{
                        height: 'auto',
                        width: 'auto'
                    }}
                />
            </div>

        </div>
    );

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
                <button className="dashboard__Menu--buttons" onClick={handleOpen}>
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
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                {body}
            </Modal>
        </div>
    )
}

export default Dashboard
