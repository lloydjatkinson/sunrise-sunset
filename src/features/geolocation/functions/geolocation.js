/**
 * A wrapper for getCurrentPosition that adds Promise based functionality.
 * @param {PositionOptions} options The Geolocation PositionOptions to use when getting the current position.
 * @returns { Promise } A promise containing the Geolocation information.
 */
const getCurrentPositionPromiseWrapper = (options) => new Promise((resolve, reject) => navigator.geolocation.getCurrentPosition(resolve, reject, options));

/**
 *
 * @param {PositionOptions} options The Geolocation PositionOptions to use when getting the current position.
 * @returns { { success: true, latitude: string, longitude: string } | { success: false, error: GeolocationPositionError }} A result object containing the coordinates or an error.
 */
export default async (options) => {
    try {
        const { coords: { latitude, longitude } } = await getCurrentPositionPromiseWrapper(options);

        return {
            success: true,
            latitude,
            longitude,
        };
    } catch (error) {
        return {
            success: false,
            error,
        };
    }
};