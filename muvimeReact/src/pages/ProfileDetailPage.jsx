import React from "react";
import Navbar from "../components/Navbar";
import "./ProfileDetailPage.css";
import person from "../img/profile.png";

const ProfileDetailPage = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="main-body">
          <div className="row gutters-sm">
            <div className="col-md-4 mb-3">
              <div className="card profile">
                <div className="card-body">
                  <div className="d-flex flex-column align-items-center text-center">
                    <img
                      src={person}
                      alt="Admin"
                      className="rounded-circle"
                      width="150"
                    />
                    <div className="mt-3">
                      <h4>Serkan Konakçı</h4>
                      <p className="text-secondary mb-1">
                        FrontEnd Developer
                      </p>
                      <p className="text-muted font-size-sm">
                        Bay Area, San Francisco, CA
                      </p>
                      <button className="btn btn-primary">Follow</button>
                      <button style={{marginLeft:'5%'}} className="btn btn-outline-primary">
                        Message
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card mt-3">
                <ul className="list-group list-group-flush">{/* ... */}</ul>
              </div>
            </div>

            <div className="col-md-8">
         
<div className="card mb-3">
    <div className="card-body">
      <div className="row">
        <div className="col-sm-3">
          <h6 className="mb-0">Full Name</h6>
        </div>
        <div className="col-sm-9 text-secondary">
        Serkan Konakçı
                </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-sm-3">
          <h6 className="mb-0">Email</h6>
        </div>
        <div className="col-sm-9 text-secondary">
          fip@jukmuh.al
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-sm-3">
          <h6 className="mb-0">Phone</h6>
        </div>
        <div className="col-sm-9 text-secondary">
          (239) 816-9029
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-sm-3">
          <h6 className="mb-0">Mobile</h6>
        </div>
        <div className="col-sm-9 text-secondary">
          (320) 380-4539
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-sm-3">
          <h6 className="mb-0">Address</h6>
        </div>
        <div className="col-sm-9 text-secondary">
          Bay Area, San Francisco, CA
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-sm-12">
          <a className="btn btn-info" target="__blank" href="#">Edit</a>
        </div>
      </div>
    </div>
  </div>
              <div className="row gutters-sm">
                <div className="col-sm-6 mb-3">
                  <div className="card h-100">
                    <div className="card-body">
                      <h6 className="d-flex align-items-center mb-3">
                      
                        Film Türleri
                      </h6>
                      <small>Aksiyon</small>
                      <div className="progress mb-3" style={{ height: "5px" }}>
                        <div
                          className="progress-bar bg-primary"
                          role="progressbar"
                          style={{ width: "80%" }}
                          aria-valuenow="80"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                      <small>Korku</small>
                      <div className="progress mb-3" style={{ height: "5px" }}>
                        <div
                          className="progress-bar bg-primary"
                          role="progressbar"
                          style={{ width: "72%" }}
                          aria-valuenow="72"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                      <small>Komedi</small>
                      <div className="progress mb-3" style={{ height: "5px" }}>
                        <div
                          className="progress-bar bg-primary"
                          role="progressbar"
                          style={{ width: "55%" }}
                          aria-valuenow="89"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 mb-3">
                  <div className="card h-100">
                    <div className="card-body">
                      <h6 className="d-flex align-items-center mb-3">
                       
                     Dizi Türleri
                      </h6>
                      <small>Bilim Kurgu</small>
                      <div className="progress mb-3" style={{ height: "5px" }}>
                        <div
                          className="progress-bar bg-primary"
                          role="progressbar"
                          style={{ width: "85%" }}
                          aria-valuenow="80"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                      <small>Dram</small>
                      <div className="progress mb-3" style={{ height: "5px" }}>
                        <div
                          className="progress-bar bg-primary"
                          role="progressbar"
                          style={{ width: "70%" }}
                          aria-valuenow="80"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                      <small>Gerilim</small>
                      <div className="progress mb-3" style={{ height: "5px" }}>
                        <div
                          className="progress-bar bg-primary"
                          role="progressbar"
                          style={{ width: "50%" }}
                          aria-valuenow="80"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileDetailPage;
