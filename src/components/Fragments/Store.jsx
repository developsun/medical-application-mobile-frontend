import React from 'react'
import { NavLink } from 'react-router-dom'


export const Store = () => {

    return (
        <>
            <div className="overlay">
                <div className="store-image"  style={{"background-image":`url("https://i.pinimg.com/736x/5c/00/4b/5c004b7ee153412f3e4a6604c29a22db.jpg")`}}>
                </div>
            </div>
            <div className="container">
                <div className="row p-4">
                    <div className="col-12">
                    <div className="float-start">
                    <span className="fw-bold fs-5">Apollo Pharmacy</span><br/>
                    <span className="fw-lighter text-muted">Nabin Das Road, Tobin Road </span>
                    </div>
                    <div className="float-end">
                        <NavLink to='/details/chat/1'>
                            <button className="btn material-icons shadow-sm p-2 fs-6 rounded bg-white">chat_bubble_outline</button>
                        </NavLink>
                    </div>
                    </div>
                </div>
            </div>
            <div className="store-service-scroller">

                <div className="store-service-scroller-card bg-orange">
                    <div className="container">
                        <div className="row pt-3">
                            <span className="display-6">Medicine <br/><b>Delivery</b></span>
                        </div>
                    </div>
                    <img src="https://purepng.com/public/uploads/large/purepng.com-doctorsdoctorsdoctors-and-nursesa-qualified-practitioner-of-medicine-aclinicianmedical-practitionermale-doctornotepad-1421526856962ngglq.png" className="store-service-scroller-card-image"/>
                </div>

                <div className="store-service-scroller-card bg-purple">
                    <div className="container">
                        <div className="row pt-3">
                            <span className="display-6">Fitness <br/><b>Eqiupments</b></span>
                        </div>
                    </div>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/OxyWatch_C20_Pulse_Oximeter.png" className="store-service-scroller-card-image"/>
                </div>

                <div className="store-service-scroller-card bg-red">
                    <div className="container">
                        <div className="row pt-3">
                            <span className="display-6">Doctor <br/><b>Consultation</b></span>
                        </div>
                    </div>
                    <img src="https://www.pngall.com/wp-content/uploads/2018/05/Doctor-PNG-Images.png" className="store-service-scroller-card-image"/>
                </div>

            </div>
            <div className="container">
                <div className="row p-4">
                    <div className="store-status-area">
                        Store is closing soon
                    </div>
                </div>
            </div>

        </>
    )
}
