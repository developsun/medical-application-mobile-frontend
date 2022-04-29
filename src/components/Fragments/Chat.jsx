import React from 'react'

export const Chat = () => {

    return (
        <>
            <div className="container">
                <div className="row pt-3 px-4">
                    <center>
                        <b>Ma Tara Store</b><br/>
                        <span className="chat-description"> Nabin Das Road, Kolkata - 700090</span>
                    </center>
                </div>
                <div className="chat-box">
                    <div className="media w-60 mb-0">
                        <div className="media-body ml-3">
                            <div className="chat-bg-dark rounded py-2 px-3 mb-2">
                                <p className="text-small mb-0 text-muted">Test which is a new approach all solutions</p>
                            </div>
                        </div>
                    </div>
                    <div className="media w-50 mr-auto mb-3">
                        <div className="media-body ml-3">
                            <div className="chat-bg-dark rounded py-2 px-3 mb-2">
                                <p className="text-small mb-0 text-muted">Test which all solutions</p>
                            </div>
                        </div>
                    </div>
                    <div className="media w-50 ml-auto mb-3">
                        <div className="media-body mr-3">
                            <div className="chat-bg-dark rounded py-2 px-3 mb-2">
                                <p className="text-small mb-0 text-muted">Test which all solutions</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/*Message box area*/}
                <div className="message-input-box-area">
                    <div className="row">
                        <div className="col-12">

                            <div className="input-group flex-nowrap">
                                <input type="text" className="chat-message-input"  placeholder="Type message here ..." aria-label="Search Bar"/>
                                <span className="chat-message-input-icon-area">
                                    <button className="btn  material-icons">send</button>
                                </span>

                            </div>
                        </div>
                    </div>
                </div>
             </div>
        </>
    )
}
