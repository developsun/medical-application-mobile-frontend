import React from 'react'

export const Doctor = () => {

  return (
    <>
      <div className="container">
        <div className="row p-4">
          
          <div className="col-4 p-0">
            <div className="doctor-card shadow-lg " style={{"background-image":"url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvXmexPvgjNVrgGDPUoQKEcFvGQ2P_RvwDCw&usqp=CAU')"}}/>
          </div>

          <div className="col-8 ps-4 pt-2">

            <span className="fw-bold fs-5">Dr. ABC Senior</span>
            <span className="doctor-details-sub-heading fw-lighter text-muted"><br/>Heart Surgeon & General Medicine </span>            

            <div className="row pt-3">
              <div className="col-2">
                <span className="material-icons shadow-sm p-2 fs-6 rounded bg-white">favorite_border</span>
              </div>
              <div className="col-10" style={{  "line-height": "80%"}}>
                <span className="doctor-details-sub-sub-heading fw-light text-muted">Rating</span><br/>
                <span className=" doctor-details-sub-heading">4.5 out of 5</span>
              </div>
            </div>

            <div className="row pt-3">
              <div className="col-2">
                <span className="material-icons shadow-sm p-2 fs-6 rounded bg-white">favorite_border</span>
              </div>
              <div className="col-10" style={{  "line-height": "80%"}}>
                <span className="doctor-details-sub-sub-heading fw-light text-muted">Patient</span><br/>
                <span className=" doctor-details-sub-heading">1000+</span>
              </div>
            </div>

          </div>
        </div>

        {/* FixMe: This card show stay in the position and contents should be scrollable  */}
        <div className="row p-4" style={{"min-height":"600px"}}>
            <div className="shadow-lg doctor-details-card bg-white " >
             
              <b>Biography</b><br/>
              <div style={{ "line-height": "90%"}} >
                <span className="text-muted doctor-details-bibliography-text">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </span>
              </div>
              <br/>

              <b>Biography</b><br/>
              <div style={{ "line-height": "90%"}} >
                <span className="text-muted doctor-details-bibliography-text">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </span>
              </div>
              <br/>

              <b>Location</b><br/>
              <img src="https://www.drupal.org/files/project-images/generated-map-popup.PNG" alt='none' style={{"width":"100%"}} className="shadow-lg"/>
            
              <br/><br/><b>Reviews</b><br/>

              <div className="spacer"></div>
            </div>
        </div>

      </div>
      <div className="floating-button-area" id='appointment-area'>
        <button className="btn floating-button shadow">Make Appointment</button>
      </div>
    </>
  )
}
