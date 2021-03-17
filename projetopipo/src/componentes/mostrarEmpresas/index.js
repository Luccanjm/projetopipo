import React, {useCallback, useState, useEffect} from 'react';
import api from '../../services/api';
import {ContainerTable, Table, BotaoRedirecionar, LinkBotao} from './styles';


const MostrarEmpresas = () => {
    
    const [empresas, setEmpresas] = useState([]);
    const [erroMensagem, setErroMensagem] = useState('');
   

    const exibirEmpresas = useCallback(
        async() => {
            try {
                const resposta = await api.get('empresas');
               setEmpresas(resposta.data);

            } catch (error) {
                console.log("Erro na busca da API(exibirEmpresas)", error);
                setErroMensagem(error);
            }
        },[empresas]
    );


    useEffect(() => {
        exibirEmpresas();
    },[exibirEmpresas])

    return(
        <ContainerTable>
                
            <Table id="tabelaEmpresa">

                <thead>
                    <th>Nome</th>
                    <th>CNPJ</th>
                    <th>Qtd. Benefícios</th>
                    <th>#</th>
                </thead>

                <tbody>
                    {empresas.map((item) =>
                        <tr>
                            <td onClick={() =>
                                window.location.href = `/empresas/${item.id}/${item.nome}/${item.cnpj}/${item.qtdPlanos}/${item.planoDentalEmpresa}/${item.planoSaudeEmpresa}/${item.planoSaudeMentalEmpresa}`}>
                                    {item.nome}</td>

                            <td onClick={() =>
                                window.location.href = `/empresas/${item.id}/${item.nome}/${item.cnpj}/${item.qtdPlanos}/${item.planoDentalEmpresa}/${item.planoSaudeEmpresa}/${item.planoSaudeMentalEmpresa}`}>
                                    {item.cnpj}</td>

                            <td onClick={() =>
                                window.location.href = `/empresas/${item.id}/${item.nome}/${item.cnpj}/${item.qtdPlanos}/${item.planoDentalEmpresa}/${item.planoSaudeEmpresa}/${item.planoSaudeMentalEmpresa}`}>
                                    {item.qtdPlanos}</td>

                            <td onClick={() =>
                                window.location.href = `/adicionar/${item.id}/${item.nome}/${item.cnpj}/${item.qtdPlanos}/${item.planoDentalEmpresa}/${item.planoSaudeEmpresa}/${item.planoSaudeMentalEmpresa}`}>
                                    <BotaoRedirecionar><LinkBotao>Adicionar Beneficiário</LinkBotao></BotaoRedirecionar>
                            </td>
                        </tr>
                    )}
                </tbody>
            </Table>
  
        </ContainerTable>
        
    );
}

export default MostrarEmpresas;