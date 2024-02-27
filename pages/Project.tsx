import React from "react";
import { useParams } from "react-router-dom";

function Project() {
    const {projectId} = useParams();

    console.log("projectId", projectId);

    return (
        <>
            <h2>Project</h2>
        </>
    )
}

export default Project;