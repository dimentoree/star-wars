import {
    HTTPS,
    SWAPI_ROOT,
    SWAPI_PEOPLE,
    VISUAL_GUIDE_PEOPLE_IMAGE,
    VISUAL_GUIDE_IMAGE_EXTENSION
} from "../constants/api";

const getId = (url, category) => {
    return url
        .replace(HTTPS + SWAPI_ROOT + category, '')
        .replace(/\//g, '');
};

export const getPeopleId = url => getId(url, SWAPI_PEOPLE);

export const getPeopleImage = id => `${VISUAL_GUIDE_PEOPLE_IMAGE}/${id + VISUAL_GUIDE_IMAGE_EXTENSION}`;