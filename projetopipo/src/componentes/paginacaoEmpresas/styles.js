import styled from 'styled-components';

export const Container = styled.div`
display:flex;
align-items:center;
flex-direction:column;
.pagination {
    margin: 15px auto;
    display: flex;
    list-style: none;
    outline: none;
    border-radius:5px;
    justify-content:center;
    @media (max-width:475px){
      font-size:12px;
    }
  }
  .pagination > .active > a{
    background-color: #040023 ;
    border-color: #040023 ;
    color: #FF9996;
    border-radius:5px;
  }
  .pagination > li > a{
    border: 1px solid #040023 ;
    padding: 5px 10px;
    outline: none;
    cursor: pointer;
    border-radius:5px;
  }
  .pagination > .active > a, .pagination > .active > span, .pagination > .active > a:hover, .pagination > .active > span:hover, .pagination > .active > a:focus, .pagination > .active > span:focus{
    background-color: #FF9996 ;
    border-color: #040023;
    outline: none ;
    border-radius:5px;
    color:#040023;
  }
  .pagination > li > a, .pagination > li > span{
    border-radius:5px;
    background-color: #040023;
    color:#FF9996;
  }
  .pagination > li > a:hover, .pagination > li > span:hover{
    border-radius:5px;
    background-color: #3D4660;
    border-color:#3D4660;
    color:#FF9996;
  }
  .pagination > li:first-child > a, .pagination > li:first-child > span, .pagination > li:last-child > a, .pagination > li:last-child > span{
    border-radius:5px;
  }
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
@media (max-width:670px){
  padding:10px;
}
@media (max-width:500px){
  padding:5px;
}
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
@media (max-width:1330px){
width:900px;
}
@media(max-width:1030px){
  .qtdClasse, .cnpjClasse{
    display:none;
  }
  width:500px;
  font-size:15px;
}
@media (max-width:670px){
  width:500px;
}
@media (max-width:500px){
  width:400px;
  font-size:15px;

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
@media (max-width:500px){
width:100px;
font-size:12px;
}
`;
export const LinkBotao = styled.a`
text-decoraiton:none;
color:inherit;
`;


