import React from "react";
import Cards from "./Cards";

function Panel(){
    return(
        <div className="flex justify-center">
            <div className="m-4 h-7 w-80 sm:w-1/2 ">
                <Cards></Cards>
            </div>
            <div className="m-4 h-7 w-80 sm:w-1/2 ">
                <Cards></Cards>
            </div>
            <div className="m-4 h-7 w-80 sm:w-1/2 ">
                <Cards></Cards>
            </div>
        </div>
    );

}
export default Panel;