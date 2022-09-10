import styled from 'styled-components';
import { Button } from 'antd';
import { ButtonVariant } from '../../shared/utils';
import { buttonColors } from './utils';

const { green, lightGreen, lightBlue, blue } = buttonColors;

export const SaveButton = styled(Button)`
    border: none;
    border-radius: 10px;
    font-weight: bold;
    width: 50%;
    ${props => {
        if (props.className === ButtonVariant.GREEN)
            return `background: ${green}; background-color: ${green}; &:hover {background-color: ${lightGreen}}  &:focus {background-color: ${green}};`;
        else if (props.className === ButtonVariant.BLUE)
            return `background: ${blue}; background-color: ${blue} &:hover {background-color: ${lightBlue}} &:focus {background-color: ${blue}};`;
    }};
`;
