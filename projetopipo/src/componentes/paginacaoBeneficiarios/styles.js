import styled from 'styled-components';

export const Container = styled.div`
display:flex;
flex-direction:column;

.pagination {
    margin: 15px auto;
    display: flex;
    list-style: none;
    outline: none;
    border-radius:5px;
    justify-content:center;

    @media (max-width:1090px){
      font-size:13px;
      }
  }
  .pagination > .active > a{
    background-color: #FF9996 ;
    border-color: #FF9996 ;
    color: #040023;
    border-radius:5px;
  }
  .pagination > li > a{
    border: 1px solid #FF9996 ;
    padding: 5px 10px;
    outline: none;
    cursor: pointer;
    border-radius:5px;
  }
  .pagination > .active > a, .pagination > .active > span, .pagination > .active > a:hover, .pagination > .active > span:hover, .pagination > .active > a:focus, .pagination > .active > span:focus{
    background-color: #FF9996 ;
    border-color: #FF9996;
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
    border-color:#FF9996;
    color:#FF9996;
  }
  .pagination > li:first-child > a, .pagination > li:first-child > span, .pagination > li:last-child > a, .pagination > li:last-child > span{
    border-radius:5px;
  }
`;
export const Table = styled.table`
background:#040023;
width:100%;
color:#FF9996;
text-align:center;
border-radius: 5px;
border: none;

td, th{
  padding:15px;
  @media (max-width:1530px){
    padding:10px;
  }
  @media (max-width:1090px){
    padding:7px;
    font-size:15px;
  }
  @media (max-width:1090px){
    padding:2px;
    font-size:14px;
  }
}
tr:hover{
  background:#3D4660;

}
@media (max-width:1530px){
  width:1150px;
}
@media (max-width:1200px){
  width:670px;
  .nomeClasse,.dtClasse, .horasClasse, .pesoClasse, .alturaClasse{
    display:none;
  }
  @media (max-width:800px){
    width:500px;
    .nomeClasse,.dtClasse, .horasClasse, .pesoClasse, .alturaClasse{
      display:none;
    }
}
@media (max-width:660px){
  width:300px;
  .enderecoClasse{
    display:none;
  }

}


`;

