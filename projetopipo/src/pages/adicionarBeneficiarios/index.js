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

    const [planoSaude, setPlanoSaude] = useState([]);
    const [planoDental, setPlanoDental] = useState([]);
    const [planoSaudeMental, setPlanoSaudeMental] = useState([]);

    const [dadosPlano, setDadosPlano] = useState([]);
    const [emailTrue, setEmailTrue] = useState('');
    const [enderecoTrue, setEnderecoTrue] = useState('');
    const { id, nome, cnpj, qtdPlanos, planoDentalEmpresa,planoSaudeEmpresa, planoSaudeMentalEmpresa  } = useParams();

    const [exibirElementoNome,setExibirElementoNome] = useState(false);
    const [exibirElementoDt,setExibirElementoDt] = useState(false);
    const [exibirElementoPeso, setExibirElementoPeso] = useState(false);
    const [exibirElementoAltura, setExibirElementoAltura] = useState(false);
    const [exibirElementoHoras, setExibirElementoHoras] = useState(false);
    const [exibirElementoEmail, setExibirElementoEmail] = useState(false);
    const [exibirElementoEndereco, setExibirElementoEndereco] = useState(false);
    const [exibirElementoCpf, setExibirElementoCpf] = useState(false);

    const [exibirCheckSaudeMental, setExibirCheckSaudeMental] = useState(false);
    const [exibirCheckSaude, setExibirCheckSaude] = useState(false);
    const [exibirCheckSaudeDental, setExibirCheckSaudeDental] = useState(false);

    const [podeCriar, setPodeCriar] = useState(false);
