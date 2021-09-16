import React from 'react';
import {
  Amount,
  Category,
  CategoryIcon,
  CategoryTitle,
  Container, Date, Footer, Title,
} from './styles';

export interface TransactionType {
  type: "income" | "dispense";
}

export interface Category {
  id: string;
  name: string;
  icon: string;
}

export interface TransactionCardProps extends TransactionType {
  id: string;
  title: string;
  amount: number;
  category: Category;
  date: number;
}

interface Props {
  data: TransactionCardProps
}

export function TransactionCard({ data }: Props) {
  return (
    <Container>

      <Title>{data.title}</Title>

      <Amount type={data.type}>
        {data.type === 'dispense' && '- '}
        {data.amount}
      </Amount>

      <Footer>
        <Category>
          <CategoryIcon name={data.category.icon} />
          <CategoryTitle>{data.category.name}</CategoryTitle>
        </Category>
        <Date>{data.date}</Date>
      </Footer>
    </Container>
  );
}
