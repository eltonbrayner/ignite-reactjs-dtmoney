import logoImg from 'src/assets/logo.svg';
import { Container, Content } from './styles';

interface HeaderProps {
  onOpenNewTransactionModal: () => void; //Função não recebe nenhum parametro e não devolve nenhum retorno
}

export function Header({ onOpenNewTransactionModal }: HeaderProps) {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dt money" />
        <button onClick={onOpenNewTransactionModal} type="button">
          Nova tarnsação
        </button>
      </Content>
    </Container>
  );
}
