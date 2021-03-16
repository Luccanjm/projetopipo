import React, {useState, useCallback, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import Header from '../../componentes/header';
import Footer from '../../componentes/footer';
import api from '../../services/api';
import {
        ContainerGrid,
        Main,
        BoxPlano,
        BoxBeneficios,
        BoxBeneficiarios, 
        TituloBeneficiarios, 
        TituloBeneficios, 
        TextoBeneficios, 
        Table, 
        TableBeneficiarios
    } from './styles';


const Empresas = () => {

    const [beneficiarios, setBeneficiarios] = useState([]);
    const [erroMensagem, setErroMensagem] = useState('');



    const exibirBeneficiarios = useCallback(
        async() => {
            try {
                const resposta = await api.get(`empresas/0/beneficiarios?nomeEmpresa=${nome}`);
               setBeneficiarios(resposta.data);
            //    console.log(beneficiarios);
 
            } catch (error) {
                console.log("Erro na busca da API(exibirBeneficiarios)", error);
                setErroMensagem(error);
            }
        },[beneficiarios]
    );
    useEffect(() => {
        exibirBeneficiarios();
    },[exibirBeneficiarios])



    const { id, nome, cnpj, qtdPlanos, qtdBenef, planoDentalEmpresa,planoSaudeEmpresa, planoSaudeMentalEmpresa  } = useParams();

    function Parametros(){
        const params = useParams("/empresas/:id/:nome/:cnpj/:qtdPlanos/:qtdBenef/:planoDentalEmpresa/:planoSaudeEmpresa/:planoSaudeMentalEmpresa/")

        let { id, nome, cnpj, qtdPlanos, qtdBenef, planoDentalEmpresa,planoSaudeEmpresa, planoSaudeMentalEmpresa } = params;
        return <> </>
    }


   
    return(
        <ContainerGrid>
        <Header id="headerComponente"></Header>
        <Main>
            <BoxPlano>
                <Table>
                    <thead>
                        <th>Nome</th>
                        <th>CNPJ</th>
                        <th>Qtd. Benefícios</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{nome}</td>
                            <td>{cnpj}</td>
                            <td>{qtdPlanos}</td>
                        </tr>
                    </tbody>
                </Table>
              
            </BoxPlano>
            <BoxBeneficios>
                <TituloBeneficios>Benefícios</TituloBeneficios>
                <TextoBeneficios>{planoSaudeEmpresa}</TextoBeneficios>
                <TextoBeneficios>{planoDentalEmpresa}</TextoBeneficios>
                <TextoBeneficios>{planoSaudeMentalEmpresa}</TextoBeneficios>
                
            </BoxBeneficios>


            <BoxBeneficiarios>
                <TituloBeneficiarios>Beneficiários</TituloBeneficiarios>
                <TableBeneficiarios>

                    <thead>
                        <th>Nome</th>
                        <th>CPF</th>
                        <th>Dt.Admissão</th>
                        <th>E-mail</th>
                        <th>Endereço</th>
                        <th>Peso(kg)</th>
                        <th>Altura(cm)</th>
                        <th>Horas Meditadas últimos 7 dias</th>
                    </thead>

                    <tbody>
                        {beneficiarios.map((item) =>
                            <tr>
                                <td>{item.nome}</td>
                                <td>{item.cpf}</td>
                                <td>{item.dtAdmissao}</td>
                                <td>{item.email}</td>
                                <td>{item.endereco}</td>
                                <td>{item.peso}</td>
                                <td>{item.altura}</td>
                                <td>{item.horasMed}</td>
                            </tr>
                        )}
                    </tbody>

                </TableBeneficiarios>
              
            </BoxBeneficiarios>
        </Main>
        <Footer id="footerComponente"></Footer>
        </ContainerGrid>
    );
}

export default Empresas;
