import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './SetDateAndTime.css';

const SetDateAndTime = () => {
    const [startDate, setStartDate] = useState(new Date());
    return (
        <DatePicker
            selected={startDate}
            onChange={date => setStartDate(date)} 
            />
    );
};

export default SetDateAndTime