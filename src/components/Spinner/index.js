import React from "react";
import { ClipLoader } from "react-spinners";

export default function Spinner(){
    return(
        <div>
            <ClipLoader
                color="#ffffff"
                size={60}
            />
        </div>
    )
}