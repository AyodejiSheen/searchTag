import { View, Text, TextInput, Pressable } from 'react-native'
import React, { useRef, useState } from 'react'
import { MaterialIcons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';




const AuthenticatedCode = () => {

    const navigation = useNavigation()

    const action = () => {
        navigation.navigate('Biodata', { bar: 0.4 })
    }

    const ref_input2 = useRef();
    const ref_input3 = useRef();
    const ref_input4 = useRef();

    return (
        <View>
            <SafeAreaView>
                <View className="p-6 space-y-4 flex h-full justify-between">
                    <View className="space-y-4">
                        <View className="flex justify-between flex-row items-center">
                            <MaterialIcons onPress={() => navigation.goBack()} name="keyboard-arrow-left" size={24} color="black" />
                            <Text className="text-green-500 text-base">Change number</Text>
                        </View>

                        <View className="space-y-1.5">
                            <Text className="text-[24px] font-m_bold" >Enter Authentication Code</Text>
                            <Text className="text-base font-base">Enter the 4-digit thats we have sent via the phone number
                                <Text className="font-m_bold"> +62 813-8172-5977</Text></Text>
                        </View>

                        <View className="flex items-center flex-row justify-center gap-3">
                            <TextInput autoFocus={true} onTextInput={() => ref_input2.current.focus()} returnKeyType="next" maxLength={1} className="border border-slate-300 w-12 rounded-full h-12 text-center text-lg focus:border-green-500" keyboardType='numeric' />
                            <TextInput ref={ref_input2} onTextInput={() => ref_input3.current.focus()} returnKeyType="next" maxLength={1} className="border border-slate-300 w-12 rounded-full h-12 text-center text-lg focus:border-green-500" keyboardType='numeric' />
                            <TextInput ref={ref_input3} onTextInput={() => ref_input4.current.focus()} returnKeyType="next" zmaxLength={1} className="border border-slate-300 w-12 rounded-full h-12 text-center text-lg focus:border-green-500" keyboardType='numeric' />
                            <TextInput ref={ref_input4} maxLength={1} className="border border-slate-300 w-12 rounded-full h-12 text-center text-lg focus:border-green-500" keyboardType='numeric' />
                        </View>





                    </View>

                    <View className="space-y-4">
                        <View>
                            <Pressable onPress={action} className="bg-slate-300 py-4 rounded-lg">
                                <Text className="text-center text-slate-600">Continue</Text>
                            </Pressable>
                        </View>

                        <Text className="text-green-500 text-center text-base">Resend Code</Text>
                    </View>

                </View>
            </SafeAreaView>
        </View>
    )
}

export default AuthenticatedCode