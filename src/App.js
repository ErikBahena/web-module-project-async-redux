import React, { useEffect } from "react";

import DisplayTable from "./components/DisplayTable";
import styled from "styled-components";

import { connect } from "react-redux";

// actions
import { getLocationData } from "./actions";

const StyledApp = styled.div`
  width: 60%;
  margin: 0 auto;

  h1 {
    text-align: center;
  }
`;

const StyledAppStateCover = styled.div`
  font-size: 30px;
  text-align: center;
  font-weight: bold;
  margin-top: 1rem;
`;

function App({ ipAddress, country, dispatch, errorMessage, isFetching }) {
  useEffect(() => {
    dispatch(getLocationData());
  }, []);

  if (isFetching) {
    return (
      <StyledAppStateCover className="app-state-screen-cover">
        Loading...
      </StyledAppStateCover>
    );
  }

  if (errorMessage !== "") {
    return (
      <StyledAppStateCover className="app-state-screen-cover">
        {errorMessage}
      </StyledAppStateCover>
    );
  }

  return (
    <StyledApp>
      <h1>
        This App Shows You All The Universities in your Country <br></br>
        Based on your IP Address
      </h1>

      <p>Your visible IP Address is: {ipAddress}</p>
      <p>Country: {country}</p>
      <DisplayTable />
    </StyledApp>
  );
}

const mapStateToProps = (state) => {
  return {
    ipAddress: state.ipAddress,
    country: state.country,
    isFetching: state.isFetching,
    errorMessage: state.error,
  };
};

export default connect(mapStateToProps)(App);
