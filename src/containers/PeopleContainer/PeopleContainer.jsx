import {useState, useEffect} from "react";
import {withErrorAPI} from "@hoc/withErrorAPI";
import {getAPIResource} from "@utils/network";
import {API_PEOPLE} from "@constants/api";
import {getPeopleId, getPeopleImage} from "@services/getPeopleData";
import PeopleList from "@components/PeopleList";

const PeopleContainer = ({setAPIError}) => {
    const [people, setPeople] = useState(null);

    const gerResource = async (url) => {
        const response = await getAPIResource(url);

        if (response) {
            const peopleList = response.results.map(({name, url}) => {
                const id = getPeopleId(url);
                const image = getPeopleImage(id);

                return {id, name, image};
            });

            setPeople(peopleList);
            setAPIError(false);
        } else {
            setAPIError(true);
        }
    }

    useEffect(() => {
        gerResource(API_PEOPLE);
    }, []);

    return (
        <>
            {people && <PeopleList people={people}/>}
        </>
    )
};

export default withErrorAPI(PeopleContainer);