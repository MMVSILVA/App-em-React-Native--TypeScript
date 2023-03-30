import { useState, useEffect, useCallback } from 'react'
import { FlatList } from 'react-native'
import { useFocusEffect } from '@react-navigation/native'
import { Header } from '../../components/Header'
import { TransactionExpenses } from '../../components/TransactionExpenses'
import { spendingGetAll } from '../../storage/spending/spendingGetAll'
import { SpendingStorageDTO } from '../../storage/spending/SpendingStorageDTO'
import {
  Container,
  Transactions
} from './styles'

export function ListExpenses() {
  const [dataExpenses, setDataExpenses] = useState<SpendingStorageDTO[]>([])
//função PARA LEITURA do asynstorage
  async function loadDataSpending() {
    const data = await spendingGetAll()
    console.log('dados do asynstorage: ', data)
    setDataExpenses(data)
  }
  

  // useEffect(() => {
  //    loadDataSpending()
  // }, [])

  useFocusEffect(useCallback(() => {
    loadDataSpending()
  }, []))

  return (
    <Container>
      <Header title='Listagem de Gastos' />

      <Transactions>
        <FlatList 
         data={dataExpenses}
        renderItem={({ item }) =>
          <TransactionExpenses data={item}/>
        }
        showsVerticalScrollIndicator={false}
        />

       

      </Transactions>
    </Container>
  )
}
//FlatList e scroll viw são importadas do react
//FlatList 500 para exibir, carrega a medida da rolagem,melhor performace
//propriedade data(pode ser qualquer nome) e um array com vários objetos
//TransactionExpenses chama a propriedade data com o objeto {item}/>
//showsVerticalScrollIndicator ocultar barra de rolagem vertical
//