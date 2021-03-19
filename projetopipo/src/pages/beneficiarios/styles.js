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
@media(max-width:1200px){
    width:700px;
}
@media(max-width:1200px){
    width:500px;
}
@media(max-width:505px){
    width:300px;
}
`;
export const Titulo = styled.p`
padding:20px;
font-size:35px;
@media(max-width:1200px){
    font-size:25px;
}
@media(max-width:705px){
    font-size:20px;
}
@media(max-width:505px){
    font-size:18px;
}
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
@media(max-width:1200px){
    width:270px;
    height:110px;
}
`;
export const PlanosText = styled.ul`
display:flex;
flex-direction:column;
align-items:center;
padding:10px;
li:first-child{
    font-size:30px;
    margin-bottom:5px;
    @media(max-width:1200px){
        font-size:20px;
    }
}
li{
    font-size:20px;
    margin:2px 0 2px 0;
    @media(max-width:1200px){
        font-size:15px;
    }
}
`;

export const BoxBeneficiarios = styled.div`
display:flex;
justify-content:center;
margin:10px 0 10px 0;
background:#040023;
height:450px;
width:auto;
color:#FF9996;
text-align:center;
border-radius: 10px;
border: none;
padding:5px;
line-height:50px;

ul{
    padding:15px;
    font-size:20px;
    @media(max-width:980px){
        font-size:18px;
        padding:10px;
    }
    @media(max-width:810px){
        font-size:18px;
        padding:4px;
    }
}
li:hover{
    background:#3D4660;
}
button:hover, a:hover{
    background:#FF9996;
    color:#040023;
    opacity:0.9;

}
@media(max-width:1200px){
    width:700px;
    height:420px;
    line-height:40px;

}
@media(max-width:810px){
    width:700px;
    height:310px;
    line-height:35px;
}
@media(max-width:705px){
    width:450px; 
    height:250px;
    .enderecoClasse, .horasClasse{
        display:none;
    }
}
@media(max-width:505px){
    width:370px; 
    height:210px;
    line-height:30px;
}
`;
