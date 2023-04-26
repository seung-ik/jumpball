import React from 'react';
import styled from 'styled-components';

interface Props {
  title: string;
  text: string;
}

const InfoText: React.FC<Props> = ({ title, text }) => {
  return (
    <Row>
      <span>{title} : </span>
      <span className="right">{text}</span>
    </Row>
  );
};

export default InfoText;

const Row = styled('div')`
  display: flex;
  justify-content: space-between;
`;
