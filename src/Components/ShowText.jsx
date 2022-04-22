import React, { useContext, useState } from "react";
import { ProviderForm } from "..";
const ShowText = ({ title = "" }) => {
    const context = useContext(ProviderForm)
    const [text, setText] = useState()
    context.setText = setText
    return <p>{title}
        {text}</p>
}
export default ShowText;