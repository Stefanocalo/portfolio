import React from "react";

export function Language({icon, children}) {

    return(
        <div className="languageContainer">
            <div className="languageCard">
                {icon}               
                <span>{children}</span>
            </div>
        </div>
    )
}