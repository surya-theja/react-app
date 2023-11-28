import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ResInfo = () => {
    const params = useParams();
    const [resDetails, setResDetails] = useState([]);

    useEffect( () => getResDetails(), []);

    // const
    return (
        <div></div>
    );
};

export default ResInfo;