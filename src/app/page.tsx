'use client';

import { Button } from 'antd';
import styled from 'styled-components';

const Container = styled.div`
  height: 100dvh;
  background-color: #f0f0f0;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 8px;
  align-items: center;
`;

const Title = styled.h1`
  color: #333;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`;

const CustomButton = styled(Button)`
  border-radius: 8px;
  font-weight: 600;
  color: #fff;

  &.ant-btn-primary {
    background-color: red;
    border-color: red;

    &:hover,
    &:focus {
      background-color: #0f5ccd;
      border-color: #0f5ccd;
    }
  }
`;

export default function Home() {
    return (
        <Container>
            <Title>Тестовое приложение<br />Styled Components</Title>
            <CustomButton type="primary" onClick={() => alert('Нажата кнопка!')}>
                Нажми меня
            </CustomButton>
        </Container>
    );
}
