import {
    SET_GEOLOCATION_LOOKUP_PENDING,
    SET_GEOLOCATION_LOOKUP_SUCCESS,
    SET_GEOLOCATION_LOOKUP_FAILURE,

    SET_COORDINATES,
} from './mutation-types';

const mutations = {
    [SET_GEOLOCATION_LOOKUP_PENDING] (state) {
        state.request.success = false;
        state.request.pending = true;
        state.request.failure = false;
    },

    [SET_GEOLOCATION_LOOKUP_SUCCESS] (state) {
        state.request.success = true;
        state.request.pending = false;
        state.request.failure = false;
    },

    [SET_GEOLOCATION_LOOKUP_FAILURE] (state) {
        state.request.success = false;
        state.request.pending = false;
        state.request.failure = true;
    },

    [SET_COORDINATES] (state, { latitude, longitude }) {
        state.coordinates.latitude = latitude;
        state.coordinates.longitude = longitude;
    },
};

export default mutations;