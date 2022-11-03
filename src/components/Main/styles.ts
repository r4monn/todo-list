import styled from "styled-components";

export const NewTaskContainer = styled.div`
  position: absolute;
  width: 736px;
  height: 54px;
  left: calc(50% - 736px/2);
  top: 110px;

  margin-left: -20px;

  form {
    display: flex;
    gap: 8px;
  }

  form input {
    background: #333333;
    border-radius: 8px;
    border: 1px solid #0D0D0D;
    font-size: 1.1rem;

    width: 638px;
    height: 49px;
    padding: 0 20px
  }

  form button {
    background: #1E6F9F;
    padding: 16px;
    border-radius: 8px;
    border: none;
    color: white;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    font-size: 0.9rem;
    font-weight: bold;

    width: 90px;
    height: 52px;
  }

  form button:not(:disabled):hover {
    filter: brightness(1.1);
  }

  form button:disabled {
    filter: brightness(0.5);
    cursor: not-allowed;
  }
`;

export const MainContainer = styled.main`
  background: #1A1A1A;
  color: #F2F2F2;
  padding: 40px 400px;
  height: calc(100vh - 140px);

  .tasks-title {
    margin-top: 40px;
    justify-content: space-between;
  }

  .tasks {
    height: 90%;
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
  }

  .tasks::-webkit-scrollbar {
    background-color: transparent;
    height: 6px;
    width: 6px;
  }

  .tasks::-webkit-scrollbar-thumb {
    background-color: #808080;
  }

  .task {
    min-height: 50px;
    background: #262626;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 40px;
    margin-top: 20px;

    border: 1px solid #333333;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.06);
    border-radius: 8px;
  }

  .task p {
    color: #F2F2F2;
  }

  .task button {
    background: transparent;
    border: none;
    cursor: pointer;
  }

  .task button:hover {
    color: rgba(255, 103, 103, 0.851);
  }

  .task .checked {
    text-decoration: line-through;
    color: #808080
  }

  .task input[type='checkbox'] {
    display: none;
  }

  .task input:checked+label::after {
    background-color: #8284FA;
    border-color: #8284FA;
    background-position: center center;
    background-repeat: no-repeat;
    background-position: center center;
    transition: .1s ease-in-out background-color;
    background-image: url("data:image/svg+xml,%3Csvg width='10'   height='7' viewBox='0 0 10 7' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8.43059 0.342154L4.09865 4.67409L1.61618 2.19162L0.780273 3.02753L4.09865 6.3459L9.26649 1.17806L8.43059 0.342154Z' fill='%23F2F2F2'/%3E%3C/svg%3E ");
  }

  div {
    display: flex;
  }

  div div {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  div div:nth-child(1) h3 {
    color: #4EA8DE;
    font-size: 1rem;
  }

  div div:nth-child(2) h3 {
    color: #8284FA;
    font-size: 1rem;
  }

  div div .count {
    font-size: 0.6rem;
    background: #333333;
    color: white;
    padding: 5px;
    border-radius: 40%;
    font-weight: bold;
  }
`;