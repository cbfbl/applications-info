import {getApplications as getApplicationsAPI} from "../api/jobsAppliedApi";

export const getApplications = () => async (dispatch) => {
    const jobsApplications = await getApplicationsAPI();
    dispatch({type: "GET_APPLICATIONS", payload: jobsApplications});
};

export const editApplication = (application) => {
    return {
        type: "EDIT_APPLICATION",
        payload: application,
    };
};

export const sortApplicationList = (sortBy) => {
    return {
        type: "SORT_APPLICATIONS",
        payload: sortBy,
    };
};
