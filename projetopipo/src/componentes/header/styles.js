import styled from 'styled-components';

export const Head = styled.header`
grid-area:header;
background:#EFECEC;
display:flex;
align-items:center;


`;
export const BoxImg = styled.div`
padding:10px;
`; 
export const Nav = styled.div`
padding:10px;
`; 
export const Img = styled.img`
width:300px;
@media (max-width:1330px){
    width:200px;
}
@media (max-width:800px){
    width:150px;

}

`;