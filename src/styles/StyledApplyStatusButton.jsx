/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import facepaint from 'facepaint';
import styled from '@emotion/styled';

import palette from './palette';

const mq = facepaint([
  '@media(min-width: 1024px)',
]);

const StyledApplyStatusButtonWrapper = styled.button`
  ${mq({
    fontSize: ['2.7vw', '1.5rem'],
    padding: ['0.25rem 10vw', '0.25rem 5rem'],
  })};
  height: 33px;
  font-family: 'Gamja Flower', cursive;
  display: inline-flex;
  align-items: center;
  margin: .5rem 0 .5rem 0;
  border: none;
  border-radius: 0.4rem;
  outline: none;
  line-height: 0;

  &.deadline {
    cursor: not-allowed;
    color: ${palette.gray[5]};
    background: ${palette.gray[3]};
  }

  &.apply-cancel {
    cursor: pointer;
    color: white;
    background: ${palette.orange[4]};

    &:hover {
      background: ${palette.orange[3]};
    }
  }

  &.apply-reject {
    border: 2px solid ${palette.warn[0]};
    color: ${palette.warn[1]};
    background: ${palette.gray[1]};
  }

  &.apply-complete {
    border: 2px solid #a5d8ff;
    color: #74c0fc;
    background: ${palette.gray[1]};
  }

  &.apply {
    cursor: pointer;
    color: white;
    background: ${palette.teal[5]};

    &:hover {
      background: ${palette.teal[4]};
    }
  }

  &.confirm {
  ${mq({
    fontSize: ['2.7vw', '1.5rem'],
    padding: ['0.25rem 5vw', '0.25rem 2.5rem'],
  })};
    cursor: pointer;
    color: white;
    background: #4dabf7;
    
    &:hover {
      background: #74c0fc;
    }
  }
`;

const StyledApplyStatusButton = (props) => (
  <StyledApplyStatusButtonWrapper {...props} />
);

export default StyledApplyStatusButton;
