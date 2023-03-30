import { createBottomTabNavigator, BottomTabNavigationProp} from '@react-navigation/bottom-tabs'
import { MaterialIcons } from '@expo/vector-icons';
import { Dashboard } from '../pages/Dashboard'
import { useTheme } from 'styled-components'
import { ListExpenses } from '../pages/ListExpenses'
import { SearchExpenses } from '../pages/SearchExpenses'

//tipagem das rotas
type AppRoutes = {
  dashboard: undefined;//sem parâmetros
  listExpenses: undefined;
  searchExpenses: undefined;
}

export type AppNavigatorRoutesProps = 
BottomTabNavigationProp<AppRoutes>/*navegar de uma pagina p/outra*/ 

const{ Navigator, Screen} = 
createBottomTabNavigator<AppRoutes>()

export function AppRoutes(){
  const theme = useTheme()
  return(
    <Navigator screenOptions={
    {/*Retira o cabeçalho no título */
      headerShown: false,
      tabBarLabelPosition:"beside-icon",
      tabBarActiveTintColor: theme.colors.secondary,
      tabBarInactiveTintColor: theme.colors.text,
      tabBarShowLabel: true, /*retira o título de baixo */
      tabBarStyle:{
        height: 50
      }


    }}>
      <Screen 
       name= "dashboard"
       component={Dashboard}
       options={{
        tabBarLabel: "Adicionar",
        tabBarIcon: (({size , color}) =>
          <MaterialIcons
            name="add"
            size={size}
            color={color}
          />
          )
        }}
      />

       <Screen 
       name= "listExpenses"
       component={ListExpenses}/*componentes */
       options={{
        tabBarLabel:"Lista de gastos",
        tabBarIcon: (({size , color}) =>
          <MaterialIcons
            name="playlist-add"
            size={size}
            color={color}
          />
          )
        }}
      />
      

       <Screen 
       name= "searchExpenses"
       component={SearchExpenses}
       options={{
        tabBarLabel:"Pesquisa de gastos",
        tabBarIcon: (({size , color}) =>
          <MaterialIcons
            name="search"
            size={size}
            color={color}
          />
          )
        }}
      />


    </Navigator>
  )
}