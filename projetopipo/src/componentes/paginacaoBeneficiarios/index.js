import React, {useState, useEffect, useCallback} from 'react';
import api from '../../services/api';
import {Container, Table} from './styles';
import ReactPaginate from 'react-paginate';


export default function PaginacaoBeneficiarios () {
    const [data, setData] = useState([]);
    const [erroMensagem, setErroMensagem] = useState('');
    const [selectedPage, setSelectedPage] = useState('');
    const [valorTotal, setValorTotal] = useState([]);
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

                    const recebendoValor = await api.get(`beneficiarios?nomeEmpresa=${arrayDados.nome}`)
                    setValorTotal(Math.ceil(recebendoValor.data.length / estado.perPage))         

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
                        {data[0] ? ((data[0].email == "--") ?  null : <th>E-mail</th>) : null }
                        {data[0] ? ((data[0].peso == "--") ?  null :<th className="pesoClasse" >Peso(kg)</th>)  : null }
                        {data[0] ? ((data[0].altura == "--") ?  null :<th className="alturaClasse" >Altura(cm)</th>) : null }
                        {data[0] ? ((data[0].horasMed == "--") ?  null :<th className="horasClasse">Horas Meditadas últimos 7 dias</th>): null }
                        {data[0] ? ((data[0].endereco == "--") ?  null :<th className="enderecoClasse">Endereço</th>) : null }
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
                                {(data[0].email == "--") ? null : <td key={item.email}>{item.email}</td> }
                                {(data[0].planoDentalNome == "--") ? null : <td  className="pesoClasse" key={item.peso}>{item.peso}</td> }
                                {(data[0].planoDentalNome == "--") ? null : <td  className="alturaClasse" key={item.altura}>{item.altura}</td> }
                                {(data[0].planoSaudeMentalNome == "--") ? null : <td className="horasClasse" key={item.horasMed}>{item.horasMed}</td> }
                                {(data[0].endereco == "--") ? null : <td className="enderecoClasse" key={item.endereco}>{item.endereco}</td> }
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
                />
                

        </Container>
    );
        
}

