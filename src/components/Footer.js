import React from 'react';
import '../styles/footer.scss';

function Footer() {
    return (
        <div className="footer">
            <div className="responsive">
                <div className="col">
                    <div className="col1">
                        <div className="en colHeader">Community</div>
                        <div className="en desc-font">GitHub</div>
                        <div className="en desc-font">GitHub</div>
                    </div>
                    <div className="col1">
                        <div className="en colHeader">Resources</div>
                        <div className="en desc-font">Support</div>
                        <div className="en desc-font">Support</div>
                    </div>
                    <div className="col1">
                        <div className="en colHeader">Company</div>
                        <div className="en desc-font">About</div>
                        <div className="en desc-font">Contact Us</div>
                    </div>
                </div>

                <div className="copyright">Copyright © 2020 OpenYearRound.</div>
            </div>
        </div>
    );
}

export default Footer;
