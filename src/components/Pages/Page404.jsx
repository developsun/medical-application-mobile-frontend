import React from 'react'

export const Page404 = () => {

  const goBack = (e)=>{
    window.history.back()
  }

  return (
    <>
      <div className="min-vh-100 d-flex flex-row align-items-center">
        <div className="container">
          <div className="row justify-content-center p-3">
            <div className="card p-0 shadow">
              
              <h1 className="card-header bg-warning">Error 404</h1>

              <div className="card-body"> 
              
                <h1>404</h1>Oops! Page not found

                <div className="mt-3">
                    <button onClick={goBack} className="btn btn-warning">Go back</button>
                </div>

              </div>
            
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
