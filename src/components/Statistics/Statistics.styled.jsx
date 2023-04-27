import styled from '@emotion/styled';
 

export const Item = styled.li`
  margin-bottom: 15px;
    &:last-child {
  margin-bottom: 0;
}
`;

export const Text = styled.p`
  font-size: 25px;
  font-weight: 600;
  text-transform: capitalize;
`;


export const Value = styled.span`
  color: var( --accent-text-color);
`;