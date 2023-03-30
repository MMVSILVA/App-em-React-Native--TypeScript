import {
  Container,
  Description,
  Amount,
  Local,
  Footer,
  Category,
  Date,
} from "./styles";

import { SpendingStorageDTO } from "../../storage/spending/SpendingStorageDTO";
import { convertDateStringToDate } from "../../Utils/convertdateStringToDate";
import { formatCurrency } from "../../Utils/formatCurrency";

type Props = {
  data: SpendingStorageDTO
}
export function TransactionExpenses({data}: Props) {
 
  return (
    <Container>
      
      <Description>{data.name}</Description>

      <Amount>{formatCurrency(data.amount/ 100)}</Amount>

      <Local>{data.local}</Local>

      <Footer>
        <Category>{data.category}</Category>
        <Date>{convertDateStringToDate(data.datePurchase).toLocaleDateString('pt-BR')}</Date> 
      </Footer>

    </Container>
  )
}
