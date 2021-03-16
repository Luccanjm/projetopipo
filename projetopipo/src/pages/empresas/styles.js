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
grid-area:main;
margin: 20px 0 20px 0;
display:flex;
flex-wrap:wrap;
flex-direction:column;
align-items:center;
`;

export const BoxPlano = styled.div`
background:#EFECEC;
width:1000px;
height:80px;
padding:30px;
border-radius:5px;
color:#040023;
`;
export const Table = styled.table`
text-align:center;
width:100%;
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
border-radius:5px;


`;
export const TituloBeneficios = styled.p`
margin:20px;
font-size:20px;
`;

export const TextoBeneficios = styled.p`
line-height:20px;

`;

export const BoxBeneficiarios = styled.div`
background:#040023;
color:#FFB9B7;
width:1500px;
height:450px;
border-radius:5px;
margin:20px;

`;

export const TituloBeneficiarios = styled.p`
font-size:30px;
text-align:center;
padding:20px;



`;

export const TableBeneficiarios = styled.table`

background:#040023;
width:100%;
color:#FF9996;
text-align:center;
border-radius: 5px;
border: none;

td, th{
    padding:10px;

}
tr:hover{
    background:#3D4660;

}


`;