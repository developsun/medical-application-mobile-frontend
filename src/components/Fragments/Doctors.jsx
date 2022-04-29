import React,{useState, useEffect} from 'react'
import Button from '@mui/material/Button';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import SearchAppBar from '../MicroComponents/SearchAppBar'
import Slide from '@material-ui/core/Slide';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { AppBar, Toolbar, Typography } from "@material-ui/core";

function HideOnScroll(props) {
    const { children, window } = props;
    const trigger = useScrollTrigger({ target: window ? window() : undefined });

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}

function ElevationScroll(props) {
    const { children, window } = props;
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: window ? window() : undefined,
    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
}


export const Doctors = () => {


  // Ideal API response data array for doctors listing API
  const doctors = [
    {
      "id":1,
      "name":"Dr. ABC Junior",
      "specialization":"Facial Plastic Surgery",
      "imageURL":"https://i.pinimg.com/originals/e9/c9/05/e9c905fff8b8562d0186bb0d5c196b8e.jpg"
    },
  ]

  return (
    <>
        <div className="header-overlay-short bg-orange-2">
            <div className="row pt-3 px-4">

                <div className="col-12 pt-3">
                    <span className="fs-1  fw-light ">
                        <b>Consult with<br/>Doctors & other<br/>
                        medical practicioners</b>
                    </span>
                    <br/><br/>
                    <input type="text" className="doctors-search-input"  placeholder="Search " aria-label="Search Bar"/>
                </div>
            </div>
        </div>

      <div className="container p-3 px-4">
        <div className="row">
          <div className="col-12">
          <span className="h5 fw-light float-start">Doctors</span>
            <Button variant="text" size="small" className="float-end">View All</Button>
          </div>
        </div>
      </div>
      <div className="miniapp-scroller">
        <div className="dashboard-action-card bg-purple">
        </div>
        <div className="dashboard-action-card bg-orange">
        </div>

      </div>


    </>
  )
}