// --------------------------------------------------------------------------------------------------------------------------------------------------
    
    const buscarDadosPlanoSaude = useCallback(
        async() => {
            try {
                const resposta = await api.get(`planoSaude?nomePlano=${planoSaudeEmpresa}`);
                setDadosPlano(resposta.data);
                setEmailTrue(dadosPlano.map(item => item.emailIsTrue ));
                setEnderecoTrue(dadosPlano.map(item => item.enderecoIsTrue));


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
            if(exibirElementoCpf && cpf === ""){
                swal("Atenção", "Campo CPF é requerido, por favor preencha o campo para que possa adicionar o beneficiário.", "info");
            }else if(exibirElementoEmail && email === ""){
                swal("Atenção", "Campo email é requerido, por favor preencha o campo para que possa adicionar o beneficiário.", "info");
            }else if(exibirElementoNome && nomeBeneficiario === ""){
                swal("Atenção", "Campo nome é requerido, por favor preencha o campo para que possa adicionar o beneficiário.", "info");
            }else if(exibirElementoPeso && peso === ""){
                swal("Atenção", "Campo peso é requerido, por favor preencha o campo para que possa adicionar o beneficiário.", "info");
            }else if(exibirElementoAltura && altura === ""){
                swal("Atenção", "Campo altura é requerido, por favor preencha o campo para que possa adicionar o beneficiário.", "info");
            }else if(exibirElementoDt && dtAdmissao === ""){
                swal("Atenção", "Campo data admissão é requerido, por favor preencha o campo para que possa adicionar o beneficiário.", "info");
            }else if(exibirElementoEndereco && endereco === ""){
                swal("Atenção", "Campo endereço é requerido, por favor preencha o campo para que possa adicionar o beneficiário.", "info");
            }else if(exibirElementoHoras && horasMed === ""){
                swal("Atenção", "Campo horas meditadas é requerido, por favor preencha o campo para que possa adicionar o beneficiário.", "info");
            }else{
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
            }
    
        }, [nomeBeneficiario, cpf, dtAdmissao, email, endereco, peso, altura, horasMed, nomeEmpresa,planoDentalNome,planoSaudeMentalNome,planoSaudeNome]
        
    )


    

    function verificarCheckBox(){
        var checkDental = document.getElementById("checkboxDental");
        var checkSaudeMental = document.getElementById("checkboxSaudeMental");
        var checkSaude = document.getElementById("checkboxSaude");

        function verificarEmailTrue(){
            if(emailTrue == "aparece"){
                setExibirElementoEmail(true);
            }
        }
        function verificarEnderecoTrue(){
            if(enderecoTrue == "aparece"){
                setExibirElementoEndereco(true);
            }
        }
      
        if(planoSaudeEmpresa === "--"){
            if(!checkDental.checked && !checkSaudeMental.checked){
                setExibirElementoNome(false);
                setExibirElementoCpf(false);
            }
        }else{
            setExibirCheckSaude(true);
            if(checkSaude.checked){
                setExibirElementoNome(true);
                setExibirElementoDt(true);
                setExibirElementoCpf(true);
                verificarEmailTrue();
                verificarEnderecoTrue();
            }else if(!checkSaude.checked && !checkDental.checked){
                setExibirElementoNome(false);
                setExibirElementoDt(false);
                setExibirElementoEmail(false);
                setExibirElementoEndereco(false);
            }else if(!checkSaude.checked && !checkSaudeMental.checked && !checkDental.checked ){
                setExibirElementoCpf(false);
            }
        }
        if(planoDentalEmpresa === "--"){

        }else{
            setExibirCheckSaudeDental(true);
            if(checkDental.checked){
                setExibirElementoCpf(true);
                setExibirElementoNome(true);
                setExibirElementoPeso(true);
                setExibirElementoAltura(true);
    
            }else{
                setExibirElementoPeso(false);
                setExibirElementoAltura(false);
            }
        }
        if(planoSaudeMentalEmpresa === "--"){

        }else{
            setExibirCheckSaudeMental(true);
            if(checkSaudeMental.checked){
                setExibirElementoCpf(true);
                setExibirElementoHoras(true);
            }else{
                setExibirElementoHoras(false);
            }
        }

    }

    setInterval(() => {
        verificarCheckBox();

    }, 100);

    function verificarCampos(){
        if(nomeBeneficiario === "" && !exibirElementoNome){
            setNomeBeneficiario("--");
        }
        if(endereco === "" && !exibirElementoEndereco){
            setEndereco("--");
        }
        if(email === "" && !exibirElementoEmail){
            setEmail("--");
        }
        if(peso === "" && !exibirElementoPeso){
            setPeso("--");
        }
        if(dtAdmissao === "" && !exibirElementoDt){
            setDtAdmissao("--");
        }
        if(altura === "" && !exibirElementoAltura){
            setAltura("--");
        }
        if(horasMed === "" && !exibirElementoHoras){
            setHorasMed("--");
        }
        if(planoSaudeNome === ""){
            setPlanoSaudeNome("--");
        }        
        if(planoDentalNome === ""){
            setPlanoDentalNome("--");
        }
        if(planoSaudeMentalNome === ""){
            setPlanoSaudeMentalNome("--");
        }
    }
    
    return(
        <ContainerGrid>
        <Header id="headerComponente"></Header>
        <Main>
            <Box id="boxPrincipal">
                <TituloBox>Cadastramento de Beneficiário {nome}</TituloBox>
                <Formulario  onSubmit={(e) => adicionarBeneficiario(e)}>

                    <BoxForm>
                        <TituloCheck>Selecione pelo menos um plano </TituloCheck>
                        <BoxCheck>
                            
                            {exibirCheckSaude ?
                                <>
                                    <Input id="checkboxSaude" type="checkbox" onChange={(e) => setPlanoSaudeNome(e.target.value) } value={planoSaudeEmpresa} />
                                    <Etiqueta for="checkboxSaude" id="checkboxSaudeEtiqueta" key={planoSaudeEmpresa}>{planoSaudeEmpresa}</Etiqueta>
                                </>
                                :
                                <>
                                    <Input id="checkboxSaude" type="checkbox" disabled onChange={(e) => setPlanoSaudeNome(e.target.value) } value={planoSaudeEmpresa} />
                                    <Etiqueta for="checkboxSaude" id="checkboxSaudeEtiqueta" key={planoSaudeEmpresa}>{planoSaudeEmpresa}</Etiqueta>
                                </>
                            }

                            {exibirCheckSaudeDental ?
                                <>
                                    <Input id="checkboxDental" type="checkbox" onChange={(e) => setPlanoDentalNome(e.target.value) } value={planoDentalEmpresa} />
                                    <Etiqueta for="checkboxDental" id="checkboxDentalEtiqueta" key={planoDentalEmpresa}>{planoDentalEmpresa}</Etiqueta>
                                </> 
                                :
                                  <>
                                    <Input id="checkboxDental" type="checkbox" disabled onChange={(e) => setPlanoDentalNome(e.target.value) } value={planoDentalEmpresa} />
                                    <Etiqueta for="checkboxDental" id="checkboxDentalEtiqueta" key={planoDentalEmpresa}>{planoDentalEmpresa}</Etiqueta>
                                 </>
                            }
                            
                            {exibirCheckSaudeMental ?
                                <>
                                    <Input id="checkboxSaudeMental" type="checkbox" onChange={(e) => setPlanoSaudeMentalNome(e.target.value) } value={planoSaudeMentalEmpresa} />
                                    <Etiqueta for="checkboxSaudeMental" id="checkboxSaudeMentalEtiqueta" key={planoSaudeMentalEmpresa}>{planoSaudeMentalEmpresa}</Etiqueta>
                                </> 
                                :
                                  <>
                                  <Input id="checkboxSaudeMental" type="checkbox" disabled onChange={(e) => setPlanoSaudeMentalNome(e.target.value) } value={planoSaudeMentalEmpresa} />
                                  <Etiqueta for="checkboxSaudeMental" id="checkboxSaudeMentalEtiqueta" key={planoSaudeMentalEmpresa}>{planoSaudeMentalEmpresa}</Etiqueta>
                              </>
                            }
                            
                        </BoxCheck> 
                    </BoxForm>

                    <BoxInput>
                        {exibirElementoNome &&
                            <>
                                <Etiqueta for="nomeBeneficiario" id="nomeBeneficiarioEtiqueta">Nome Completo</Etiqueta>
                                <Input type="text" id="nomeBeneficiario" placeholder="Nome Completo" value={nomeBeneficiario} onChange={(e) => setNomeBeneficiario(e.target.value)}/>
                            </>
                        
                        }
                    </BoxInput>

                    <BoxInput>
                        {exibirElementoCpf &&
                            <>
                                <Etiqueta for="cpfBeneficiarios" id="cpfBeneficiarioEtiqueta">CPF</Etiqueta>
                                <Input type="number" id="cpfBeneficiario" placeholder="CPF" value={cpf} onChange={(e) => setCpf(e.target.value)}/>
                            </>
                        }
                    </BoxInput>

                    <BoxInput>
                        {exibirElementoDt &&
                            <>
                                <Etiqueta for="dtAdmissao" id="dtAdmissaoEtiqueta">Dt. Admissão</Etiqueta>
                                <Input type="date" id="dtAdmissao" placeholder="Data Admissão" value={dtAdmissao} onChange={(e) => setDtAdmissao(e.target.value)}/>
                            </>
                        }
                    </BoxInput>

                    <BoxInput>
                        {exibirElementoPeso &&
                            <>
                                <Etiqueta for="pesoBeneficiario" id="pesoBeneficiarioEtiqueta">Peso (kg)</Etiqueta>
                                <Input type="number" id="pesoBeneficiario" placeholder="Peso (kg)" value={peso} onChange={(e) => setPeso(e.target.value)}/>
                            </>
                        }
                    </BoxInput>

                    <BoxInput>
                        {exibirElementoAltura &&
                            <>
                                <Etiqueta for="alturaBeneficiario" id="alturaBeneficiarioEtiqueta">Altura (cm)</Etiqueta>
                                <Input type="number" id="alturaBeneficiario" placeholder="Altura (cm)" value={altura} onChange={(e) => setAltura(e.target.value)}/>
                            </>
                        }
                    </BoxInput>

                    <BoxInput>
                    {exibirElementoHoras &&
                        <>  
                            <Etiqueta for="horasMed" id="horasMeditadasEtiqueta">Horas Meditadas</Etiqueta>
                            <Input type="text" id="horasMeditadas" placeholder="Horas Meditadas" value={horasMed} onChange={(e) => setHorasMed(e.target.value)} />
                        </>
                    }
                    </BoxInput>

                    <BoxInput>
                    {exibirElementoEmail &&
                        <>
                            <Etiqueta for="emailBeneficiario" id="emailBeneficiarioEtiqueta">E-mail</Etiqueta>
                            <Input type="text" id="emailBeneficiario" placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </>
                    }
                    </BoxInput>

                    <BoxInput>
                    {exibirElementoEndereco &&
                        <>
                            <Etiqueta for="enderecoBeneficiario" id="enderecoBeneficiarioEtiqueta">Endereço Completo</Etiqueta>
                            <Input type="text" id="enderecoBeneficiario" placeholder="Endereço Completo" value={endereco} onChange={(e) => setEndereco(e.target.value)} />
                        </>
                    }
                    </BoxInput>
                    

                    <BoxForm>
                        <BotaoSubmit type="submit" id="botaoAdicionar" onClick={verificarCampos} >
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
