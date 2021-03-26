import React, {Component, Fragment} from 'react';
import api from '../../services/api';
import {Container, Table} from './styles';
import Header from '../header';
import Footer from '../footer';
import ReactPaginate from 'react-paginate';


class PaginacaoBeneficiarios extends Component {
    componentDidMount(){
        this.receivedData()
    }

 
    receivedData() {
        api
        .get(`beneficiarios?nomeEmpresa=${this.props.nome}`)
            .then(res => {
                const data = res.data;
                const slice = data.slice(this.state.offset, this.state.offset + this.state.perPage)
                const postData = 
                <React.Fragment>
                    <Container>
                        <Table>
                            <thead>
                            <th className="nomeClasse" >Nome</th>
                            <th>CPF</th>
                            <th className="dtClasse" >Dt.Admissão</th>
                            {(data[0].email == "--") ?  null : <th>E-mail</th> }
                            {(data[0].planoDentalNome == "--") ? null : <th className="pesoClasse" >Peso(kg)</th> }
                            {(data[0].planoDentalNome == "--") ? null : <th className="alturaClasse" >Altura(cm)</th> }
                            {(data[0].planoSaudeMentalNome == "--") ? null : <th className="horasClasse">Horas Meditadas últimos 7 dias</th>}
                            {(data[0].endereco == "--") ? null : <th className="enderecoClasse">Endereço</th> }
                
                            </thead>
                            <tbody>
                                {slice.map((item) =>
                                    <tr onClick={() =>
                                        window.location.href = `/beneficiarios/${item.id}/${item.nome}/${item.cpf}/${item.dtAdmissao}/${item.email}/${item.endereco}/${item.peso}/${item.altura}/${item.horasMed}/${item.nomeEmpresa}/${item.planoDentalNome}/${item.planoSaudeNome}/${item.planoSaudeMentalNome}`}>
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
          perPage: 4,
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

export default PaginacaoBeneficiarios;
