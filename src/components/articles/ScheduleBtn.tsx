import React from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import CustomLink from '@atoms/CustomLink';
import styled from 'styled-components';
import { PRIMARY_COLOR } from '@constants/style';

const ScheduleBtn = () => {
  return (
    <Header>
      <CustomLink href="/">
        <IoIosArrowBack color="white" />
        <span>경기일정</span>
      </CustomLink>
    </Header>
  );
};

export default ScheduleBtn;

const Header = styled('div')`
  display: flex;
  height: 72px;
  align-items: center;
  padding-left: 24px;
  font-size: 24px;
  background-color: ${PRIMARY_COLOR};
  border-radius: 0 0 0 8px;

  & span {
    margin-left: 16px;
    color: white;
  }
`;
