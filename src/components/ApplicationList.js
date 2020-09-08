import React from "react";
import {connect} from "react-redux";
import ApplicationItem from "./ApplicationItem";
import {getApplications} from "../actions";
import SortBar from "./SortBar";

class ApplicationsList extends React.Component {
    componentDidMount() {
        this.props.getApplications();
    }

    getSortingFunction(sortBy, reverse = false) {
        const formattedSortBy = this.formatSortBy(sortBy);
        return function (job1, job2) {
            const res = job1[formattedSortBy] < job2[formattedSortBy];
            return reverse ? -res : res;
        };
    }

    formatSortBy(sortBy) {
        switch (sortBy) {
            case "title":
                return "jobTitle";
            case "company":
                return "companyName";
            default:
                return sortBy;
        }
    }

    renderJobs(jobs) {
        if (jobs == null) {
            return (
                <div className="ui segment">
                    <br />
                    <br />
                    <div className="ui active dimmer">
                        <div className="ui indeterminate text loader">
                            Fetching data please wait...
                        </div>
                    </div>
                </div>
            );
        }
        if (jobs.length === 0) {
            return <div>No applications</div>;
        }
        const jobsRendered = jobs
            .sort(this.getSortingFunction(this.props.sortBy))
            .map((job) => {
                return <ApplicationItem key={job.id} jobDetails={job} />;
            });
        return jobsRendered;
    }

    render() {
        return (
            <div>
                <SortBar />
                <div className="ui divided list">
                    {this.renderJobs(this.props.applications)}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {applications: state.applications, sortBy: state.currentSortBy};
};

export default connect(mapStateToProps, {getApplications})(ApplicationsList);
