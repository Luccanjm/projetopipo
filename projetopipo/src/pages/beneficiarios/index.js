import React, {useState} from 'react';
import Footer from '../../componentes/footer';
import Header from '../../componentes/header';
import {BoxTitulo, ContainerGrid, Main, PlanosText, Titulo, BoxPlanos, BoxBeneficiarios } from './styles';
import {useParams} from 'react-router-dom';

const Beneficiarios = () => {
    const [arrayDadosBeneficiario, setArrayDadosBeneficiario] = useState(JSON.parse(localStorage.getItem('@pipo:dadosBeneficiario')));
    const [dadosBeneficiarios ,setDadosBeneficiarios] = useState({
        nome: arrayDadosBeneficiario.nomeBeneficiario,
        nomeEmpresa: arrayDadosBeneficiario.nomeEmpresaBenef,
        cpf: arrayDadosBeneficiario.cpf,
        dtAdmissao: arrayDadosBeneficiario.dtAdmissao,
        email: arrayDadosBeneficiario.email,
        peso: arrayDadosBeneficiario.peso,
        altura: arrayDadosBeneficiario.altura,
        horasMed: arrayDadosBeneficiario.horasMed,
        endereco: arrayDadosBeneficiario.endereco,
        planoDentalNome: arrayDadosBeneficiario.planoDentalNome,
        planoSaudeNome: arrayDadosBeneficiario.planoSaudeNome,
        planoSaudeMentalNome: arrayDadosBeneficiario.planoSaudeMentalNome
    })
    
    const { id, nome  } = useParams();

    function Parametros(){
        const params = useParams("/beneficiarios/:id/:nome")

        let { id, nome } = params;
        return <> </>
    }
    return(
        <ContainerGrid>
        <Header id="headerComponente"></Header>
        <Main>
            <BoxTitulo>
                <Titulo key={dadosBeneficiarios.nomeEmpresa}>Ficha do Beneficiário {nome} da Empresa {dadosBeneficiarios.nomeEmpresa}</Titulo>
            </BoxTitulo>
            <BoxPlanos>
                <PlanosText>
                    <li>Benefícios</li>
                        <li>{dadosBeneficiarios.planoSaudeNome}</li>
                        <li>{dadosBeneficiarios.planoDentalNome}</li>
                        <li>{dadosBeneficiarios.planoSaudeMentalNome}</li>
                </PlanosText>
            </BoxPlanos>
            <BoxBeneficiarios>
                <ul>
                    <li>Nome</li>
                    <li>CPF</li>
                    <li>Dt.Admissão</li>
                    <li>E-mail</li>
                    <li className="enderecoClasse">Endereço</li>
                    <li>Peso(kg)</li>
                    <li>Altura(cm)</li>
                    <li className="horasClasse" >Horas Meditadas últimos 7 dias</li>

                </ul>
                <ul>
                        <li>{nome}</li>
                        <li>{dadosBeneficiarios.cpf}</li>
                        <li>{dadosBeneficiarios.dtAdmissao}</li>
                        <li>{dadosBeneficiarios.email}</li>
                        <li className="enderecoClasse">{dadosBeneficiarios.endereco}</li>
                        <li>{dadosBeneficiarios.peso}</li>
                        <li>{dadosBeneficiarios.altura}</li>
                        <li className="horasClasse">{dadosBeneficiarios.horasMed}</li>

                    
                </ul>
            </BoxBeneficiarios>
        </Main>
        <Footer id="footerComponente"></Footer>
        </ContainerGrid>
    );
}

export default Beneficiarios;
