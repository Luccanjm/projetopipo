import React from 'react';
import Footer from '../../componentes/footer';
import Header from '../../componentes/header';
import {BoxTitulo, ContainerGrid, Main, PlanosText, Titulo, BoxPlanos, BoxBeneficiarios } from './styles';
import {useParams} from 'react-router-dom';

const Beneficiarios = () => {
    const { id, nome, cpf, dtAdmissao, email, endereco, peso, altura, horasMed, nomeEmpresa, planoSaudeNome, planoDentalNome, planoSaudeMentalNome  } = useParams();

    function Parametros(){
        const params = useParams("/beneficiarios/:id/:nome/:cpf/:dtAdmissao/:email/:endereco/:peso/:altura/:horasMed/:nomeEmpresa/:planoSaudeNome/:planoDentalNome/:planoSaudeMentalNome")

        let { id, nome, cpf, dtAdmissao, email, endereco, peso, altura, horasMed, nomeEmpresa, planoSaudeNome, planoDentalNome, planoSaudeMentalNome  } = params;
        return <> </>
    }

    return(
        <ContainerGrid>
        <Header id="headerComponente"></Header>
        <Main>
            <BoxTitulo>
                <Titulo key={nomeEmpresa}>Ficha do Beneficiário {nome} da Empresa {nomeEmpresa}</Titulo>
            </BoxTitulo>
            <BoxPlanos>
                <PlanosText>
                    <li>Benefícios</li>
                        <li>{planoSaudeNome}</li>
                        <li>{planoDentalNome}</li>
                        <li>{planoSaudeMentalNome}</li>
                </PlanosText>
            </BoxPlanos>
            <BoxBeneficiarios>
                <ul>
                    <li>Nome</li>
                    <li>CPF</li>
                    <li>Dt.Admissão</li>
                    <li>E-mail</li>
                    <li>Endereço</li>
                    <li>Peso(kg)</li>
                    <li>Altura(cm)</li>
                    <li>Horas Meditadas últimos 7 dias</li>

                </ul>
                <ul>
                        <li>{nome}</li>
                        <li>{cpf}</li>
                        <li>{dtAdmissao}</li>
                        <li>{email}</li>
                        <li>{endereco}</li>
                        <li>{peso}</li>
                        <li>{altura}</li>
                        <li>{horasMed}</li>

                    
                </ul>
            </BoxBeneficiarios>
        </Main>
        <Footer id="footerComponente"></Footer>
        </ContainerGrid>
    );
}

export default Beneficiarios;
