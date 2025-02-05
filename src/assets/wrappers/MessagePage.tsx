import styled from "styled-components";
import { Sender } from "../../context/ChatContext.tsx";

export const Wrapper = styled.div<{ $sender: string }>`
  margin: 5px;
  display: flex;
  gap: 0.5rem;
  align-items: center;
  flex-direction: ${({ $sender }) =>
    $sender === Sender.User ? "row-reverse" : "row"};

  .msg-icon {
    width: 2rem;
    height: 2rem;
    display: grid;
    place-items: center;
    border-radius: 50%;
    background: ${({ $sender }) =>
      $sender === Sender.User ? "hsl(210, 22%, 49%)" : "hsl(210, 36%, 96%)"};
    color: ${({ $sender }) => ($sender === Sender.User ? "white" : "black")};
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
  
  .msg-text {
    letter-spacing: var(--spacing);
    border-radius: 5px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    padding: 8px;
    background: ${({ $sender }) =>
      $sender === Sender.User ? "hsl(210, 22%, 49%)" : "hsl(210, 36%, 96%)"};
    color: ${({ $sender }) => ($sender === Sender.User ? "white" : "black")};
  }
`;
