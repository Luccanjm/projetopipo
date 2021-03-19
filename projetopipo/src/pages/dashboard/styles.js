import styled from 'styled-components';

export const ContainerGrid = styled.div`
display:grid;
grid-gap: 0.6 rem;
grid-template-rows: 10vh 85vh 5vh;
grid-template-columns: 1fr 1fr 1fr;
grid-template-areas: "header header header"
                     " main main main"
                     "footer footer footer";
@media (max-width:575px){
    grid-template-rows:8vh 89vh 3vh;       

}
`;
export const Main = styled.main`
grid-area:main;
margin: 20px 0 20px 0;
@media (max-width:1010px){
    margin: 5px 0 5px 0;
  }
`;

export const BoxTitulo = styled.div`
display:flex;
justify-content:center;
padding:15px;
@media (max-width:1010px){
padding:10px;
}
`;
export const Titulo = styled.h1`
font-size:35px;
color:#040023;
@media (max-width:1330px){
    font-size:25px;
}

`;