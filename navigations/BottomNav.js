
import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import StackNav from './StackNav';
import { AntDesign, Entypo, FontAwesome, FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';

import { Feather, MaterialIcons } from '@expo/vector-icons';

const BottomNav = () => {

    const Tab = createBottomTabNavigator();


    return (

        <Tab.Navigator backBehavior="Main" initialRouteName="Main" screenOptions={{
            tabBarShowLabel: false, tabBarStyle: { ...styles.tab }, headerShown: false, tabBarHideOnKeyboard: true
        }}>
            <Tab.Screen name="Main" component={StackNav} options={{
                tabBarIcon: ({ size, focused, color }) => (
                    <View>
                        {focused ?
                            <View>
                                <Feather name="home" size={20} color="#43A97A" style={{ textAlign: "center" }} />
                                <Text className="text-[#43A97A]">Home</Text>
                            </View>
                            :
                            <View>
                                <Feather name="home" size={20} color="#A5A5A6" style={{ textAlign: "center" }} />
                                <Text className="text-[#A5A5A6]">Home</Text>
                            </View>
                        }
                    </View>
                )
            }} />

            <Tab.Screen name="Favourite" component={StackNav} options={{
                tabBarIcon: ({ size, focused, color }) => (
                    <View>
                        {focused ?
                            <View>
                                <MaterialIcons name="favorite-outline" size={20} color="#43A97A" style={{ textAlign: "center" }} />
                                <Text className="text-center text-[#43A97A]">Favourite</Text>
                            </View>
                            :
                            <View>
                                <MaterialIcons name="favorite-outline" size={20} color="#A5A5A6" style={{ textAlign: "center" }} />
                                <Text className="text-[#A5A5A6]">Favourite</Text>
                            </View>
                        }
                    </View>
                )
            }} />


            <Tab.Screen name="Notifications" component={StackNav} options={{
                tabBarIcon: ({ size, focused, color }) => (
                    <View>
                        {focused ?
                            <View>
                                <FontAwesome5 name="bell" size={20} color="#43A97A" style={{ textAlign: "center" }} />
                                <Text className="text-center text-[#43A97A]">Notifications</Text>
                            </View>
                            :
                            <View>
                                <FontAwesome5 name="bell" size={20} color="#A5A5A6" style={{ textAlign: "center" }} />
                                <Text className="text-[#A5A5A6]">Notifications</Text>
                            </View>
                        }
                    </View>
                )
            }} />


            <Tab.Screen name="Profile" component={StackNav} options={{
                tabBarIcon: ({ size, focused, color }) => (
                    <View>
                        {focused ?
                            <View>
                                <FontAwesome5 name="user" size={20} color="#43A97A" style={{ textAlign: "center" }} />
                                <Text className="text-center text-[#43A97A]">Profile</Text>
                            </View>
                            :
                            <View>
                                <FontAwesome5 name="user" size={20} color="#A5A5A6" style={{ textAlign: "center" }} />
                                <Text className="text-[#A5A5A6]">Profile</Text>
                            </View>
                        }
                    </View>
                )
            }} />





        </Tab.Navigator>



    )
}



const styles = StyleSheet.create({
    tab: {
        elevation: 0,
        backgroundColor: "white",
        height: 60,
        padding: 8
    },
})

export default BottomNav