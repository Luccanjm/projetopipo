import styled from 'styled-components';

export const ContainerGrid = styled.div`
display:grid;
grid-gap: 0.6 rem;
grid-template-rows: 10vh 85vh 5vh;
grid-template-columns: 1fr 1fr 1fr;
grid-template-areas: "header header header"
                     " main main main"
                     "footer footer footer"

`;
export const Main = styled.main`
margin: 20px 0 20px 0;
grid-area:main;
display:flex;
justify-content:center;

`;
export const Box = styled.div`
width:900px;
border-radius:10px;
background:#040023;
display:flex;
flex-direction:column;
align-items:center;
height:fit-content;
padding:30px;


#nomeBeneficiario, #enderecoBeneficiario{
    width:750px;
    display:flex;

}
#emailBeneficiario{
    max-width:450px;
    min-width:335px;
    width:auto;
}
#pesoBeneficiario, #alturaBeneficiario{
    min-width:250px;
    max-width:300px;
    width:auto;
}
#horasMeditadas{
    width:170px;
}
#checkboxSaude, #checkboxSaudeMental, #checkboxDental{
    width:20px;
}
`;
export const BoxInput = styled.div`
display:inline-block;
`;
export const TituloBox = styled.p`
margin-bottom:5px;
font-size:30px;
color:#FF9996;
`;
export const Formulario = styled.form`
width:750px;
padding-top:12px;
`;
export const Etiqueta = styled.label`
color:#FF9996;
flex-wrap:wrap;
`;
export const Input = styled.input`
width:270px;
border-radius:5px;
border:none;
padding:5px;
height:40px;
margin:10px;
`;
export const BoxForm = styled.div`
display:flex;
flex-direction:column;
align-items:center;
gap:10px;

button:hover{
    opacity:0.7;
}
`;

export const BoxCheck = styled.div`
display:flex;
align-items:center;
`;
export const TituloCheck = styled.p`
font-size:18px;
color:#FF9996;

`;

export const BotaoSubmit = styled.button`
margin-top:35px;
border:none;
border-radius:5px;
padding:15px;
background:#B2FFB6;
color:#1D1841;
width:230px;
height:45px;
`;
