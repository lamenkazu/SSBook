import styled from "styled-components";

interface PProps{
    $hasmore?: string;
}

export const Container = styled.section`
    
    padding-inline: 2rem;

    margin-right: 5%;


    >div{

        display: flex;
        align-items: first baseline;
        justify-content: space-between;
        
        h2{

            margin-bottom: 2.8rem;


            font-size: 2rem;
            font-weight: 700;
        }

        
    }


    
`

export const P = styled.p<PProps>`
    color: ${({theme}) => theme.PURPLE};
    text-align: center;
    font-size: 1.4rem;
    font-weight: 700;
    display: ${({$hasmore}) => $hasmore === 'true' ? 'block' : 'none'};

    cursor: pointer;

    transition: all 250ms ease;

    &:hover{
        transform: scale(1.1);
    }

`