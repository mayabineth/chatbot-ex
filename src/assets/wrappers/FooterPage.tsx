import styled from "styled-components";
const Wrapper = styled.div`
  display: grid;
  padding: 1rem;
  grid-template-columns: 50px 1fr 50px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  align-items: center;
  gap: 1rem;
  background: var(--clr-grey-2);

  .send-btn,
  .side-bar-toggle-btn {
    background: transparent;
    border-color: transparent;
    color: var(--primary-500);
    cursor: pointer;
    color: var(--clr-grey-10);
    display: flex;
    transition: var(--transition);
    &:disabled {
      cursor: default;
    }
  }

  .side-bar-toggle-btn {
    font-size: 2.5rem;
  }

  .send-btn {
    font-size: 2rem;
  }

  .input-text {
    padding: 5px;
    padding-left: 10px;
    border: transparent;
    background: var(--clr-white);
    font-size: 1rem;
    border-radius: var(--radius);
    letter-spacing: var(--spacing);
    outline: none;
  }

  .spinner {
    width: 2rem;
    height: 2rem;
    border: 2px solid rgba(0, 0, 0, 0.1);
    border-left-color: var(--clr-grey-10);
    border-radius: 50%;
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default Wrapper;
