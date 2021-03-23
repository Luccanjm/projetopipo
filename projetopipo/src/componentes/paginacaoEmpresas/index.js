import React, {Component} from 'react';
import api from '../../services/api';
import {Container, Table, BotaoRedirecionar, LinkBotao} from './styles';
import ReactPaginate from 'react-paginate';

class PaginacaoEmpresas extends Component {
    componentDidMount(){
        this.receivedData()
    }

    receivedData() {
        api
        .get(`empresas`)
            .then(res => {

                const data = res.data;
                const slice = data.slice(this.state.offset, this.state.offset + this.state.perPage)
                const postData = 
                <React.Fragment>
                    <Container>
                        <Table>
                            <thead>
                                <th>Nome</th>
                                <th className="cnpjClasse">CNPJ</th>
                                <th className="qtdClasse">Qtd. Benefícios</th>
                                <th>#</th>
                            </thead>
                            <tbody>
                                {slice.map((item) =>
                                    <tr>
                                        <td onClick={() =>
                                        window.location.href = `/empresas/${item.id}/${item.nome}/${item.cnpj}/${item.qtdPlanos}/${item.planoDentalEmpresa}/${item.planoSaudeEmpresa}/${item.planoSaudeMentalEmpresa}`} key={item.nome}> {item.nome}</td>
                                        <td className="cnpjClasse" onClick={() =>
                                        window.location.href = `/empresas/${item.id}/${item.nome}/${item.cnpj}/${item.qtdPlanos}/${item.planoDentalEmpresa}/${item.planoSaudeEmpresa}/${item.planoSaudeMentalEmpresa}`} key={item.cnpj}> {item.cnpj}</td>
                                        <td className="qtdClasse" onClick={() =>
                                        window.location.href = `/empresas/${item.id}/${item.nome}/${item.cnpj}/${item.qtdPlanos}/${item.planoDentalEmpresa}/${item.planoSaudeEmpresa}/${item.planoSaudeMentalEmpresa}`} key={item.qtdPlanos}> {item.qtdPlanos}</td>
                                        <td onClick={() =>
                                        window.location.href = `/adicionar/${item.id}/${item.nome}/${item.cnpj}/${item.qtdPlanos}/${item.planoDentalEmpresa}/${item.planoSaudeEmpresa}/${item.planoSaudeMentalEmpresa}`}>
                                            <BotaoRedirecionar><LinkBotao>Adicionar Beneficiário</LinkBotao></BotaoRedirecionar></td>  
                                    
                                        
                                    </tr>
                                                
                                )}
                                                    
                                
                            </tbody>
                        </Table>
                    </Container>
                </React.Fragment>

                this.setState({
                    pageCount: Math.ceil(data.length / this.state.perPage),
                   
                    postData
                })
            });
    }
    handlePageClick = (e) => {
        const selectedPage = e.selected;
        const offset = selectedPage * this.state.perPage;

        this.setState({
            currentPage: selectedPage,
            offset: offset
        }, () => {
            this.receivedData()
        });

    };
    
    constructor(props) {
        super(props);
        this.state = {
          offset: 0,
          data: [],
          perPage: 8,
          currentPage: 0
    };
    
    }



    render() {
        return (
            <Container>
                
                {this.state.postData}
                <ReactPaginate
                    previousLabel={"Voltar"}
                    nextLabel={"Próximo"}
                    breakLabel={"..."}
                    breakClassName={"break-me"}
                    pageCount={this.state.pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={this.handlePageClick}
                    containerClassName={"pagination"}
                    subContainerClassName={"pages pagination"}
                    activeClassName={"active"}/>
            

            </Container>
        );
    }
}

export default PaginacaoEmpresas;
