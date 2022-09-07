import React from 'react';
import ResumeItem from "../ResumeItem/resumeItem";
import {
    FaRegArrowAltCircleUp,
    FaRegArrowAltCircleDown,
    FaDollarSign
} from "react-icons/fa";
import "./styles.css";

const Resume = ({ income, expense, total}) => {
    return (
        <div className="resume-container">
            <ResumeItem title="Entradas" Icon={FaRegArrowAltCircleUp} value={income}/>
            <ResumeItem title="Saídas" Icon={FaRegArrowAltCircleDown} value={expense}/>
            <ResumeItem title="Total" Icon={FaDollarSign} value={total} />
        </div>
    );
};

export default Resume;
