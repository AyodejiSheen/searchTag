import { View, Text, Pressable, TextInput, ScrollView } from 'react-native'
import React from 'react'
import { FontAwesome, FontAwesome5, MaterialIcons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import ProgressBarComponent from '../components/ProgressBar'
import { Picker } from '@react-native-picker/picker'




const ProfessionScreen = () => {

    const navigation = useNavigation()

    const action = () => {
        navigation.navigate('Bottom')
    }


    return (
        <View >
            <SafeAreaView>
                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ minHeight: "100%" }} >
                    <View className="p-6 h-full justify-between">

                        <View className="space-y-4">
                            <View className="flex justify-between flex-row items-center">
                                <MaterialIcons onPress={() => navigation.goBack()} name="keyboard-arrow-left" size={24} color="black" />
                            </View>

                            <View>
                                <ProgressBarComponent bar={0.8} />
                            </View>

                            <View className="space-y-1.5">
                                <Text className="text-xl font-m_bold" >Fill in you Professional Details</Text>
                            </View>

                            <View className="space-y-4">
                                <View className="space-x-2 border h-12 border-slate-300 rounded-lg font-m_extralight">
                                    <Picker>
                                        <Picker.Item label="Select Profession" value="" color='gray' />
                                        <Picker.Item label="Male" value="male" />
                                        <Picker.Item label="Female" value="female" />
                                        <Picker.Item label="Other" value="other" />
                                    </Picker>
                                </View>

                                <View className="p-2  space-x-2 border border-slate-300 rounded-lg">
                                    <TextInput placeholder='Location' className="font-base w-max pr-3 text-base" />
                                </View>
                            </View>
                        </View>




                        <View>
                            <Pressable onPress={action} className="bg-[#43A97A] py-4 rounded-lg">
                                <Text className="text-center text-base font-base text-white">Finish</Text>
                            </Pressable>
                        </View>

                    </View>
                </ScrollView>
            </SafeAreaView>
        </View>
    )
}

export default ProfessionScreen