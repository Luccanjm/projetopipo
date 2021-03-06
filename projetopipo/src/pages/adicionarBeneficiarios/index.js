import React, {
    useCallback,
    useState,
    useEffect
} from 'react';
import api from '../../services/api';
import Header from '../../componentes/header';
import Footer from '../../componentes/footer';
import swal from 'sweetalert';
import {useParams} from 'react-router-dom';
import {
    ContainerGrid,
    Main,
    Box, 
    Formulario, 
    Etiqueta, 
    Input,
    BotaoSubmit, 
    TituloBox,
    BoxForm, 
    BoxCheck, 
    TituloCheck,
    BoxInput
} from './styles';

const AdicionarBeneficiarios = () => {
    const { id, nome  } = useParams();

    const [dadosPlano, setDadosPlano] = useState([]);
    const [erroMensagem, setErroMensagem] = useState('');

    const [emailTrue, setEmailTrue] = useState('');
    const [enderecoTrue, setEnderecoTrue] = useState('');

    const [isCheckedSaude, setCheckedSaude] = useState(false);
    const [isCheckedDental, setCheckedDental] = useState(false);
    const [isCheckedSaudeMental, setCheckedSaudeMental] = useState(false);
    
    const [arrayDados, setArrayDados] = useState(JSON.parse(localStorage.getItem('@pipo:dadosEmpresa')))
    const [dadosEmpresa,setDadosEmpresa] = useState({
        nome: arrayDados.nome,
        cnpj: arrayDados.cnpj,
        planoSaudeEmpresa: arrayDados.planoSaudeEmpresa,
        planoDentalEmpresa: arrayDados.planoDentalEmpresa,
        planoSaudeMentalEmpresa: arrayDados.planoSaudeMentalEmpresa,
        qtdPlanos: arrayDados.qtdPlanos
    })
    const [formData, setFormData] = useState({
        nome: "--",
        cpf: "--",
        dtAdmissao: "--",
        email: "--",
        endereco: "--",
        peso: "--",
        altura: "--",
        horasMed: "--",
        nomeEmpresa: nome,
        planoDentalNome: "--",
        planoSaudeMentalNome: "--",
        planoSaudeNome: "--"
    });

// --------------------------------------------------------------------------------------------------------------------------------------------------
    
    const buscarDadosPlanoSaude = useCallback(
        async() => {
            try {
                const resposta = await api.get(`planoSaude?nomePlano=${dadosEmpresa.planoSaudeEmpresa}`);
                setDadosPlano(resposta.data);
                setEmailTrue(dadosPlano.map(item => item.emailIsTrue));
                setEnderecoTrue(dadosPlano.map(item => item.enderecoIsTrue));
            } catch (error) {
                console.log("Erro na busca da API(buscarDadosPlanoSaude)", error);
                setErroMensagem(error);
            }
        },[formData]
    );
    useEffect(() => {
        buscarDadosPlanoSaude();
    },[buscarDadosPlanoSaude])

    const adicionarBeneficiario = useCallback(

        async(e) => {
            e.preventDefault();
            const parametros = {
                nome: formData.nome,
                cpf: formData.cpf,
                dtAdmissao: formData.dtAdmissao,
                email: formData.email,
                endereco: formData.endereco,
                peso: formData.peso,
                altura: formData.altura,
                horasMed: formData.horasMed,
                nomeEmpresa: formData.nomeEmpresa,
                planoDentalNome: formData.planoDentalNome,
                planoSaudeMentalNome: formData.planoSaudeMentalNome,
                planoSaudeNome: formData.planoSaudeNome
                }
                        
                if((isCheckedDental || isCheckedSaude || isCheckedSaudeMental) && (formData.cpf == "--" || formData.cpf == "")){
                    swal("Aten????o", "Campo CPF ?? requerido, por favor preencha o campo para que possa adicionar o benefici??rio.", "info");
                }else if(isCheckedSaude && emailTrue == "aparece" && (formData.email == "--" || formData.email == "")){
                    swal("Aten????o", "Campo email ?? requerido, por favor preencha o campo para que possa adicionar o benefici??rio.", "info");
                }else if(isCheckedSaude && enderecoTrue == "aparece" && (formData.endereco == "--" || formData.endereco == "")){
                    swal("Aten????o", "Campo endere??o ?? requerido, por favor preencha o campo para que possa adicionar o benefici??rio.", "info");
                }else if((isCheckedSaude || isCheckedDental) && (formData.nome == "--" || formData.nome == "")){
                    swal("Aten????o", "Campo nome ?? requerido, por favor preencha o campo para que possa adicionar o benefici??rio.", "info");
                }else if(isCheckedDental && (formData.peso == "--" || formData.peso == "")){
                    swal("Aten????o", "Campo peso ?? requerido, por favor preencha o campo para que possa adicionar o benefici??rio.", "info");
                }else if(isCheckedDental && (formData.altura == "--" || formData.altura == "")){
                    swal("Aten????o", "Campo altura ?? requerido, por favor preencha o campo para que possa adicionar o benefici??rio.", "info");
                }else if(isCheckedSaude && (formData.dtAdmissao == "--" || formData.dtAdmissao == "")){
                    swal("Aten????o", "Campo data admiss??o ?? requerido, por favor preencha o campo para que possa adicionar o benefici??rio.", "info");
                }else if(isCheckedSaudeMental && (formData.horasMed == "--" || formData.horasMed == "")){
                    swal("Aten????o", "Campo horas meditadas ?? requerido, por favor preencha o campo para que possa adicionar o benefici??rio.", "info");
                }else{
                    try {
                        
                        const resposta = await api.post('beneficiarios', parametros);
                        setFormData({
                            nome: "--",
                            cpf: "--",
                            dtAdmissao: "--",
                            email: "--",
                            endereco: "--",
                            peso: "--",
                            altura: "--",
                            horasMed: "--",
                            nomeEmpresa: nome,
                            planoDentalNome: "--",
                            planoSaudeMentalNome: "--",
                            planoSaudeNome: "--",
                        });
                        setCheckedSaude(false);
                        setCheckedSaudeMental(false);
                        setCheckedDental(false);
                        console.log("Novo beneficiario adicionado com sucesso!");
                        swal("Sucesso", "Benefici??rio adicionado com sucesso!", "success");

                        } catch (error) {
                            setErroMensagem('Erro na cria????o api(adicionarBeneficiarios)');
                            swal("Aten????o", "Erro ao adicionar benefici??rio!", "warning");
                            
                        }
                }
    
        }, [formData.nome,
            formData.cpf,
            formData.dtAdmissao, 
            formData.email, 
            formData.endereco, 
            formData.peso, 
            formData.altura, 
            formData.horasMed, 
            formData.nomeEmpresa , 
            formData.planoDentalNome, 
            formData.planoSaudeMentalNome, 
            formData.planoSaudeNome
            ]
        
    )

    return(
        <ContainerGrid>
        <Header id="headerComponente"></Header>
        <Main>
            <Box id="boxPrincipal">
                <TituloBox>Cadastramento de Benefici??rio {nome}</TituloBox>
                <Formulario  onSubmit={(e) => adicionarBeneficiario(e)}>

                    <BoxForm>
                        <TituloCheck>Selecione pelo menos um plano </TituloCheck>

                        <BoxCheck>
                            {dadosEmpresa.planoSaudeEmpresa == "--" ? 
                                <>
                                    <Input id="checkboxSaude" type="checkbox" disabled />
                                    <Etiqueta for="checkboxSaude" id="checkboxSaudeEtiqueta" key={dadosEmpresa.planoSaudeEmpresa}>{dadosEmpresa.planoSaudeEmpresa}</Etiqueta>
                                </>
                            : 
                                <>
                                    <Input id="checkboxSaude" type="checkbox" onChange={(e) => {
                                    const { value } = e.target;
                                    setFormData({
                                        ...formData,
                                        planoSaudeNome: value
                                    });
                                    }} onClick={(e) => setCheckedSaude(e.target.checked)} value={dadosEmpresa.planoSaudeEmpresa} checked={isCheckedSaude}/>
                                    <Etiqueta for="checkboxSaude" id="checkboxSaudeEtiqueta" key={dadosEmpresa.planoSaudeEmpresa}>{dadosEmpresa.planoSaudeEmpresa}</Etiqueta>
                                </>
                            }
              
                            {dadosEmpresa.planoDentalEmpresa == "--" ?
                                <>
                                    <Input id="checkboxDental" type="checkbox" disabled/>
                                    <Etiqueta for="checkboxDental" id="checkboxDentalEtiqueta" key={dadosEmpresa.planoDentalEmpresa}>{dadosEmpresa.planoDentalEmpresa}</Etiqueta>
                                </>
                            :
                                <>
                                    <Input id="checkboxDental" type="checkbox" onChange={(e) => {
                                        const { value } = e.target;
                                        setFormData({
                                            ...formData,
                                            planoDentalNome: value
                                        });
                                     }} onClick={(e) => setCheckedDental(e.target.checked)} value={dadosEmpresa.planoDentalEmpresa} checked={isCheckedDental}/>
                                    <Etiqueta for="checkboxDental" id="checkboxDentalEtiqueta" key={dadosEmpresa.planoDentalEmpresa}>{dadosEmpresa.planoDentalEmpresa}</Etiqueta>
                                </>
                            }
                                  

                            {dadosEmpresa.planoSaudeMentalEmpresa == "--" ?
                                <>
                                    <Input id="checkboxSaudeMental" type="checkbox" disabled/>
                                    <Etiqueta for="checkboxSaudeMental" id="checkboxSaudeMentalEtiqueta" key={dadosEmpresa.planoSaudeMentalEmpresa}>{dadosEmpresa.planoSaudeMentalEmpresa}</Etiqueta>
                                </>
                            :
                                <>
                                    <Input id="checkboxSaudeMental" type="checkbox" onChange={(e) => {
                                        const { value } = e.target;
                                        setFormData({
                                            ...formData,
                                            planoSaudeMentalNome: value
                                        });
                                    }} onClick={(e) => setCheckedSaudeMental(e.target.checked)} value={dadosEmpresa.planoSaudeMentalEmpresa}  checked={isCheckedSaudeMental}/>
                                    <Etiqueta for="checkboxSaudeMental" id="checkboxSaudeMentalEtiqueta" key={dadosEmpresa.planoSaudeMentalEmpresa}>{dadosEmpresa.planoSaudeMentalEmpresa}</Etiqueta>
                                </>

                            }
                                  

                            
                        </BoxCheck> 
                    </BoxForm>

                        {(isCheckedSaude || isCheckedDental) &&
                            <BoxInput>
                                <Etiqueta for="nomeBeneficiario" id="nomeBeneficiarioEtiqueta">Nome Completo</Etiqueta>
                                <Input type="text" id="nomeBeneficiario" placeholder="Nome Completo" onChange={(e) => {
                                        const { value } = e.target;
                                        setFormData({
                                            ...formData,
                                            nome: value
                                        });
                                }}/>
                            </BoxInput>
                        }       

                        {(isCheckedSaude || isCheckedDental || isCheckedSaudeMental) &&
                            <BoxInput>
                                <Etiqueta for="cpfBeneficiarios" id="cpfBeneficiarioEtiqueta">CPF</Etiqueta>
                                <Input type="text" maxLength="11" minLength="11" id="cpfBeneficiario" placeholder="CPF" onChange={(e) => {
                                    const { value } = e.target;
                                    setFormData({
                                        ...formData,
                                        cpf: value
                                    });
                                }}/>
                            </BoxInput>
                        }

                        {isCheckedSaude &&
                            <BoxInput>
                                <Etiqueta for="dtAdmissao" id="dtAdmissaoEtiqueta">Dt. Admiss??o</Etiqueta>
                                <Input type="date" id="dtAdmissao" placeholder="Data Admiss??o" onChange={(e) => {
                                    const { value } = e.target;
                                    setFormData({
                                        ...formData,
                                        dtAdmissao: value
                                    });
                                }}/>
                            </BoxInput>
                   
                        }

                        { isCheckedDental &&
                            <BoxInput>
                                <Etiqueta for="pesoBeneficiario" id="pesoBeneficiarioEtiqueta">Peso (kg)</Etiqueta>
                                <Input type="number" id="pesoBeneficiario" placeholder="Peso (kg)" onChange={(e) => {
                                    const { value } = e.target;
                                    setFormData({
                                        ...formData,
                                        peso: value
                                    });
                                }}/>
                                <Etiqueta for="alturaBeneficiario" id="alturaBeneficiarioEtiqueta">Altura (cm)</Etiqueta>
                                <Input type="number" id="alturaBeneficiario" placeholder="Altura (cm)" onChange={(e) => {
                                    const { value } = e.target;
                                    setFormData({
                                        ...formData,
                                        altura: value
                                    });
                                }}/>
                            </BoxInput>
                        }


                        { isCheckedSaudeMental &&
                            <BoxInput>
                                <Etiqueta for="horasMed" id="horasMeditadasEtiqueta">Horas Meditadas</Etiqueta>
                                <Input type="text" id="horasMeditadas" placeholder="Horas Meditadas" onChange={(e) => {
                                        const { value } = e.target;
                                        setFormData({
                                            ...formData,
                                            horasMed: value
                                        });
                                }} />
                            </BoxInput>
                        }

                        {(isCheckedSaude && (emailTrue == "aparece")) &&
                            <BoxInput>
                                <Etiqueta for="emailBeneficiario" id="emailBeneficiarioEtiqueta">E-mail</Etiqueta>
                                <Input type="email" id="emailBeneficiario" placeholder="E-mail" onChange={(e) => {
                                        const { value } = e.target;
                                        setFormData({
                                            ...formData,
                                            email: value
                                        });
                                }} />
                            </BoxInput>
                        }

                        {(isCheckedSaude && (enderecoTrue == "aparece")) &&
                            <BoxInput>
                                <Etiqueta for="enderecoBeneficiario" id="enderecoBeneficiarioEtiqueta">Endere??o Completo</Etiqueta>
                                <Input type="text" id="enderecoBeneficiario" placeholder="Endere??o Completo" onChange={(e) => {
                                        const { value } = e.target;
                                        setFormData({
                                            ...formData,
                                            endereco: value
                                        });
                                }} />
                            </BoxInput>
                        }
                    

                    <BoxForm>
                        {(isCheckedSaude || isCheckedSaudeMental || isCheckedDental) &&
                            <BotaoSubmit type="submit" id="botaoAdicionar" >
                                Adicionar Benefici??rio
                            </BotaoSubmit>                 
                        }
                    </BoxForm>
       
                </Formulario>
            </Box>
        </Main>
        <Footer id="footerComponente"></Footer>
    </ContainerGrid>
    )
}

export default AdicionarBeneficiarios;
