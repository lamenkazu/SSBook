import { Link, useParams } from "react-router-dom";
import { Container, Cover, Protection } from "./styles";

import { useState, useEffect } from "react";
import { useQuery, QueryResult } from "@apollo/client";
import {
  GET_BOOK_DATA,
  GetBookDataResponse,
} from "../../@types/graphqlQuerries";

import { MainCard } from "../../components/MainCard";
import { Footer } from "../../components/Footer";
import { DetailOptions } from "../../components/DetailOptions";
import optionsImg from "../../assets/options.svg";
import backImg from "../../assets/back.svg";
import { Title } from "../../components/Title";

export const Details = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  //Options
  const [isOptionsMenuVisible, setIsOptionsMenuVisible] = useState(false); //Visibilidade
  const toggleOptionsMenu = () => {
    setIsOptionsMenuVisible(!isOptionsMenuVisible);
  };

  const { id } = useParams();

  const { data }: QueryResult<GetBookDataResponse> = useQuery(GET_BOOK_DATA, {
    variables: { id: id },
  });

  const book = data?.book;

  const descriptionWithBreaks =
    book?.description.replace(/\n/g, "<br />") || "";

  return (
    <Container>
      <Protection>
        <Link to="/">
          <img src={backImg} alt="" />
        </Link>

        {!isOptionsMenuVisible && (
          <button onClick={toggleOptionsMenu}>
            <img src={optionsImg} alt="Opções" />
          </button>
        )}

        {isOptionsMenuVisible && (
          <DetailOptions setIsOptionsMenuVisible={setIsOptionsMenuVisible} />
        )}
      </Protection>

      <MainCard>
        <Cover src={book?.cover} />

        <Title
          name={book?.name}
          authorName={book?.author.name}
          isFavorite={book?.isFavorite}
        />

        <p dangerouslySetInnerHTML={{ __html: descriptionWithBreaks }} />
        <DetailOptions />
      </MainCard>

      <Footer />
    </Container>
  );
};
