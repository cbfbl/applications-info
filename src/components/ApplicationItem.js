import React from "react";
import {connect} from "react-redux";
import {deleteApplication} from "../api/jobsAppliedApi";
import history from "../history";
import {getHeaderWithDescription, getButton} from "../helpers";
import {editApplication} from "../actions";

class ApplicationItem extends React.Component {
    editJob() {
        this.props.editApplication(this.props.jobDetails);
        history.push("/appliedjob/edit");
    }

    deleteJob() {
        const {jobTitle, companyName} = this.props.jobDetails;
        const delete_text = `Are you sure you want to delete ${companyName}: ${jobTitle} application`;

        if (window.confirm(delete_text)) {
            deleteApplication(this.props.jobDetails.id);
            history.push("/");
        }
        return; // everything works fine I want to add a prompt before deleting tho
    }

    render() {
        const buttonClassName =
            "small ui right floated primary button two wide";

        const {
            jobTitle,
            jobDescription,
            companyName,
            status,
            location,
            date,
        } = this.props.jobDetails;

        return (
            <div className="item">
                {getHeaderWithDescription(jobTitle, jobDescription)}
                {getHeaderWithDescription("Company: ", companyName, "small")}
                {getHeaderWithDescription("Current status:", status, "small")}
                {getHeaderWithDescription("Location: ", location, "small")}
                {getHeaderWithDescription("Date applied: ", date, "small")}
                {getButton(() => this.deleteJob(), buttonClassName, "delete")}
                {getButton(() => this.editJob(), buttonClassName, "edit")}
            </div>
        );
    }
}

export default connect(null, {editApplication})(ApplicationItem);
