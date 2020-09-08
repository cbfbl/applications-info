import React from "react";
import {Field, reduxForm} from "redux-form";
import {getInputWithLabel} from "../../helpers";
import {addAppliedJob} from "../../api/jobsAppliedApi";
import history from "../../history";

class ApplicationAddForm extends React.Component {
    onSubmit(application) {
        addAppliedJob(application);
        history.push("/");
    }
    render() {
        return (
            <form
                className="ui form"
                onSubmit={this.props.handleSubmit(this.onSubmit)}
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

export default reduxForm({
    form: "jobApplied",
    validate,
})(ApplicationAddForm);
