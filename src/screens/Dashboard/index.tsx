import React from 'react';
import { HighlightCard } from '../../components/HighlightCard';
import { Category, TransactionCard, TransactionCardProps } from '../../components/TransactionCard';
import {
  Container,
  Greeting,
  GreetingText,
  Header,
  HighlightCards,
  LogoutIcon,
  Title,
  TransactionCards,
  Transactions,
  UserImage,
  UserInfo,
  UserName,
  UserWrapper
} from './styles';

export function Dashboard() {
  const categorys: Category[] = [
    {
      id: '1',
      name: 'Vendas',
      icon: 'dollar-sign'
    },
    {
      id: '2',
      name: 'Alimentação',
      icon: 'coffee'
    },
    {
      id: '3',
      name: 'Casa',
      icon: 'shopping-bag'
    },
  ];
  const transactions: TransactionCardProps[] = [
    {
      id: '1',
      title: 'Desenvolvimento de site',
      amount: 1200000,
      category: categorys[0],
      date: 1631739135296,
      type: 'income'
    },
    {
      id: '2',
      title: 'Desenvolvimento',
      amount: 120000,
      category: categorys[1],
      date: 1631739135296,
      type: 'dispense'
    },
    {
      id: '3',
      title: 'site',
      amount: 25000,
      category: categorys[2],
      date: 1631739135296,
      type: 'income'
    }
  ];
  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <UserImage source={{ uri: 'https://github.com/VictorBorzaquel.png' }} />

            <Greeting>
              <GreetingText>Olá,</GreetingText>

              <UserName>Victor</UserName>
            </Greeting>
          </UserInfo>

          <LogoutIcon name="power" />
        </UserWrapper>
      </Header>

      <HighlightCards>
        <HighlightCard
          type="up"
          title="Entradas"
          amount="R$ 17.400,00"
          lastTransaction="Última entrada dia 13 de abril"
        />
        <HighlightCard
          type="down"
          title="Saidas"
          amount="R$ 1.259,00"
          lastTransaction="Última saida dia 03 de abril"
        />
        <HighlightCard
          type="total"
          title="Total"
          amount="R$ 16.141,00"
          lastTransaction="01 à 16 de abril"
        />
      </HighlightCards>

      <Transactions>
        <Title>Listagem</Title>
        <TransactionCards
          data={transactions}
          keyExtractor={item => item.id}
          renderItem={({ item }) => <TransactionCard data={item} />}
        />
      </Transactions>
    </Container>
  );
}
