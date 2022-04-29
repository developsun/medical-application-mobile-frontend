import React from 'react'
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';

import Chip from '@mui/material/Chip';

export const StoreCardForList = (props) => {
    return (
        <>
            <div className="  py-0 px-0 mt-5 border-0 store-card-in-list mt-3">
                <div className="row">
                    <div className="col-5">
                        <div className="store-image-in-list  p-0 " style={{"background-image":`url(${props.details.imageURL})`}}>
                            {props.details.discount>0 &&
                            <div className="overlay-dark">

                                <div className="overlay-text">
                                    {props.details.discount}% off*

                                </div>
                             </div>
                            }
                        </div>
                    </div>
                    <div className="col-7">
                        {props.details.closes_in_mins &&
                            <>
                                <Chip label= {"Closes in " + props.details.closes_in_mins +" mins"} color="secondary" size="small" />
                            </>
                        }

                        <div className="store-card-list-name ">{props.details.store_name}
                        </div>
                        <Rating
                            name="hover-feedback"
                            value={props.details.rating}
                            precision={0.5}
                            emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                        />
                        <br/>
                        <b><span className="text-black-50">{props.details.type}</span></b><br/>
                        {props.details.address}
                    </div>
                </div>
            </div>
        </>
    )
}
