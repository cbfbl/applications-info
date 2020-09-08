import React from "react";
import NavigationBar from "./NavigationBar";
import {Router, Route} from "react-router-dom";
import createHistory from "../history";
import WebDetails from "./WebDetails";
import LoginForm from "./forms/LoginForm";
import ApplicationAddForm from "./forms/ApplicationAddForm";
import ApplicationList from "./ApplicationList";
import ApplicationEditForm from "./forms/ApplicationEditForm";

const App = () => {
    return (
        <div className="ui container">
            <Router history={createHistory}>
                <NavigationBar />
                <Route exact path="/" component={WebDetails} />
                <Route exact path="/login" component={LoginForm} />
                <Route
                    exact
                    path="/appliedjob/new"
                    component={ApplicationAddForm}
                />
                <Route
                    exact
                    path="/appliedjob/edit"
                    component={ApplicationEditForm}
                />
                <Route exact path="/appliedjobs" component={ApplicationList} />
            </Router>
        </div>
    );
};

export default App;
