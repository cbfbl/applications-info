import React from "react";
import {Link} from "react-router-dom";

class NavigationBar extends React.Component {
    state = {currentUser: null};

    render() {
        return (
            <div className="ui secondry menu">
                <div className="item">
                    <Link to="/">Home</Link>
                </div>
                <div className="right menu">
                    <div className="item">
                        <Link to="/appliedjobs">Applied jobs </Link>
                    </div>
                    <div className="item">
                        <Link to="/appliedjob/new">Add applied job</Link>
                    </div>
                    <div className="item">
                        <div className="ui icon input">
                            <input type="text" placeholder="Search..." />
                            <i className="search link icon" />
                        </div>
                    </div>
                    <div className="item">
                        <Link to="/">Login/logout</Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default NavigationBar;
