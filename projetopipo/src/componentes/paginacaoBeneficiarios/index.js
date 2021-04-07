import React, {useState, useEffect, useCallback} from 'react';
import api from '../../services/api';
import {Container, Table} from './styles';
import ReactPaginate from 'react-paginate';


export default function PaginacaoBeneficiarios () {
    const [data, setData] = useState([]);
    const [erroMensagem, setErroMensagem] = useState('');
    const [selectedPage, setSelectedPage] = useState('');
    const [estado, setEstado] = useState ({
        offset: 1,
        perPage: 4,
        currentPage: selectedPage
    });
    const [arrayDados, setArrayDados] = useState(JSON.parse(localStorage.getItem('@pipo:dadosEmpresa')))
        const recebendoData = useCallback( 
        async(e) => {
                try{
                    const resposta = await api.get(`beneficiarios?nomeEmpresa=${arrayDados.nome}&_limit=${4}&_page=${selectedPage +1}`)
                    setData(resposta.data);               
                    
                }catch(error){
                    console.log("Erro na busca da API(paginacaoBeneficiarios)", error);
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
                perPage:4
                });
        
            };
        

        useEffect(() => {
            recebendoData();
        },[recebendoData])
    return (
        <Container>
                <Table>
                <thead>
                        <th className="nomeClasse" >Nome</th>
                        <th>CPF</th>
                        <th className="dtClasse" >Dt.Admissão</th>
                         <th>E-mail</th> 
                        <th className="pesoClasse" >Peso(kg)</th> 
                        <th className="alturaClasse" >Altura(cm)</th> 
                        <th className="horasClasse">Horas Meditadas últimos 7 dias</th>
                        <th className="enderecoClasse">Endereço</th> 
                        </thead>
                    <tbody>
                        {data.map((item) =>
                            <tr onClick={() =>
                                (window.location.href = `/beneficiarios/${item.id}/${item.nome}`,
                                localStorage.setItem('@pipo:dadosBeneficiario', JSON.stringify({
                                    nomeBeneficiario:item.nome,
                                    nomeEmpresaBenef: item.nomeEmpresa,
                                    cpf: item.cpf,
                                    dtAdmissao: item.dtAdmissao,
                                    email: item.email,
                                    peso: item.peso,
                                    altura: item.altura,
                                    horasMed: item.horasMed,
                                    endereco: item.endereco,
                                    planoDentalNome: item.planoDentalNome,
                                    planoSaudeNome: item.planoSaudeNome,
                                    planoSaudeMentalNome:item.planoSaudeMentalNome
                                }))                                     
                            )}>
                                <td className="nomeClasse"  key={item.nome}>{item.nome}</td>
                                <td key={item.cpf}>{item.cpf}</td>
                                <td className="dtClasse" key={item.dtAdmissao}>{item.dtAdmissao}</td>
                                <td key={item.email}>{item.email}</td> 
                                <td  className="pesoClasse" key={item.peso}>{item.peso}</td> 
                                <td  className="alturaClasse" key={item.altura}>{item.altura}</td> 
                                <td className="horasClasse" key={item.horasMed}>{item.horasMed}</td> 
                                <td className="enderecoClasse" key={item.endereco}>{item.endereco}</td> 
                            </tr>
                        )}
                                                        
                                    
                    </tbody>
                </Table>
                <ReactPaginate
                    previousLabel={"Voltar"}
                    nextLabel={"Próximo"}
                    breakLabel={"..."}
                    breakClassName={"break-me"}
                    pageCount={2}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={handlePageClick}
                    containerClassName={"pagination"}
                    subContainerClassName={"pages pagination"}
                    activeClassName={"active"}
                />
                

        </Container>
    );
        
}

