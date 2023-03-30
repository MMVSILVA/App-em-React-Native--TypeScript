import styled, { css } from 'styled-components/native'
import { RFValue, RFPercentage } from 'react-native-responsive-fontsize'

interface VariantProps {
  variant?: 'fim' | 'texto'
}

export const Container = styled.View<VariantProps>`
  ${({ variant }) => variant === 'fim' && css`margin-top: ${RFValue(170)}px`}
  width: 100%;
  padding: ${RFValue(8)}px;
  box-shadow: 60px -16px teal;
  transition: all 0.5s;
  box-shadow: 60px -16px teal;
  
`;

export const ButtonStyle = styled.TouchableOpacity<VariantProps>`
  width: 100%;
  padding: ${RFValue(10)}px;
  font-size: ${RFValue(10)}px;
  height: ${RFPercentage(8)}px;
  background-color: ${({ theme, variant }) => variant === 'fim' ? theme.colors.shape : theme.colors.secondary2};
  margin-top: ${RFValue(10)}px;
  border-radius: ${RFValue(8)}px;
  align-items: center;

 
`;

export const Title = styled.Text<VariantProps>`
  /* color: ${({ theme }) => theme.colors.shape}; */
   color: ${({ theme, variant }) => variant === 'fim' ? theme.colors.secondary : theme.colors.text_dark};
  font-size: ${RFValue(24)}px;
  font-weight: bold;
`;