import React from "react";
import "./LegacyFooter.css";
const LegacyFooter = () => {
  return (
    <footer className="legacy-footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <p style={{ marginLeft: "72px" }} className="footer-left">
              Muvıme
            </p>
          </div>
          <div className="col-md-4 text-center">
            <p className="footer-center">@2021 Tübitak. All rights reserved.</p>
          </div>
          <div className="col-md-4 text-right">
            <p className="footer-right">
              <p style={{ marginLeft: "50px" }}>Terms of Use</p>
              <p style={{ marginLeft: "14px" }}>API Terms of Use</p>
              <p style={{ marginLeft: "14px" }}>Privacy Policy</p>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default LegacyFooter;
