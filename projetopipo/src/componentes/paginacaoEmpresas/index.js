import React, {useState, useEffect, useCallback} from 'react';
import api from '../../services/api';
import {Container, Table, BotaoRedirecionar, LinkBotao} from './styles';
import ReactPaginate from 'react-paginate';

export default function PaginacaoEmpresas () {
    const [data, setData] = useState([]);
    const [erroMensagem, setErroMensagem] = useState('');
    const [selectedPage, setSelectedPage] = useState(0);
    const [valorTotal, setValorTotal] = useState([])
    const [estado, setEstado] = useState ({
        offset: 1,
        perPage: 8,
        currentPage: selectedPage
    });

    const recebendoData = useCallback(
        async(e) => {
            try{
                const resposta = await api.get(`empresas?_limit=${8}&_page=${selectedPage + 1}`);
                setData(resposta.data);
                setValorTotal(Math.ceil(resposta.headers['x-total-count'] / estado.perPage));
            }catch(error){
                console.log("Erro na busca da API(paginacaoEmpresas)", error);
                setErroMensagem(error);
            }
        },[estado]
    )
   
    const handlePageClick = (e) => {
        setSelectedPage(e.selected);
        const offset = selectedPage * estado.perPage;

        setEstado({
            currentPage: selectedPage,
            offset: offset,
            perPage:8
        });
    };

    useEffect(() => {
        recebendoData();
    },[recebendoData]);

    
    return (
        <Container>
            <Table>
                <thead>
                    <th>Nome</th>
                    <th className="cnpjClasse">CNPJ</th>
                    <th className="qtdClasse">Qtd. Benefícios</th>
                    <th>#</th>
                </thead>
                <tbody>
                    {data.map((item) => 
                        <tr>
                            <td onClick={() =>
                                (window.location.href = `/empresas/${item.id}/${item.nome}`,
                                localStorage.setItem('@pipo:dadosEmpresa', JSON.stringify({
                                    nome:item.nome,
                                    cnpj: item.cnpj,
                                    planoSaudeEmpresa: item.planoSaudeEmpresa,
                                    planoDentalEmpresa: item.planoDentalEmpresa,
                                    planoSaudeMentalEmpresa: item.planoSaudeMentalEmpresa,
                                    qtdPlanos: item.qtdPlanos
                                }))
                                )
                            } key={item.nome}> 
                                {item.nome}
                            </td>

                            <td className="cnpjClasse" onClick={() =>
                                (window.location.href = `/empresas/${item.id}/${item.nome}`,
                                localStorage.setItem('@pipo:dadosEmpresa', JSON.stringify({
                                    nome:item.nome,
                                    cnpj: item.cnpj,
                                    planoSaudeEmpresa: item.planoSaudeEmpresa,
                                    planoDentalEmpresa: item.planoDentalEmpresa,
                                    planoSaudeMentalEmpresa: item.planoSaudeMentalEmpresa,
                                    qtdPlanos: item.qtdPlanos
                                }))
                                )} key={item.cnpj}> 
                                    {item.cnpj}
                            </td>

                            <td className="qtdClasse" onClick={() =>
                                (window.location.href = `/empresas/${item.id}/${item.nome}`,
                                localStorage.setItem('@pipo:dadosEmpresa', JSON.stringify({
                                    nome:item.nome,
                                    cnpj: item.cnpj,
                                    planoSaudeEmpresa: item.planoSaudeEmpresa,
                                    planoDentalEmpresa: item.planoDentalEmpresa,
                                    planoSaudeMentalEmpresa: item.planoSaudeMentalEmpresa,
                                    qtdPlanos: item.qtdPlanos
                                }))
                                )} key={item.qtdPlanos}>
                                    {item.qtdPlanos}
                            </td>
                                            
                            <td onClick={() =>
                                (window.location.href = `/adicionar/${item.id}/${item.nome}`,
                                localStorage.setItem('@pipo:dadosEmpresa', JSON.stringify({
                                    nome:item.nome,
                                    cnpj: item.cnpj,
                                    planoSaudeEmpresa: item.planoSaudeEmpresa,
                                    planoDentalEmpresa: item.planoDentalEmpresa,
                                    planoSaudeMentalEmpresa: item.planoSaudeMentalEmpresa,
                                    qtdPlanos: item.qtdPlanos
                                }))
                                )}>
                                    <BotaoRedirecionar><LinkBotao>Adicionar Beneficiário</LinkBotao></BotaoRedirecionar></td>  
                                    
                                        
                        </tr>  
                    )}  
                </tbody>
            </Table>

            <ReactPaginate
                previousLabel={"Voltar"}
                nextLabel={"Próximo"}
                breakLabel={"..."}
                breakClassName={"break-me"}
                pageCount={valorTotal}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={handlePageClick}
                containerClassName={"pagination"}
                subContainerClassName={"pages pagination"}
                activeClassName={"active"}
                initialPage={0}
            />
        </Container>
    );
    
}

