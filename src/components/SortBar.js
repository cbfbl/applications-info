import React from "react";
import {connect} from "react-redux";
import {sortApplicationList, sortApplicationListOrder} from "../actions";

class SortBar extends React.Component {
    dropDownOnChange(selected_option) {
        this.props.sortApplicationList(selected_option);
    }

    renderOrderButton() {
        const orderButtonText = this.props.sortByOrder
            ? "Ascending"
            : "Descending";
        return (
            <button
                className="mini ui button"
                onClick={() =>
                    this.props.sortApplicationListOrder(!this.props.sortByOrder)
                }
            >
                {orderButtonText}
            </button>
        );
    }

    renderDropDown() {
        const options = ["date", "title", "location", "company", "status"];
        const options_filtered = options
            .filter((option) => option !== this.props.sortByOption)
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
                    <option
                        key={this.props.sortByOption}
                        value={this.props.sortByOption}
                    >
                        {this.props.sortByOption}
                    </option>
                    {options_filtered}
                </select>
            </div>
        );
    }

    render() {
        return (
            <div>
                {this.renderDropDown()}
                {this.renderOrderButton()}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        sortByOption: state.sortByOption,
        sortByOrder: state.sortByOrder,
    };
};

export default connect(mapStateToProps, {
    sortApplicationList,
    sortApplicationListOrder,
})(SortBar);
