import styled from 'styled-components';

export const ContainerTable = styled.div`
display:flex;
justify-content:center;

`;
export const Table = styled.table`
background:#040023;
width:1200px;
color:#FF9996;
text-align:center;
border-radius: 10px;
border: none;

td, th{
    padding:15px;

}
tr:hover{
    background:#3D4660;
    cursor:pointer;
}
button:hover, a:hover{
    background:#FF9996;
    color:#040023;
    opacity:0.9;

}
`;
export const BotaoRedirecionar = styled.button`
border:none;
text-decoration:none;
color:inherit;
background: #3D4660;
padding:10px;
border-radius:5px;

a:hover{
    text-decoration:none;
} 
`;
export const LinkBotao = styled.a`
text-decoraiton:none;
color:inherit;
`;


