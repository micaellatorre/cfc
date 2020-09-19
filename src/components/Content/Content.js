import React from 'react';
import { Link } from 'react-router-dom';
import Slider from '../ImageSlider/Slider';
import images from '../../images/images';
import facebook from '../../assets/facebook.svg';
import youtube from '../../assets/youtube.svg';
import church from '../../assets/church.svg';
import cfc from '../../assets/cfc.svg';
import {
    InfoRow,
    TextColumnWrapper,
    LogoContainer,
    Logo,
    Icon,
    CardPedidos,
    CardTitle,
    CardDescription,
    Button,
    FooterWrapper,
    FooterTitle,
    SocialIcons,
    SocialIconLink,
    ImgColumnWrapper,

} from './Content.elements';

function Content({
    buttonLabel,
    cardDescription,
}) {
    return (
        <>
            <InfoRow>
                <TextColumnWrapper>
                    <LogoContainer><Logo href='/' target='' aria-label='Centro Familiar Cristiano'><Icon src={cfc}/></Logo>Centro Familiar Cristiano</LogoContainer>
                    <CardPedidos>
                            <CardTitle>Pedidos de Oracion</CardTitle>
                            <CardDescription>{cardDescription}</CardDescription>
                            <Link><Button>{buttonLabel}</Button></Link>
                    </CardPedidos>
                    <FooterWrapper>
                        <FooterTitle>Redes Sociales</FooterTitle>
                        <SocialIcons>
                            <SocialIconLink
                                href={'//www.facebook.com/cfcmadryn'}
                                rel='noopener noreferrer'
                                target='_blank'
                                aria-label='Facebook'><img src={facebook}/></SocialIconLink>
                            <SocialIconLink 
                                href={'//www.youtube.com/channel/UClXrpVoy4vUuPm5AkdPZFuQ'}
                                rel='noopener noreferrer'
                                target='_blank'
                                aria-label='Youtube'
                            ><img src={youtube}/></SocialIconLink>
                            <SocialIconLink
                                href={'//www.youtube.com/channel/UClXrpVoy4vUuPm5AkdPZFuQ'}
                                rel='noopener noreferrer'
                                target='_blank'
                                aria-label='Centro Familiar Cristiano'><img src={church}/></SocialIconLink>
                        </SocialIcons>
                    </FooterWrapper>
                </TextColumnWrapper>
                <ImgColumnWrapper>
                    <Slider slides={images} />
                </ImgColumnWrapper>
            </InfoRow>
        </>
    )
}


export default Content
