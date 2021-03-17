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
flex-direction:column;
align-items:center;
`;

export const BoxTitulo = styled.div`
background:#040023;
width:1200px;
color:#FF9996;
text-align:center;
border-radius: 10px;
border: none;
`;
export const Titulo = styled.p`
padding:20px;
font-size:35px;
`;


export const BoxPlanos = styled.div`
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
export const PlanosText = styled.ul`
display:flex;
flex-direction:column;
align-items:center;
padding:10px;
li:first-child{
    font-size:30px;
    margin-bottom:5px;
}
li{
    font-size:20px;
    margin:2px 0 2px 0;

}
`;

export const BoxBeneficiarios = styled.div`
margin:15px 0 15px 0;
background:#040023;
min-width:700px;
width:auto;
color:#FF9996;
text-align:center;
border-radius: 10px;
border: none;
display:flex;
padding:20px;
line-height:50px;

ul{
    padding:15px;
    font-size:20px;
}
li:hover{
    background:#3D4660;
}
button:hover, a:hover{
    background:#FF9996;
    color:#040023;
    opacity:0.9;

}
`;
