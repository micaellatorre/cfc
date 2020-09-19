import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const InfoRow = styled.div`
    display: grid;
    grid-template-columns: 0.5fr 1.5fr;
    grid-template-rows: 1fr;
    gap: 30px;
    grid-template-areas:
        "Left Right";
    width: 100%;
    height: 100vh;
    margin: 0;
    padding: 30px;
    position: absolute;
    top: 0%; left: 0;
`;

export const TextColumnWrapper = styled.div`
    grid-area: Left;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 0.2fr auto 0.7fr;
    gap: 25px;
    grid-template-areas:
        "Logo"
        "Card"
        "Footer";
    padding: 0;
    margin: 0;
`;

export const LogoContainer = styled.div`
    grid-area: Logo;
    display: flex;
    padding: 0;
    min-width: 100%;
    align-items: center;
    font-size: 2.2vw;
    font-weight: bold;
    color: #252525; 
`

export const Logo = styled(Link)`
    color: #252525;
    cursor: pointer;
    text-decoration: none;
    margin-right: 2vw;
`;

export const Icon = styled.img`
    width: 4.5vw;
    align-self: center;
`;

export const CardPedidos = styled.div`
    grid-area: Card;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 0.4fr 2.1fr 0.5fr;
    grid-template-areas:
        "Title"
        "Description"
        "Button";
    background: rgb(21,108,255);
    background: linear-gradient(149deg, rgba(21,108,255,1) 0%, rgba(92,171,231,1) 100%);
    box-shadow: 0 6px 20px rgba(56, 125, 255, 0.2);
    text-decoration: none;
    border-radius: 25px;
    padding: 30px 25px 25px;
    margin: 0;
    color: #fff;
    max-height: 100%;
    gap: 15px;

    &:hover {
        transform: scale(1.005);
        transition: all 0.3s ease-out;
        background: rgb(92,171,231);
        background: linear-gradient(149deg, rgba(92,171,231,1) 0%, rgba(21,108,255,1) 100%);
    }

    @media screen and (max-width: 960px) {
        width: 100%;
        border-radius: 10px;
        
        &:hover {
            transform: none;
        }
    }
`;

export const CardTitle = styled.h2`
    grid-area: Title;
    font-size: 2vw;
    text-align: center;
    margin: 0;
    font-weight: bold;
`;

export const CardDescription = styled.p`
    grid-area: Description;
    margin: 0;
    font-size: 1.5vw;
    font-weight: bold;
    line-height: 7vh;
    text-align: center;
    justify-self: center;
`;

export const Button = styled.button`
    grid-area: Button;
    font-size: 2vw;
    font-weight: bold;
    width: 100%;
    height: 100%;
    min-height: 50px;
    border-radius: 15px;
    background: #ffffff;
    color: #158DFF;
    outline: none;
    border: none;
    cursor: pointer;
    padding: 0;

    @media screen and (max-width: 960px) {
        width: 100%;
    }
`;

export const FooterWrapper = styled.div`
    grid-area: Footer;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 0.4fr 1.6fr;
    grid-template-areas:
        "FooterTitle"
        "Links";
    gap: 20px;
    margin: 0;
    color: #252525;
`;

export const FooterTitle = styled.h2`
    grid-area: FooterTitle;
    font-size: 2vw;
    padding: 0;
    text-align: center;
    margin: 0;
`;

export const SocialIcons = styled.div`
    grid-area: Links;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    width: 100%;
`;

export const SocialIconLink = styled.a`
    color: #252525;
    height: 7vh;
    margin: 0;
    padding: 0;
    display: flex;
    justify-self: end;
`;

export const ImgColumnWrapper = styled.div`
    grid-area: Right;
    justify-content: flex-end;
    height: 90vh;
    width: 65vw;
`;