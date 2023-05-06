import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Categories from "./pages/Categories";
import Meals from "./pages/Meals";
import Detail from "./pages/Detail";

const Stack = createStackNavigator();

const Router = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen 
                    name="CategoriesPage" 
                    component={Categories} 
                    options={{
                        title: 'Tarif Sepeti' , 
                        headerStyle: {backgroundColor: 'orange'},
                        headerTitleStyle: {color: 'white', fontWeight:"bold", fontStyle:"italic" },
                        headerTitleAlign: "center"
                     }} 
                />
                <Stack.Screen 
                    name="MealsPage" 
                    component={Meals} 
                    options={{
                        title: 'Meals' , 
                        headerStyle: {backgroundColor: 'orange'},
                        headerTitleStyle: {color: 'white'},
                        headerTitleAlign: 'center', 
                        headerTintColor: 'white' ,                
                     }} 
                />
                <Stack.Screen 
                    name="DetailPage" 
                    component={Detail}
                    options={{
                        title: 'Detail' , 
                        headerStyle: {backgroundColor: 'orange'},
                        headerTitleStyle: {color: 'white'},
                        headerTitleAlign: 'center', 
                        headerTintColor: 'white' ,  
                     }} 
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Router;