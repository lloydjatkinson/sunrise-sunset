import { createStore } from 'vuex';

import GeolocationModule from '../features/geolocation/store/module';

export default createStore({
    modules: {
        GeolocationModule,
    },
});