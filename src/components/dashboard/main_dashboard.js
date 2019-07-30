import React from 'react';

function MainDashboard(props){
    return(
        <div className="dashboard text-left">
            <div className="row p-0 m-0">
                <div className="col-md-4 text-center topbar">
                    <p><i className="fa fa-user" aria-hidden="true"></i> Total Users</p>
                    <h3>2500</h3>
                    <p><label><span> - 4%</span> from last week</label></p>
                </div>
                <div className="col-md-4 text-center topbar">
                    <p><i className="fa fa-clock-o" aria-hidden="true"></i> Average Time</p>
                    <h3>125.30</h3>
                    <p><label><span> + 10%</span> from last week</label></p>
                </div>
                <div className="col-md-4 text-center topbar">
                    <p><i className="fa fa-archive" aria-hidden="true"></i> Total Collections</p>
                    <h3>5000</h3>
                    <p><label><span>4%</span> from last week</label></p>
                </div>
            </div>
            {/* <div className="row p-0 m-0 ">
                <div className="col-md-6 text-left progressBar border-bottom-1">
                    <p className="title text-center">Recent Activities</p>
                    <div className="recent-activities">
                        <div className="activities">
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy t</p>
                        </div>
                        <div className="activities">
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy t</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 progressBar">
                    <p className="title text-center">Latest Updates</p>
                    <div className="latest-updates">
                        <div className="activities">
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy t</p>
                        </div>
                        <div className="activities">
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy t</p>
                        </div>
                        <div className="activities">
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy t</p>
                        </div>
                        <div className="activities">
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy t</p>
                        </div>
                        <div className="activities">
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy t</p>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    )
}

export default MainDashboard;