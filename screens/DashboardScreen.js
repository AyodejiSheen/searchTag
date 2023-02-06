import { View, Text, ImageBackground, ScrollView, Image, TextInput, Pressable } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView } from 'react-native-safe-area-context';


const DashboardScreen = () => {


    const users = [
        {
            id: 1,
            name: 'Adebimpe Olujade',
            image: require('../assets/images/user3.png')
        },
        {
            id: 2,
            name: 'Robert Fox',
            image: require('../assets/images/user2.png')
        },
        {
            id: 3,
            name: "Kristin Watson",
            image: require('../assets/images/user1.png')
        }
    ]


    return (
        <View >
            <ScrollView showsVerticalScrollIndicator={false}>
                <StatusBar  style='light' />
                <ImageBackground source={require('../assets/images/Intersect.png')} resizeMode="cover" className="h-[511px]">
                    <View className="flex-row  justify-between items-center px-4 pt-14">
                        <View className="flex-row">
                            <Text className="text-xl font-base text-white">Hello, </Text>
                            <Text className="font-m_semibold text-xl text-white">Bukky</Text>
                        </View>

                        <View>
                            <Image source={require('../assets/images/user.png')} resizeMode="contain" />
                        </View>
                    </View>
                    <View className="px-4 mt-8">
                        <Text className="text-[38px] font-base my-12 text-white">Find professionals on your contact list</Text>
                        <View className="flex-row items-center bg-white px-6 rounded-lg">
                            <FontAwesome name="search" size={20} color="#A5A5A6" />
                            <TextInput
                                placeholder="Search Profession"
                                className="border border-white px-6 text-base bg-white h-12 rounded-lg"
                            />
                        </View>
                    </View>
                </ImageBackground>

                <View className="space-y-3 pb-6">

                    <View className="px-4">
                        <Text className="text-lg font-base text-[#38AE7A] text-right">See all Contacts</Text>
                    </View>

                    <View className="flex-row px-4 justify-between">
                        {
                            users.map((person) => {
                                return (
                                    <Pressable key={person.id} className="py-3 w-[31%] shadow shadow-slate-600 bg-white px-3 space-y-2 rounded-lg">
                                        <Image
                                            resizeMode="cover"
                                            className="w-16 h-16 mx-auto"
                                            alt={person.name}
                                            source={person.image}
                                        />

                                        <View className="space-y-1.5">
                                            <Text className="text-lg font-m_medium text-center">{person.name}</Text>
                                            <Text className="text-center font-m_medium text-slate-600">Ibadan</Text>
                                            <Text className="text-[#38ae7a] text-center text-base font-base">Profession</Text>
                                            <Text className="text-center italic font-m_light text-slate-600">English</Text>
                                        </View>
                                    </Pressable>
                                )
                            })
                        }
                    </View>

                </View>
            </ScrollView>
        </View>
    )
}

export default DashboardScreen