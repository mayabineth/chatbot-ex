import styled from "styled-components";

const Wrapper = styled.div`
  background-color: var(--clr-grey-10);
  padding: 1rem;
  position: relative;
  transition: all 0.3s linear;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  overflow-y: auto;
  letter-spacing: var(--spacing);

  .title {
    text-align: center;
  }

  .close-btn {
    font-size: 1.2rem;
    background: transparent;
    border-color: transparent;
    color: var(--primary-500);
    cursor: pointer;
    color: var(--red-dark);
    position: fixed;
    right: 1rem;
    position: absolute;
    transition: var(--transition);
  }

  .msgs {
    display: grid;
    gap: 0.5rem;
    border-bottom: 1px solid var(--clr-grey-5);
    padding: 1rem;

    .msg-details {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 1rem;
      
      .btns {
        display: flex;
        gap: 0.2rem;

        .btn {
          letter-spacing: var(--spacing);
          display: inline-block;
          border-radius: var(--radius);
          text-transform: capitalize;
          color: var(--clr-white);
          border-color: transparent;
          cursor: pointer;
          padding: 0.1rem;
        }

        .delete-btn {
          background: var(--clr-red-light);
        }

        .resend-btn {
          background: var(--clr-primary-5);
        }
      }

      .date-time {
        color: var(--clr-grey-5);
        font-size: 0.8rem;
      }
    }
  }
`;

export default Wrapper;
