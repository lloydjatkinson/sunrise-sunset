import { getCurrentPosition } from '../functions';

import {
    SET_GEOLOCATION_LOOKUP_PENDING,
    SET_GEOLOCATION_LOOKUP_SUCCESS,
    SET_GEOLOCATION_LOOKUP_FAILURE,

    SET_COORDINATES,
} from './mutation-types';

const actions = {
    async getCoordinates ({ state, commit }) {
        commit(SET_GEOLOCATION_LOOKUP_PENDING);

        const {
            success, latitude, longitude, error,
        } = await getCurrentPosition();

        if (success) {
            commit(SET_GEOLOCATION_LOOKUP_SUCCESS);
            commit(SET_COORDINATES, { latitude, longitude });
        }
    },
};

export default actions;