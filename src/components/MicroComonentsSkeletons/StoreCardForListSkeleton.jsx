import React from 'react'
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';

import Chip from '@mui/material/Chip';
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";

export const StoreCardForListSkeleton = () => {
    return (
        <>
            <div className="  py-0 px-0 mt-5 border-0 store-card-in-list mt-3">
                <div className="row">
                    <div className="col-5">
                        <div className="store-image-in-list  p-0 shadow-none ">
                            <Skeleton  variant="rectangular" animation="wave" style={{"width":"100%","height":"100%","position":"absolute","border-radius":"1rem"}}/>
                        </div>
                    </div>
                    <div className="col-7">
                            <>
                                <Skeleton>
                                    <Chip label= {"Closes in mins"}  size="small" />
                                </Skeleton>
                            </>

                        <div className=" store-card-list-name ">
                            <Skeleton height="60px"/>
                        </div>
                        <Skeleton/>
                        <b><span className="text-black-50"><Skeleton width="50%" >
                            </Skeleton></span></b><br/>
                        <Skeleton/>
                        <Skeleton />
                    </div>
                </div>
            </div>
        </>
    )
}
