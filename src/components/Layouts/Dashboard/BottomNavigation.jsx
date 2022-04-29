import React,{useEffect, useState} from 'react';
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import BottomNavigation from '@mui/material/BottomNavigation';
import Paper from '@mui/material/Paper';


export const BottomNavigationComponent = () => {

    // Setting dirty bit to true. This dirty bit is used to check whether component has loaded or mounted. True/False.
    const [isMounting,setMounting] = useState(true)

    const selectPage =(e)=>{

        // Setting the previous navigation items to default color
        document.getElementById('homeNavigation').style.color = 'grey';
        document.getElementById('doctorsNavigation').style.color = 'grey';
        document.getElementById('storeNavigation').style.color = 'grey';
        document.getElementById('settingsNavigation').style.color = 'grey';

        // Setting target element color to active color
        e.target.style.color = '#4285f4'

        // Changing navigation based on target id
        if(e.target.id === 'homeNavigation')
            window.location.href = '/#/'
        else if(e.target.id === 'doctorsNavigation')
            window.location.href ='/#/doctors'
        else if(e.target.id === 'storeNavigation')
            window.location.href ='/#/stores'
        else
            window.location.href ='/#/settings'

    }

    const mount = () => {
        // Function to be called when component is loaded as a whole but not refreshed
        document.getElementById('homeNavigation').style.color = 'grey';
        document.getElementById('doctorsNavigation').style.color = 'grey';
        document.getElementById('storeNavigation').style.color = 'grey';
        document.getElementById('settingsNavigation').style.color = 'grey';

        if(window.location.hash === '#/doctors')
            document.getElementById('doctorsNavigation').style.color = '#4285f4';
        if(window.location.hash === '#/stores')
            document.getElementById('storeNavigation').style.color = '#4285f4';
        if(window.location.hash === '#/settings')
            document.getElementById('settingsNavigation').style.color = '#4285f4';
    }

    // eslint-disable-next-line
    useEffect(() => {

        // Checking if component has loaded or refreshed
        if (isMounting === true){
            mount();

            // Setting dirty bit to false
            setMounting(false)
        }
    })

    return (
        <div className="bottom-navigation d-flex align-items-center">
            <div style={{"width":"100%"}}>
            <div className="row  ">
                <div className="col-3  nav-item">
                    <span className="material-icons nav-icon" id='homeNavigation' onClick={selectPage}>home</span>
                </div>
                <div className="col-3 nav-item">
                    <span className="material-icons nav-icon" id='doctorsNavigation' onClick={selectPage}>favorite_border</span>
                </div>
                <div className="col-3 nav-item" >
                    <span className="material-icons nav-icon" id='storeNavigation' onClick={selectPage}>store</span>
                </div>
                <div className="col-3 nav-item" >
                    <span className="material-icons nav-icon" id='settingsNavigation' onClick={selectPage}>settings</span>
                </div>
            </div>
            </div>
        </div>
    )
}
