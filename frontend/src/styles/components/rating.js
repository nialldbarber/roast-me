import styled from 'styled-components';

export const RatingContainer = styled.div`
  display: flex;
  justify-content: space-between;
  min-height: 100px;

  label {
    display: flex;
    justify-content: center;
    align-items: center;

    input {
      margin: 0;
      padding: 0;
    }
  }
`;
