import React from 'react';
import {Head, BoxImg, Img} from './styles';
import {Nav} from 'react-bootstrap';
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