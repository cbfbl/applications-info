import React from "react";
import {connect} from "react-redux";
import {sortApplicationList} from "../actions";

class SortBar extends React.Component {
    dropDownOnChange(selected_option) {
        this.props.sortApplicationList(selected_option);
    }

    renderDropDown() {
        const options = ["date", "title", "location", "company", "status"];
        const options_filtered = options
            .filter((option) => option !== this.props.sortBy)
            .map((option) => {
                return (
                    <option key={option} value={option}>
                        {option}
                    </option>
                );
            });

        return (
            <div className="ui container">
                <label className="ui label">Sort by:</label>
                <select
                    className="dropdown"
                    onChange={(e) => this.dropDownOnChange(e.target.value)}
                >
                    <option key={this.props.sortBy} value={this.props.sortBy}>
                        {this.props.sortBy}
                    </option>
                    {options_filtered}
                </select>
            </div>
        );
    }

    render() {
        return <div>{this.renderDropDown()}</div>;
    }
}

const mapStateToProps = (state) => {
    return {sortBy: state.currentSortBy};
};

export default connect(mapStateToProps, {sortApplicationList})(SortBar);
