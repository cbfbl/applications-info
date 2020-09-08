import React from "react";

export const getInputWithLabel = (
    props,
    labelText,
    inputType = "text",
    inputId = null
) => {
    return (
        <div className="field">
            <label>{labelText}</label>
            <input type={inputType} id={inputId} {...props.input} />
            <div>{props.meta.error}</div>
        </div>
    );
};

export const getHeaderWithDescription = (
    header,
    description,
    headerSize = "large"
) => {
    return (
        <>
            <div className={`ui ${headerSize} header`}>{header}</div>
            <div className="description">{description}</div>
        </>
    );
};

export const getButton = (onClick, className = "", text = "") => {
    return (
        <button className={className} onClick={onClick}>
            {text}
        </button>
    );
};
