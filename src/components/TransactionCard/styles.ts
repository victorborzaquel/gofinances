import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";
import { Feather } from "@expo/vector-icons";
import { TransactionType } from ".";

export const Container = styled.View`
  padding: 17px 24px;
  background-color: ${({ theme }) => theme.colors.shape};
  margin-bottom: ${RFValue(16)}px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.title};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
`;
export const Amount = styled.Text<TransactionType>`
  color: ${({ theme, type }) =>
    type === "dispense" ? theme.colors.attention : theme.colors.success};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(20)}px;
`;

export const Footer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding-top: ${RFValue(19)}px;
`;

export const Category = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const CategoryIcon = styled(Feather)`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(20)}px;
  margin-right: 7px;
`;
export const CategoryTitle = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
`;

export const Date = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
`;
