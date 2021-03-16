import React from 'react';
import {ContainerGrid, Main, BoxTitulo, Titulo } from './styles';
import Header from '../../componentes/header';
import Footer from '../../componentes/footer';
import MostrarEmpresas from '../../componentes/mostrarEmpresas';

const Dashboard = () => {


    return(
        <ContainerGrid>
            <Header id="headerComponente"></Header>
            
            <Main>
                <BoxTitulo>
                    <Titulo>Empresas</Titulo>
                </BoxTitulo>

                <MostrarEmpresas id="mostrarEmpresasComponente"></MostrarEmpresas>
            </Main>

            <Footer id="footerComponente"></Footer>
        </ContainerGrid>
    );
}

export default Dashboard;
