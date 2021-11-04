import DisplayTable from "./components/Table";

import styled from "styled-components";

const StyledApp = styled.div`
  width: 60%;
  margin: 0 auto;

  h1 {
    text-align: center;
  }
`;

function App() {
  return (
    <StyledApp>
      <h1>
        This App Shows You All The Universities in your Country <br></br>
        Based on your IP Address
      </h1>
      <DisplayTable />
    </StyledApp>
  );
}

export default App;
