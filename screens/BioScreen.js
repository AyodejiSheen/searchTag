import { View, Text, Pressable, TextInput, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { FontAwesome, FontAwesome5, MaterialIcons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';
import ProgressBarComponent from '../components/ProgressBar';
import { Picker } from '@react-native-picker/picker'




const BioScreen = () => {

    const navigation = useNavigation()

    const action = () => {
        navigation.navigate('Professiondata')
    }


    return (
        <View >
            <SafeAreaView>
                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ minHeight: "100%" }} >
                    <View className="p-6 h-full justify-between">

                        <View className="space-y-4">
                            <View className="flex justify-between flex-row items-center">
                                <MaterialIcons onPress={() => navigation.goBack()} name="keyboard-arrow-left" size={24} color="black" />
                                <Text className="text-green-500 text-base">Change number</Text>
                            </View>

                            <View>
                                <ProgressBarComponent bar={0.4}/>
                            </View>

                            <View className="space-y-1.5">
                                <Text className="text-xl font-m_bold" >Fill in your bio to Get started</Text>
                                <Text className="text-base font-base">This data will be displayed in your profile for security</Text>
                            </View>
                        </View>

                        <View className=" mx-auto">
                            <FontAwesome name="user-circle-o" size={120} color="rgba(0,0,0, 0.1)" />
                            <View className="bg-[#43A97A] w-max bottom-0 right-2 h-max p-1 rounded-lg absolute">
                                <MaterialIcons name="edit" size={22} color="white" />
                            </View>
                        </View>


                        <View className="space-y-4">
                            <View className="p-2  space-x-2 border border-slate-300 rounded-lg">
                                <TextInput placeholder='First Name' className="font-base w-max pr-3 text-base" />
                            </View>

                            <View className="p-2  space-x-2 border border-slate-300 rounded-lg">
                                <TextInput placeholder='Last Name' className="font-base w-max pr-3 text-base" />
                            </View>

                            <View className="p-2  space-x-2 border border-slate-300 rounded-lg">
                                <TextInput placeholder='Email Address' className="font-base w-max pr-3 text-base" />
                            </View>

                            <View className="p-2  space-x-2 border border-slate-300 rounded-lg">
                                <TextInput placeholder='Location' className="font-base w-max pr-3 text-base" />
                            </View>

                            <View className="space-x-2 border h-12 border-slate-300 rounded-lg font-m_extralight">
                                <Picker>
                                    <Picker.Item label="Select the Language you Speak" value="" color='gray' />
                                    <Picker.Item label="English" value="English" />
                                    <Picker.Item label="French" value="French" />
                                    <Picker.Item label="Other" value="other" />
                                </Picker>
                            </View>
                        </View>

                        <View>
                            <Pressable onPress={action} className="bg-[#43A97A] py-4 rounded-lg">
                                <Text className="text-center text-base font-base text-white">Continue</Text>
                            </Pressable>
                        </View>

                    </View>
                </ScrollView>
            </SafeAreaView>
        </View>
    )
}

export default BioScreen