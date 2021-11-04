import axios from "axios";

export const getLocationData = (justByCountry) => {
  return (dispatch) => {
    dispatch(fetchStart());

    axios
      .get("https://ip-fast.com/api/ip/")
      .then((res) => {
        const ip = res.data;
        dispatch(changeIP(ip));

        axios
          .get(`http://ip-api.com/json/${ip}`)
          .then((res) => {
            const country = res.data.country;
            // Left these here to test for other countries, just set country to a string which is a real country with capitalized first characters in the country name like below.
            // const country = "United Kingdom";
            // const country = "India";
            // const country = "Japan";
            dispatch(changeCountry(country));

            let formattedCountry;

            if (country.split(" ").length > 1) {
              formattedCountry = country.split(" ").join("+");
            } else {
              formattedCountry = country;
            }

            axios
              .get(
                `http://universities.hipolabs.com/search?country=${formattedCountry}`
              )
              .then((res) => {
                dispatch(changeUniversities(res.data));

                dispatch(fetchSuccess());
              })
              .catch(() => {
                dispatch(fetchError("Error getting Universities"));
              });
          })
          .catch(() => {
            dispatch(fetchError("Error getting Country"));
          });
      })
      .catch(() => {
        dispatch(fetchError("Error getting IP address"));
      });
  };
};

export const CHANGE_COUNTRY = "CHANGE_COUNTRY";
export const CHANGE_UNIVERSITIES = "CHANGE_UNIVERSITIES";
export const CHANGE_IP = "CHANGE_IP";

export const changeCountry = (countryName) => {
  return { type: CHANGE_COUNTRY, payload: countryName };
};

export const changeIP = (ipAddress) => {
  return { type: CHANGE_IP, payload: ipAddress };
};

export const changeUniversities = (universities) => {
  return { type: CHANGE_UNIVERSITIES, payload: universities };
};

export const FETCH_START = "FETCH_START";
export const FETCH_ERROR = "FETCH_ERROR";
export const FETCH_SUCCESS = "FETCH_SUCCESS";

// For user Feed back On Progress Of getting their data
export const fetchStart = () => {
  return {
    type: FETCH_START,
  };
};

export const fetchSuccess = (newPerson) => {
  return {
    type: FETCH_SUCCESS,
    payload: newPerson,
  };
};

export const fetchError = (errorMessage) => {
  return {
    type: FETCH_ERROR,
    payload: errorMessage,
  };
};
