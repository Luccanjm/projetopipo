import styled from 'styled-components';

export const ContainerGrid = styled.div`
display:grid;
grid-gap: 0.6 rem;
grid-template-rows: 10vh 85vh 5vh;
grid-template-columns: 1fr 1fr 1fr;
grid-template-areas: "header header header"
                     " main main main"
                     "footer footer footer";
@media (max-width:800px){
    grid-template-rows: 7vh 89vh 4vh;

}
`;
export const Main = styled.main`
grid-area:main;
margin-top:20px;
display:flex;
flex-direction:column;
align-items:center;
`;

export const BoxPlano = styled.div`
display:flex;
align-items:center;
justify-content:center;
background:#EFECEC;
width:1000px;
height:80px;
padding:30px;
border-radius:5px;
color:#040023;
@media (max-width:1010px){
width:600px;
}
@media (max-width:660px){
    width:300px;
    padding:5px;
}
`;
export const Table = styled.table`
text-align:center;
width:100%;
@media (max-width:660px){
font-size:12px;
.qtdBenefClasse{
    display:none;
}
}
`;
export const BoxBeneficios = styled.div`
margin:10px;
display:flex;
flex-direction:column;
align-items:center;
background:#182341;
width:400px;
height:140px;
color:#FFB9B7;
padding:5px;
border-radius:5px;
@media (max-width:1010px){
    width:300px;
    font-size:13px;
    height:110px;
}
@media (max-width:660px){
    font-size:10px;
    width:170px;
}
`;
export const TituloBeneficios = styled.p`
margin:20px;
font-size:20px;
@media (max-width:1010px){
    font-size:18px;
    margin:10px;
}
@media (max-width:800px){
    font-size:15px;
}
@media (max-width:660px){
    font-size:12px;
}

`;

export const TextoBeneficios = styled.p`
line-height:20px;
@media (max-width:1010px){
    line-height:15px;
}

`;

export const BoxBeneficiarios = styled.div`
background:#040023;
color:#FFB9B7;
width:1500px;
height:auto;
border-radius:5px;
margin:20px;
padding:5px;
@media (max-width:1530px){
    width:1200px;
  }
@media (max-width:1200px){
    width:700px;
  }
@media (max-width:800px){
    width:510px;
}
@media (max-width:660px){
    width:310px;
}
`;

export const TituloBeneficiarios = styled.p`
font-size:30px;
text-align:center;
padding:20px;
@media (max-width:1090px){
padding:5px;
font-size:20px;
}
@media (max-width:800px){
font-size:18px;
}
`;
