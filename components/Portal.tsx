import React from "react";
import {createPortal} from "react-dom";

function Portal({Comp}) {
    return createPortal(
        Comp,
        document.getElementById("portal")
    )
}

export default Portal;