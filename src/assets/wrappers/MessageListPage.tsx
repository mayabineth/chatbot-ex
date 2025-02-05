import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  padding: 10px;
  border-left: 1px solid var(--clr-grey-7);

  .no-messages {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    gap: 1rem;

    img {
      width: 40%;
      display: block;
      object-fit: cover;
    }

    span {
      letter-spacing: var(--spacing);
      text-align: center;
      color: gray;
    }
  }
`;

export default Wrapper;
