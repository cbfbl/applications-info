import React from "react";
import {connect} from "react-redux";
import {Field, reduxForm} from "redux-form";
import {getInputWithLabel} from "../../helpers";
import {updateApplication} from "../../api/jobsAppliedApi";
import history from "../../history";

class ApplicationEditForm extends React.Component {
    onSubmit(job) {
        updateApplication(job);
        history.push("/");
    }

    render() {
        return (
            <form
                className="ui form"
                onSubmit={this.props.handleSubmit((job) => {
                    this.onSubmit(job);
                })}
            >
                <Field
                    name="jobTitle"
                    component={(props) =>
                        getInputWithLabel(props, "Job title:")
                    }
                />
                <Field
                    name="jobDescription"
                    component={(props) =>
                        getInputWithLabel(props, "Job description")
                    }
                />
                <Field
                    name="companyName"
                    component={(props) =>
                        getInputWithLabel(props, "Company name:")
                    }
                />
                <Field
                    name="status"
                    component={(props) => getInputWithLabel(props, "Status:")}
                />
                <Field
                    name="location"
                    component={(props) => getInputWithLabel(props, "Location:")}
                />
                <Field
                    name="date"
                    component={(props) =>
                        getInputWithLabel(props, "Date:", "date")
                    }
                />
                <button className="ui button primary" type="submit">
                    Submit
                </button>
            </form>
        );
    }
}

const validate = (formValues) => {
    const genericMessage = "Please enter all fields";
    const errors = {
        jobTitle: genericMessage,
        jobDescription: genericMessage,
        companyName: genericMessage,
        status: genericMessage,
        location: genericMessage,
        date: genericMessage,
    };
    for (const key in formValues) {
        delete errors[key];
    }
    return errors;
};

const wrappedApplicationEditForm = reduxForm({
    form: "editApplication",
    validate,
})(ApplicationEditForm);

const mapStateToProps = (state) => {
    return {
        initialValues: state.currentApplication,
    };
};

export default connect(mapStateToProps)(wrappedApplicationEditForm);
