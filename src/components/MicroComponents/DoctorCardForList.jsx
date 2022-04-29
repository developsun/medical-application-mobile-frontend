import React from 'react'

export const DoctorCardForList = (props) => {
  return (
    <>
        <div className="card shadow-sm py-3 px-3 border-0 rounded doctor-card-in-list mt-3">
            <div className="row">
                <div className="col-3">
                     <div className="doctor-image-in-list shadow-lg " style={{"background-image":`url(${props.details.imageURL})`}}/>
                </div>
                <div className="col-9 pt-1">
                    <div className="row">
                        <div className="col-12" style={{"line-height": "0.8"}}>
                            <span className="fs-5 text-body fw-bold ">
                                {props.details.name} 
                            </span>
                        </div>
                        <div className="col-12">
                            <span className="text-muted" style={{"font-size":"12px"}}>
                                {props.details.specialization}
                            </span>
                        </div>
                        <div className="col-12 pt-2">
                            <span class="material-icons fs-6">star</span>
                            <span class="material-icons fs-6">star</span>
                            <span class="material-icons fs-6">star</span>
                            <span class="material-icons fs-6">star</span>
                            <span class="material-icons fs-6">star</span>
                            <span class="text-muted float-end" style={{"font-size":"12px"}}>4.5 | 120 Reviews</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </>
  )
}
