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

`;

export const BoxTitulo = styled.div`
display:flex;
justify-content:center;
padding:15px;

`;
export const Titulo = styled.h1`
font-size:35px;
color:#040023;
`;