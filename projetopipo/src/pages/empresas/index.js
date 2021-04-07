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
        Table
    } from './styles';
import PaginacaoBeneficiarios from '../../componentes/paginacaoBeneficiarios';


const Empresas = () => {

    const [beneficiarios, setBeneficiarios] = useState([]);
    const [erroMensagem, setErroMensagem] = useState('');
    const [arrayDados, setArrayDados] = useState(JSON.parse(localStorage.getItem('@pipo:dadosEmpresa')))
    const [dadosEmpresa,setDadosEmpresa] = useState({
        nome: arrayDados.nome,
        cnpj: arrayDados.cnpj,
        planoSaudeEmpresa: arrayDados.planoSaudeEmpresa,
        planoDentalEmpresa: arrayDados.planoDentalEmpresa,
        planoSaudeMentalEmpresa: arrayDados.planoSaudeMentalEmpresa,
        qtdPlanos: arrayDados.qtdPlanos
    })
    const { id, nome  } = useParams();

    function Parametros(){
        const params = useParams("/empresas/:id/:nome")

        let { id, nome } = params;
        return <> </>
    }
    const exibirBeneficiarios = useCallback(
        async() => {
            try {
                const resposta = await api.get(`empresas/0/beneficiarios?nomeEmpresa=${dadosEmpresa.nome}`);
               setBeneficiarios(resposta.data);
            //    console.log(beneficiarios);
 
            } catch (error) {
                console.log("Erro na busca da API(exibirBeneficiarios)", error);
                setErroMensagem(error);
            }
        },[]
    );
    useEffect(() => {
        exibirBeneficiarios();
    },[exibirBeneficiarios])

   
    return(
        <ContainerGrid>
        <Header id="headerComponente"></Header>
        <Main>
            <BoxPlano>
                <Table>
                    <thead>
                        <th>Nome</th>
                        <th>CNPJ</th>
                        <th className="qtdBenefClasse">Qtd. Benefícios</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{dadosEmpresa.nome}</td>
                            <td>{dadosEmpresa.cnpj}</td>
                            <td className="qtdBenefClasse">{dadosEmpresa.qtdPlanos}</td>
                        </tr>
                    </tbody>
                </Table> 
              
            </BoxPlano>
             <BoxBeneficios>
                <TituloBeneficios>Benefícios</TituloBeneficios>
                <TextoBeneficios>{dadosEmpresa.planoSaudeEmpresa}</TextoBeneficios>
                <TextoBeneficios>{dadosEmpresa.planoDentalEmpresa}</TextoBeneficios>
                <TextoBeneficios>{dadosEmpresa.planoSaudeMentalEmpresa}</TextoBeneficios>
                
            </BoxBeneficios> 


            <BoxBeneficiarios>
                <TituloBeneficiarios>Beneficiários</TituloBeneficiarios>

              <PaginacaoBeneficiarios></PaginacaoBeneficiarios>
            </BoxBeneficiarios>
        </Main>
        <Footer id="footerComponente"></Footer>
        </ContainerGrid>
    );
}

export default Empresas;
