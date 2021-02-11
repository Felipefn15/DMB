import styled from 'styled-components';

export const AboutWrapper = styled.div``;

export const ContentWrapper = styled.main`
    position: relative;
    min-height: 100vh;
    width: 100vw;
    height: auto;
    background: rgb(255, 255, 255);
    z-index: 1;
    @media (max-width: 768px) {
        padding-top: 0px;
        padding-bottom: 2rem;
    }
`;

export const Content = styled.article`
    position: relative;
    height: auto;
    width: 77vw;
    @media (max-width: 768px) {
        position: relative;
        width: 100%;
        display: flex;
        flex-direction: column;
    }
`;

export const Information = styled.div``;

export const Text = styled.p`
    font-size: 3.5vw;
    line-height: 3.5vw;
    @media only screen and (max-width: 768px) {
        order: 2;
        font-size: 7.5vw;
        line-height: 7.8vw;
    }
`;

export const ShopDiv = styled.div`
    display: flex;
    align-content: center;
    div {
        position: relative;
        display: block;
        width: 100%;
        pointer-events: none;
        overflow: hidden;
        z-index: 0;
        background: rgb(255, 255, 255);
        &::before {
            content: '';
            position: absolute;
            z-index: 1;
            top: 0px;
            left: 0px;
            pointer-events: none;
            background-image: linear-gradient(
                to left,
                rgba(255, 255, 255, 0),
                rgb(255, 255, 255) 90%
            );
            height: 100%;
            width: 4rem;
        }
        &::after {
            content: '';
            position: absolute;
            z-index: 1;
            top: 0px;
            right: 0px;
            pointer-events: none;
            background-image: linear-gradient(
                to right,
                rgba(255, 255, 255, 0),
                rgb(255, 255, 255) 90%
            );
            height: 100%;
            width: 4rem;
        }
    }
    p {
        display: inline-block;
        white-space: nowrap;
        margin-top: 10px;
        color: rgb(255, 0, 0);
        will-change: transform;
        animation: 6s linear 0s infinite normal none running;
    }
`;

export const Button = styled.button`
    position: relative;
    height: 2.25rem;
    padding: 0.25rem 10vw;
    border-radius: 25px;
    border: 2px solid rgb(0, 0, 0);
    background: rgb(0, 0, 0);
    display: block;
    font-size: 1.75rem;
    line-height: 1rem;
    text-transform: uppercase;
    color: rgb(255, 255, 255);
    cursor: pointer;
    filter: drop-shadow(rgba(0, 0, 0, 0.2) 2px 3px 6px);
    transition: all 0.2s ease-out 0s;
    z-index: 2;
    &:hover,
    &:focus,
    &:active {
        background: rgb(255, 255, 255);
        color: rgb(0, 0, 0);
    }
    @media only screen and (max-width: 768px) {
        margin: 1rem 0px;
    }
`;

export const RightImage = styled.div`
    position: fixed;
    top: 0px;
    right: 0px;
    margin-top: 1rem;
    margin-right: 1rem;
    z-index: 3;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    p {
        margin-top: 1.3vw;
        text-align: right;
        font-size: 4vh;
    }
    img {
        position: relative;
        width: 16.66vw;
        height: calc(24.4902vw);
        object-fit: cover;
    }
    width: 20vw;
`;

export const Footer = styled.div`
    position: sticky;
    bottom: 0px;
    width: 100%;
    min-height: 127px;
    padding: 24px 35px 24px 19px;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    justify-content: space-between;
    background: rgb(56, 56, 56);
    color: rgb(255, 255, 255);
    box-shadow: rgb(0 0 0 / 52%) 0px 4px 16px inset;
    z-index: 0;
    @media only screen and (max-width: 768px) {
        flex-direction: column;
        align-items: flex-start;
        padding-right: 0px;
        padding-left: 0px;
    }
`;

export const Form = styled.form`
    input {
        height: 34px;
        width: 220px;
        padding: 4px 8px;
        border: 2px solid rgb(170, 170, 170);
        font-size: 0.875rem;
        color: rgb(255, 255, 255);
        background: transparent;
    }
    button {
        height: 34px;
        padding: 4px 24px;
        margin-left: 24px;
        border: 2px solid rgb(255, 255, 255);
        border-radius: 17px;
        font-size: 14px;
        color: rgb(0, 0, 0);
        background: rgb(255, 255, 255);
        cursor: pointer;
        transition: all 0.4s ease-out 0s;
        &:disabled {
            background: rgb(170, 170, 170);
            border-color: rgb(170, 170, 170);
        }
        @media only screen and (max-width: 768px) {
            margin-top: 16px;
            margin-left: 0px;
        }
    }
    @media only screen and (max-width: 768px) {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin-left: 24px;
    }
`;

export const Links = styled.div`
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    p {
        font-size: 14px;
        line-height: 21px;
    }
    div {
        display: flex;
    }
    a {
        font-size: 14px;
        line-height: 22px;
        text-decoration: none;
        color: rgb(255, 255, 255);
    }
    @media only screen and (max-width: 768px) {
        flex-direction: column;
        align-items: flex-start;
        margin-left: 24px;
        margin-top: 32px;
    }
`;

export const LinkOne = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 5vw;
`;

export const LinkTwo = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 5vw;
`;

export const TopImage = styled.div`
    display: flex;
    position: relative;
    height: auto;
    align-items: flex-start;
    -webkit-box-pack: justify;
    justify-content: space-between;
    margin: 0px;
    img {
        width: 48vw;
        height: calc(70.56vw);
        object-fit: cover;
    }
`;
