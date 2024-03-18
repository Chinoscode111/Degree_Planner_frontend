import React,{ useState } from 'react';
import { FaEye } from "react-icons/fa";

const usePasswordToggle = () => {
    const [visible, setVisiblity] = useState(false);

    const Icon = (
        <FaEye icon={ visible ? "eyeslash" : "eye" } 
        onClick={ () => setVisiblity( visibility => !visibility)}/>
    )

    const InputType = visible ? "text" : "password";

    return[InputType, Icon];
}

export default usePasswordToggle