import React from 'react'

export const Page500 = () => {

  const goBack = (e)=>{
    window.history.back()
  }

  return (
    <>
      <div className="min-vh-100 d-flex flex-row align-items-center">
        <div className="container">
          <div className="row justify-content-center p-3">
            <div className="card p-0 shadow">
              
              <h1 className="card-header bg-danger text-white">Error 500</h1>

              <div className="card-body"> 
                
                <h1>500</h1>Oops! Its not you. It is us.

                <div className="mt-3">
                    <button onClick={goBack} className="btn btn-danger">Go back</button>
                </div>

              </div>
            
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
