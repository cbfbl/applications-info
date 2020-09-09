import React from "react";
import {connect} from "react-redux";
import ApplicationItem from "./ApplicationItem";
import {getApplications} from "../actions";
import SortBar from "./SortBar";

class ApplicationsList extends React.Component {
    componentDidMount() {
        this.props.getApplications();
    }

    sortingFunction(sortBy, reverse = false) {
        const formattedSortBy = this.formatSortBy(sortBy);
        return (job1, job2) => {
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
        const jobsSorted = jobs.sort((job1, job2) => {
            const formattedSortBy = this.formatSortBy(this.props.sortByOption);
            const res =
                job1[formattedSortBy].toLowerCase() <
                job2[formattedSortBy].toLowerCase();
            return this.props.sortByOrder ? res : !res;
        });
        const jobsRendered = jobsSorted.map((job) => {
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
    return {
        applications: state.applications,
        sortByOption: state.sortByOption,
        sortByOrder: state.sortByOrder,
    };
};

export default connect(mapStateToProps, {getApplications})(ApplicationsList);
