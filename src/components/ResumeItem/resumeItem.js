import React from 'react';
import "./styles.css";

const ResumeItem = ({title, Icon, value}) => {
    return (
        <div className="item-container">
            <div className="header">
                <div className="header-title">
                    <p>
                        {title}
                    </p>
                </div>
                <Icon />
            </div>
            <div className="total">
                <span>
                    {value}
                </span>
            </div>
        </div>
    );
};

export default ResumeItem;
