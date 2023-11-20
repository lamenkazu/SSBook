import { Link, useParams } from "react-router-dom";
import { Container, Cover, Title, Fav, Protection } from "./styles";
import { useQuery, QueryResult } from "@apollo/client";
import { GET_BOOK_DATA, GetBookDataResponse } from "./queries";

import optionsImg from "../../assets/options.svg";
import backImg from "../../assets/back.svg";

import { useState, useEffect } from "react";
import { MainCard } from "../../components/MainCard";
import { Footer } from "../../components/Footer";
import { DetailOptions } from "../../components/DetailOptions";
// import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Details = () => {
  const { id } = useParams();

  const { data }: QueryResult<GetBookDataResponse> = useQuery(GET_BOOK_DATA, {
    variables: { id: id },
  });

  const book = data?.book;

  const descriptionWithBreaks =
    book?.description.replace(/\n/g, "<br />") || "";

  //Options
  const [isOptionsMenuVisible, setIsOptionsMenuVisible] = useState(false); //Visibilidade
  const toggleOptionsMenu = () => {
    setIsOptionsMenuVisible(!isOptionsMenuVisible);
  };

  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []); // The empty dependency array ensures this effect runs only once when the component mounts

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

        <Title>
          <div>
            <h2> {book?.name} </h2>
            <span> {book?.author.name} </span>
          </div>
          <Fav
            $isfavorite={book?.isFavorite.toString() || "false"}
            alt="Icone de Favorito"
          />
        </Title>

        <p dangerouslySetInnerHTML={{ __html: descriptionWithBreaks }} />
        <DetailOptions />
      </MainCard>

      <Footer />
    </Container>
  );
};
