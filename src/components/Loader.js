import React from 'react';
import styled from 'styled-components';
import { Spinner } from '@styled-icons/icomoon/Spinner';


const Loader = ({ show }) => {
    if (!show) return null;

    return (
        <LoadingOverlay>
            <Spinner className="spinner rotate" size="50"/>
        </LoadingOverlay>
    );
};

const LoadingOverlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;


    & .spinner {
        color: #1e1e1eb5;
        animation: rotate 1.5s linear infinite;

        @keyframes rotate {
            to { transform: rotate(360deg); }
        }
    }
`;

export default Loader;