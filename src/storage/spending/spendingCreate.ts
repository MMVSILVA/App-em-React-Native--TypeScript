import AsyncStorage from "@react-native-async-storage/async-storage"
import { SPENDING_COLLECTION } from "../storageConfig";
import { spendingGetAll } from "./spendingGetAll";
import { SpendingStorageDTO } from "./SpendingStorageDTO";


export async function spendingCreate(newSpending: SpendingStorageDTO) {
  try {
   const storageSpending = await spendingGetAll()


   const storage = [...storageSpending, newSpending]

   await AsyncStorage.setItem(SPENDING_COLLECTION, JSON.stringify(storage))

  } catch(error){
    console.log(error)
    throw error;
  }
}