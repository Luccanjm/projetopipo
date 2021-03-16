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
    TituloCheck 
} from './styles';

const AdicionarBeneficiarios = () => {
    const [nomeBeneficiario, setNomeBeneficiario] = useState('');
    const [cpf, setCpf] = useState('');
    const [dtAdmissao, setDtAdmissao] = useState('');
    const [email, setEmail] = useState('');
    const [endereco, setEndereco] = useState('');
    const [peso, setPeso] = useState('');
    const [altura, setAltura] = useState('');
    const [horasMed, setHorasMed] = useState('');
    const [nomeEmpresa, setNomeEmpresa] = useState('');
    const [planoDentalNome, setPlanoDentalNome] = useState('');
    const [planoSaudeMentalNome, setPlanoSaudeMentalNome] = useState('');
    const [planoSaudeNome, setPlanoSaudeNome] = useState('');
    const [erroMensagem, setErroMensagem] = useState('');

    const [empresas, setEmpresas] = useState([]);

    const [planoSaude, setPlanoSaude] = useState([]);
    const [planoDental, setPlanoDental] = useState([]);
    const [planoSaudeMental, setPlanoSaudeMental] = useState([]);

    const [dadosPlano, setDadosPlano] = useState([]);
    const [emailTrue, setEmailTrue] = useState();
    const [enderecoTrue, setEnderecoTrue] = useState();
    const { id, nome, cnpj, qtdPlanos, qtdBenef, planoDentalEmpresa,planoSaudeEmpresa, planoSaudeMentalEmpresa  } = useParams();

// --------------------------------------------------------------------------------------------------------------------------------------------------


    function verificarPlano(){
        if(planoSaudeMentalEmpresa === "--"){
            document.getElementById('horasMeditadas').style.display = 'none';
            document.getElementById('horasMeditadasEtiqueta').style.display = 'none';
            document.getElementById('alturaBeneficiario').style.width = '240px';
            document.getElementById('pesoBeneficiario').style.width = '240px';
            document.getElementById('checkboxSaudeMental').style.display = 'none';
            document.getElementById('checkboxSaudeMentalEtiqueta').style.display = 'none';
            setHorasMed('0')
            setPlanoSaudeMentalNome("--");
            if(dadosPlano.emailIsTrue){
                document.getElementById('emailBeneficiario').style.width = '560px';

            }else{
                setEmail("")
            }
        }
        if(planoDentalEmpresa === "--"){
            document.getElementById('checkboxDental').style.display = 'none';
            document.getElementById('checkboxDentalEtiqueta').style.display = 'none';
            setPlanoDentalNome("--")
        }
    }

   function verificarPlanosSelecionados() {
        var checkDental = document.getElementById("checkboxDental");
        var checkSaudeMental = document.getElementById("checkboxSaudeMental");
        var checkSaude = document.getElementById("checkboxSaude");

        if(checkDental.checked){
            document.getElementById('alturaBeneficiario').style.display = 'inline-block';
            document.getElementById('pesoBeneficiario').style.display = 'inline-block';
            document.getElementById('alturaBeneficiarioEtiqueta').style.display = 'inline-block';
            document.getElementById('pesoBeneficiarioEtiqueta').style.display = 'inline-block';

        }else{
            document.getElementById('alturaBeneficiario').style.display = 'none';
            document.getElementById('pesoBeneficiario').style.display = 'none';
            document.getElementById('alturaBeneficiarioEtiqueta').style.display = 'none';
            document.getElementById('pesoBeneficiarioEtiqueta').style.display = 'none';
            setAltura("--");
            setPeso("--");

        }
        if(checkSaudeMental.checked){
            document.getElementById('horasMeditadasEtiqueta').style.display = 'inline-block';
            document.getElementById('horasMeditadas').style.display = 'inline-block';
            if(dadosPlano.emailIsTrue){
            document.getElementById('emailBeneficiario').style.width = '300px';
            }else{
                setEmail("")
            }

        }else{
            document.getElementById('horasMeditadasEtiqueta').style.display = 'none';
            document.getElementById('horasMeditadas').style.display = 'none'; 
            if(dadosPlano.emailIsTrue){
                document.getElementById('emailBeneficiario').style.width = '560px';

            }else{
                setEmail("")
            }
            setPlanoSaudeMentalNome("--");
            setHorasMed("--");

        }
        if(checkDental.checked && !checkSaudeMental.checked){
            document.getElementById('alturaBeneficiario').style.width = '240px';
            document.getElementById('pesoBeneficiario').style.width = '240px';
            
        }
        if(checkSaude.checked){
            document.getElementById('dtAdmissaoEtiqueta').style.display = 'inline-block';
            document.getElementById('dtAdmissao').style.display = 'inline-block'; 
            if(dadosPlano.emailIsTrue){
                document.getElementById('emailBeneficiario').style.display = 'inline-block';

            }else{
                setEmail("")
            }

        }else{
            document.getElementById('dtAdmissaoEtiqueta').style.display = 'none';
            document.getElementById('dtAdmissao').style.display = 'none'; 
            if(dadosPlano.emailIsTrue){
                document.getElementById('emailBeneficiario').style.display = 'none'; 

            }else{
                setEmail("")
            }
        }

    }
    setInterval(() => {
        verificarPlano();
        verificarPlanosSelecionados();

    }, 100);

    const buscarDadosPlanoSaude = useCallback(
        async() => {
            try {
                const resposta = await api.get(`planoSaude?nomePlano=${planoSaudeEmpresa}`);
               setDadosPlano(resposta.data);
            } catch (error) {
                console.log("Erro na busca da API(buscarDadosPlanoSaude)", error);
                setErroMensagem(error);
            }
        },[dadosPlano]
    );

    const exibirPlanoSaude = useCallback(
        async() => {
            try {
                const resposta = await api.get('planoSaude');
                setPlanoSaude(resposta.data);
                // console.log(planoSaude);
            } catch (error) {
                console.log("Erro na busca da API(exibirSaude)", error);
                setErroMensagem(error);
            }
        },[planoSaude]
    );

    const exibirPlanoDental = useCallback(
        async() => {
            try {
                const resposta = await api.get('planoDental');
                setPlanoDental(resposta.data);
                // console.log(planoDental);
            } catch (error) {
                console.log("Erro na busca da API(exibirDental)", error);
                setErroMensagem(error);
            }
        },[planoDental]
    );

    const exibirPlanoSaudeMental = useCallback(
        async() => {
            try {
                const resposta = await api.get('planoSaudeMental');
                setPlanoSaudeMental(resposta.data);
                // console.log(planoSaudeMental);
            } catch (error) {
                console.log("Erro na busca da API(exibirSaudeMental)", error);
                setErroMensagem(error);
            }
        },[planoSaudeMental]
    );

    useEffect(() => {
        exibirPlanoSaude();
        exibirPlanoDental();
        exibirPlanoSaudeMental();
        buscarDadosPlanoSaude();
        
    },[buscarDadosPlanoSaude])



    const adicionarBeneficiario = useCallback(

        async(e) =>{
            e.preventDefault();
            const parametros = {
                nome: nomeBeneficiario,
                cpf: cpf,
                dtAdmissao: dtAdmissao,
                email: email,
                endereco: endereco,
                peso: peso,
                altura: altura,
                horasMed: horasMed,
                nomeEmpresa: nome,
                planoDentalNome: planoDentalNome,
                planoSaudeMentalNome: planoSaudeMentalNome,
                planoSaudeNome: planoSaudeNome

            }
            if(horasMed === "" ){
                setHorasMed("")
            }
            if(planoSaudeMentalNome === "" ){
                setPlanoSaudeMentalNome("--")
            }
            if(planoDentalNome === "" ){
                setPlanoDentalNome("--")
            }
        try {
            const resposta = await api.post('beneficiarios', parametros);
            setNomeBeneficiario('');
            setCpf('');
            setDtAdmissao('');
            setEmail('');
            setEndereco('');
            setPeso('');
            setAltura('');
            setHorasMed('');
            setNomeEmpresa('');
            setPlanoDentalNome('');
            setPlanoSaudeMentalNome('');
            setPlanoSaudeNome('');
            console.log("Novo beneficiario adicionado com sucesso!");
            swal("Sucesso", "Beneficiário adicionado com sucesso!", "success");

            } catch (error) {
                setErroMensagem('Erro na criação api(adicionarBeneficiarios)');
                swal("Atenção", "Erro ao adicionar beneficiário!", "warning");
                
            }
  
        }, [nomeBeneficiario, cpf, dtAdmissao, email, endereco, peso, altura, horasMed, nomeEmpresa,planoDentalNome,planoSaudeMentalNome,planoSaudeNome]
        
    )
      
    
   

    return(
        <ContainerGrid>
        <Header id="headerComponente"></Header>
        <Main>
            <Box>
                <TituloBox>Cadastramento de Beneficiário {nome}</TituloBox>
                <Formulario  onSubmit={(e) => adicionarBeneficiario(e)}>
                    <BoxForm>
                        
                                <TituloCheck>Selecione pelo menos 1 plano</TituloCheck>

                        <BoxCheck>
                            <Input id="checkboxSaude" type="checkbox" onChange={(e) => setPlanoSaudeNome(e.target.value) } value={planoSaudeEmpresa} />
                            <Etiqueta for="checkboxSaude" id="checkboxSaudeEtiqueta">{planoSaudeEmpresa}</Etiqueta>

                            <Input id="checkboxDental" type="checkbox" onChange={(e) => setPlanoDentalNome(e.target.value) } value={planoDentalEmpresa} />
                            <Etiqueta for="checkboxDental" id="checkboxDentalEtiqueta">{planoDentalEmpresa}</Etiqueta>

                            <Input id="checkboxSaudeMental" type="checkbox" onChange={(e) => setPlanoSaudeMentalNome(e.target.value) } value={planoSaudeMentalEmpresa} />
                            <Etiqueta for="checkboxSaudeMental" id="checkboxSaudeMentalEtiqueta">{planoSaudeMentalEmpresa}</Etiqueta>
                        </BoxCheck> 
                    </BoxForm>

                    <Etiqueta for="nomeBeneficiario">Nome Completo</Etiqueta>
                    <Input type="text" id="nomeBeneficiario" placeholder="Nome Completo" required value={nomeBeneficiario} onChange={(e) => setNomeBeneficiario(e.target.value)}/>

                    <Etiqueta for="cpfBeneficiarios">CPF</Etiqueta>
                    <Input type="number" id="cpfBeneficiario" placeholder="CPF" required value={cpf} onChange={(e) => setCpf(e.target.value)}/>

                    <Etiqueta for="dtAdmissao" id="dtAdmissaoEtiqueta">Dt. Admissão</Etiqueta>
                    <Input type="date" id="dtAdmissao" placeholder="Data Admissão" required value={dtAdmissao} onChange={(e) => setDtAdmissao(e.target.value)}/>

                    <Etiqueta for="pesoBeneficiario" id="pesoBeneficiarioEtiqueta">Peso (kg)</Etiqueta>
                    <Input type="number" id="pesoBeneficiario" placeholder="Peso (kg)" value={peso} onChange={(e) => setPeso(e.target.value)}/>

                    <Etiqueta for="alturaBeneficiario" id="alturaBeneficiarioEtiqueta">Altura (cm)</Etiqueta>
                    <Input type="number" id="alturaBeneficiario" placeholder="Altura (cm)" value={altura} onChange={(e) => setAltura(e.target.value)}/>

                    <Etiqueta for="horasMed" id="horasMeditadasEtiqueta">Horas Meditadas</Etiqueta>
                    <Input type="text" id="horasMeditadas" placeholder="Horas Meditadas" required value={horasMed} onChange={(e) => setHorasMed(e.target.value)} />
                    
                    {dadosPlano.map(item => <>{item.emailIsTrue ? 
                    <>
                    <Etiqueta for="emailBeneficiario" id="emailBeneficiarioEtiqueta">E-mail</Etiqueta>
                    <Input type="email" id="emailBeneficiario" placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </>
                     : ""}</>)}      
                    
                    {dadosPlano.map(item => <p>{item.enderecoIsTrue  ? 
                    <>
                   <Etiqueta for="enderecoBeneficiario" id="enderecoBeneficiarioEtiqueta">Endereço Completo</Etiqueta>
                    <Input type="text" id="enderecoBeneficiario" placeholder="Endereço Completo" required value={endereco} onChange={(e) => setEndereco(e.target.value)} />
                    </>
                     : ""}</p>)}      
                   


                    <BoxForm>
                        <BotaoSubmit type="submit" id="link-continuar" >
                            Adicionar Beneficiário
                        </BotaoSubmit>
                    </BoxForm>


                </Formulario>
            </Box>
        </Main>
        <Footer id="footerComponente"></Footer>
    </ContainerGrid>
    )
}

export default AdicionarBeneficiarios;
