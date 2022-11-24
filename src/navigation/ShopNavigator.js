import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMedicamentoScreen from "../screens/CategoryMedicamentoScreen";
import MedicamentoDetailsScreen from "../screens/MedicamentoDetailsScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default ShopNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HP Farma" component={CategoriesScreen} />
        <Stack.Screen name="Medicamento" component={CategoryMedicamentoScreen} />
        <Stack.Screen name="Detalles" component={MedicamentoDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
