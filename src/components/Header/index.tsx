import { Container, Avatar, Logo, Tab, Head, ListItem, UnorderedList} from './styles'
import logoImg from '../../assets/Logo.svg'


export function Header() {
  return (
    <Container>

      <Head>
        <Logo src={logoImg} alt="Logo do SSBook" />

        <Avatar src="https://github.com/lamenkazu.png" alt="Foto do usuário" />
      </Head>

      

      <Tab>
        <UnorderedList >
          <ListItem $isselected='true'>Meus livros</ListItem>
          <ListItem>Emprestados</ListItem>
        </UnorderedList>
      </Tab>

    </Container>
  )
}