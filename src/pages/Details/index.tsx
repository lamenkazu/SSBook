import { Link, useParams } from 'react-router-dom';
import { Container, Cover, Title, MainCard, Fav, Protection } from './styles'
import { useQuery, QueryResult } from '@apollo/client';
import { GET_BOOK_DATA, GetBookDataResponse } from './queries';

import optionsImg from '../../assets/options.svg'
import backImg from '../../assets/back.svg'
import heartImg from '../../assets/coração.svg'
import shareImg from '../../assets/share.svg'
import saveImg from '../../assets/save.svg'


import { useState } from 'react';


export const Details = () => {

  const { id } = useParams();

  const { data }: QueryResult<GetBookDataResponse> = useQuery(GET_BOOK_DATA, {
    variables: { id: id },
  });

  const book = data?.book

  const descriptionWithBreaks = book?.description.replace(/\n/g, '<br />') || '';

  //Options
  const [isOptionsMenuVisible, setIsOptionsMenuVisible] = useState(false); //Visibilidade
  const toggleOptionsMenu = () => {
    setIsOptionsMenuVisible(!isOptionsMenuVisible);
  };
 
  const handleOptionClick = (option: number) => {
    
    switch(option){
      case 1: alert("Livro Favoritado")
        break
      case 2: alert("Compartilhando livro")
        break
      case 3: alert("Livro Salvo")
        break
    }

    
    setIsOptionsMenuVisible(false); // Fecha o menu de opções após a seleção
  };


  return (
    <Container>

      <Protection>
        <Link to='/'>
          <img src={backImg} alt="" />
        </Link>

        {!isOptionsMenuVisible && (
        <button onClick={toggleOptionsMenu}>
          <img src={optionsImg} alt="Opções" />
        </button>
      )}

        {isOptionsMenuVisible && (
          <ul>
            <li onClick={() => handleOptionClick(1)}>
              <img src={heartImg} alt="Icone coração" />
              Favoritar
            </li>

            <li onClick={() => handleOptionClick(2)}>
              <img src={shareImg} alt="Icone compartilhar" />

              Compartilhar
            </li>

            <li onClick={() => handleOptionClick(3)}>
              <img src={saveImg} alt="Icone salvar" />
              Salvar em uma lista
            </li>
          </ul>
        )}
      </Protection>

      <Cover src={book?.cover} />

      <MainCard>

        <Title>
          <div>
            <h2> {book?.name} </h2>
            <span> {book?.author.name}  </span>
          </div>
          <Fav $isfavorite={book?.isFavorite.toString() || 'false'} alt="Icone de Favorito" /> 
        </Title>

        <p dangerouslySetInnerHTML={{ __html: descriptionWithBreaks }} />
        

      </MainCard>
    </Container>
  )
}

