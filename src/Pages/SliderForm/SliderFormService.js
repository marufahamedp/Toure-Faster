import React from 'react';

const SliderFormService = (props) => {
    const {tourName} = props.service;
    return (
        <option value={tourName}>{tourName}</option>
    );
};

export default SliderFormService;