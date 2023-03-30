import { useState } from 'react'
import AsyncStorage from "@react-native-async-storage/async-storage"
import {ScrollView } from 'react-native'
import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Container } from './styles'
import { InputAmount } from '../../components/InputAmount'
import { InputDate } from '../../components/InputDate'
import { convertToDate } from '../../Utils/convertToDate'
import { formatAmount } from '../../Utils/formatAmount'
import { spendingCreate } from '../../storage/spending/spendingCreate'
import { spendingGetAll } from '../../storage/spending/spendingGetAll'


export function Dashboard() {
  
  const [name, setName] = useState('')
  const [amount, setAmount] = useState('')
  const [datePurchase, setDatePurchase] = useState('')
  const [category, setCategory] = useState('')
  const [local, setLocal] = useState('')

  async function  handAddNewSpending(){
    const data = {
      name,
      amount: formatAmount(amount),
      datePurchase: convertToDate(datePurchase),
      category,
      local
    }
    //console.log(data)
    //await AsyncStorage.clear()// limpar o ansyncStorage no0 Android
   //await AsyncStorage.getAllKeys().then(AsyncStorage.multiRemove) ios
    //return
    await spendingCreate(data)
    const response = await spendingGetAll()
    console.log(response)
    setName('')
    setAmount('')
    setDatePurchase('')
    setDatePurchase('')
    setCategory('')
    setLocal('')
  }

  return (
    <Container
    >
      <Header title='Controle de Gastos' />
      <ScrollView>

      <Input
        placeholder='Descrição'
        placeholderTextColor='#808080'
        value={name}
        onChangeText={value => setName(value)}
      />

      <InputAmount
        placeholder='Valor'
        placeholderTextColor='#808080'
        value={amount}
        onChangeText={value => setAmount(value)}
      />

      <InputDate
        placeholder='Data Compra'
        placeholderTextColor='#808080'
        value={datePurchase}
        onChangeText={value => setDatePurchase(value)}
      />

      <Input
        placeholder='Categoria'
        placeholderTextColor='#808080'
        value={category}
        onChangeText={value => setCategory(value)}
      />

      <Input
        placeholder='Local da Compra'
        placeholderTextColor='#808080'
        value={local}
        onChangeText={value => setLocal(value)}
      />

      <Button
        title='Adicionar'
        onPress={handAddNewSpending}
      />
    </ScrollView>

    </Container>
  )
}