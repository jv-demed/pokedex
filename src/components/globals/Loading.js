import styled from 'styled-components';

export const Loading = styled.div`
    animation: rotate 0.4s linear infinite;
    border-top: 1px solid gray;
    border-right: 1px solid black;
    border-bottom: 1px solid black;
    border-radius: 100%;
    height: ${props => props.size};
    width: ${props => props.size};
    @keyframes rotate{
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`

export default Loading;