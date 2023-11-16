import { Capsule } from "../../components/Capsule";
import { Section } from "../../components/Section";
import { Container, Main, FavBooks, 
         FavAuthors, FavAuthor, 
         FavBook, LibTags, LibBooks,
         LibBook } from "./styles";

export function Home() {
  return (
    <Container>

      <Section title="Livros favoritos" hasMore>
        <FavBooks>
          <FavBook>
            <img src="https://github.com/lamenkazu.png" alt="Capa do livro" />
            <h3>O duque e eu (Os Bridgertons – Livro 1): O livro de Daphne</h3>
            <span>Julia Quinn</span>
          </FavBook>

          <FavBook>
            <img src="https://github.com/lamenkazu.png" alt="Capa do livro" />
            <h3>O duque e eu (Os Bridgertons – Livro 1): O livro de Daphne</h3>
            <span>Julia Quinn</span>
          </FavBook>

          <FavBook>
            <img src="https://github.com/lamenkazu.png" alt="Capa do livro" />
            <h3>O duque e eu (Os Bridgertons – Livro 1): O livro de Daphne</h3>
            <span>Julia Quinn</span>
          </FavBook>
        </FavBooks>
      </Section>
      
      


      <Main>
        <Section title="Autores favoritos" hasMore>
          <FavAuthors>
            <FavAuthor>
              <img src="https://github.com/lamenkazu.png" alt="" />
              <div>
                <h3>Connie Brockway</h3>
                <span>6 livros</span>
              </div>
            </FavAuthor>

            <FavAuthor>
              <img src="https://github.com/lamenkazu.png" alt="" />
              <div>
                <h3>Connie Brockway</h3>
                <span>6 livros</span>
              </div>
            </FavAuthor>

            <FavAuthor>
              <img src="https://github.com/lamenkazu.png" alt="" />
              <div>
                <h3>Connie Brockway</h3>
                <span>6 livros</span>
              </div>
            </FavAuthor>
          </FavAuthors>
        </Section>

        <Section title="Biblioteca">

          <LibTags>
            <Capsule title="Todos" isSelected/>
            <Capsule title="Romance"/>
            <Capsule title="Aventura"/>
            <Capsule title="Comédia"/>
          </LibTags>

          <LibBooks>
            <LibBook>
              <img src="https://github.com/lamenkazu.png" alt="" />
              <div>
                <h3>Connie Brockway</h3>
                <span>6 livros</span>
              </div>
            </LibBook>

            <LibBook>
              <img src="https://github.com/lamenkazu.png" alt="" />
              <div>
                <h3>Connie Brockway</h3>
                <span>6 livros</span>
              </div>
            </LibBook>

            <LibBook>
              <img src="https://github.com/lamenkazu.png" alt="" />
              <div>
                <h3>Connie Brockway</h3>
                <span>6 livros</span>
              </div>
            </LibBook>

            <LibBook>
              <img src="https://github.com/lamenkazu.png" alt="" />
              <div>
                <h3>Connie Brockway</h3>
                <span>6 livros</span>
              </div>
            </LibBook>

            <LibBook>
              <img src="https://github.com/lamenkazu.png" alt="" />
              <div>
                <h3>Connie Brockway</h3>
                <span>6 livros</span>
              </div>
            </LibBook>

            <LibBook>
              <img src="https://github.com/lamenkazu.png" alt="" />
              <div>
                <h3>Connie Brockway</h3>
                <span>6 livros</span>
              </div>
            </LibBook>
          </LibBooks>


        </Section>
      </Main>

      



    </Container>
  )
}
