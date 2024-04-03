import {useState} from "react";
import ErrorMessage from "@components/ErrorMessage";

export const withErrorAPI = View => {
    return props => {
        const [apiError, setAPIError] = useState(false);

        return (
            <>
                {apiError ? <ErrorMessage/> : <View setAPIError={setAPIError} {...props}/>}
            </>
        )
    }
}