import styled from "styled-components";

const Wrapper = styled.div<{ $isSidebarVisible: boolean }>`
  height: 100vh;
  border: 1px solid #ccc;
  border-radius: 8px;
  display: grid;
  grid-template-rows: 8% 82% 10%;
  overflow-x: hidden;
  overflow-y: hidden;

  .chat-container {
    display: grid;
    grid-template-columns: ${({ $isSidebarVisible }) =>
      $isSidebarVisible ? "3fr 7fr" : "1fr"};
    transition: var(--transition);
  }
`;

export default Wrapper;
