import { useState } from "react";

import { Container, Tab, UnorderedList, ListItem, Head } from "./styles";
import { Section } from "../../components/Section";
import { MainCard } from "../../components/MainCard";
import { Footer } from "../../components/Footer";
import { FavBooks } from "../../components/FavBooks";
import { FavAuthors } from "../../components/FavAuthors";
import { LibTags } from "../../components/LibTags";
import { LibBooks } from "../../components/LibBooks";

export function Home() {
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  return (
    <Container>
      <Head>
        <Tab>
          <UnorderedList>
            <ListItem $isSelected>Meus livros</ListItem>
            <ListItem>Emprestados</ListItem>
          </UnorderedList>
        </Tab>

        <Section title="Livros favoritos" hasMore>
          <FavBooks />
        </Section>
      </Head>

      <MainCard>
        <Section title="Autores favoritos" hasMore>
          <FavAuthors />
        </Section>

        <Section title="Biblioteca">
          <LibTags
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />

          <LibBooks selectedCategory={selectedCategory} />
        </Section>
      </MainCard>

      <Footer />
    </Container>
  );
}
