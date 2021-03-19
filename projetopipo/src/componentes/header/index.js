import React from 'react';
import {Head, BoxImg, Img, Nav} from './styles';
import logoPipo from '../../assets/piposaude.png';

const Header = () => {

    return(
        <Head>
            <Nav id="navGeral">
                <BoxImg>
                    <a href="/dashboard"><Img src={logoPipo}></Img></a>
                </BoxImg>
           
            </Nav>
        </Head>
    )
}
export default Header;