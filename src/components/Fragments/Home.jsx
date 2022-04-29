import React from 'react'
import Badge from '@mui/material/Badge';
import Chat from '@mui/icons-material/Chat';

export const Home = () => {

  return (
    <>
      <div className="container p-3">
        <div className="row">
          <div className="col-12">
            <div className="float-start">
            <span className="fw-lighter text-muted fs-2">Good morning,</span><br/>
            <span className="text-dark fs-1">Nirmalya</span>
            </div>
            <div className="h-100 d-flex justify-content-end px-3 align-items-center">
              <Badge badgeContent={4} color="primary">
                <Chat color="action" />
              </Badge>
            </div>
          </div>
        </div>
        <div className="row pt-4">
          <div className="col-12">
            <div className="input-group flex-nowrap">
              <span className="dashboard-search-input-icon-area">@</span>
              <input type="text" className="dashboard-search-input"  placeholder="Search medicine, doctors, etc ..." aria-label="Search Bar"/>
            </div>
          </div>
        </div>

      </div>


      <div className="miniapp-scroller">
        <div className="dashboard-action-card bg-purple">
          13 days Smoking Challenge
        </div>
        <div className="dashboard-action-card bg-orange">
          13 days Smoking Challenge
        </div>

      </div>
    </>
  )
}
