import styled from 'styled-components'

export const BoxStyle = styled.div`
    display:flex;
    justify-content:center;
    @media (max-width: 1024px) and (min-width: 992px){
        background:red
        }
    @media (max-width: 991.9px) and (min-width: 768px){
        justify-content: flex-start;
        padding-top: 47px;
        }
`