import { ComponentProps } from 'react';
import styled from 'styled-components';
import { Button as AntButton } from 'antd';

const StyledButton = styled(AntButton)`
  border-radius: 4px;
  font-weight: 500;
  
  &.ant-btn-primary {
    background-color: #1677ff;
    border-color: #1677ff;

    &:hover,
    &:focus {
      background-color: #0f5ccd;
      border-color: #0f5ccd;
    }
  }
`;

type ButtonProps = Omit<ComponentProps<typeof AntButton>, 'ref'>;

export default function Button(props: ButtonProps) {
    return <StyledButton {...props} />;
}
