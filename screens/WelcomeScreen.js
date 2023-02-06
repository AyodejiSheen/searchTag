import { View, Text, StatusBar, Alert, StyleSheet, Pressable } from 'react-native'
import React, { useRef, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { MaterialIcons } from '@expo/vector-icons';
import PhoneInput from "react-native-phone-number-input";
import { useNavigation } from '@react-navigation/native';




const WelcomeScreen = () => {

    const [phoneNumber, setphoneNumber] = useState('');
    const phoneInput = useRef(null);

    const navigation = useNavigation();

    const action = () => {
        navigation.navigate('Authenticate')
    }


    return (
        <View>
            <SafeAreaView>
                <View className="p-6 space-y-3 h-full justify-between">
                    <View className="space-y-4">
                        <Pressable onPress={() => navigation.goBack()} className="">
                            <MaterialIcons name="keyboard-arrow-left" size={24} color="black" />
                        </Pressable>

                        <View className="space-y-5">
                            <View className="space-y-1.5">
                                <Text className="text-2xl font-m_bold" >Welcome Here</Text>
                                <Text className="text-base font-base">Log in or Sign up for an account</Text>
                            </View>

                            <View className="space-y-2">
                                <View className="border h-12 flex items-center flex-row border-slate-400 rounded-lg">
                                    <PhoneInput
                                        ref={phoneInput}
                                        defaultValue={phoneNumber}
                                        defaultCode="US"
                                        layout="first"
                                        onChangeText={(text) => {
                                            setphoneNumber(text);
                                        }}
                                        onChangeFormattedText={text => {
                                            setphoneNumber(text);
                                        }}
                                        containerStyle={{ backgroundColor: "none", width: "100%" }}
                                        textContainerStyle={{ backgroundColor: "none", paddingVertical: 0 }}
                                        withShadow
                                        autoFocus
                                    />
                                </View>
                                <Text className="text-slate-500 text-sm">You will receive an SMS verification that may apply message and data rates.</Text>
                            </View>
                        </View>
                    </View>

                    <View>
                        <Pressable onPress={action} className="bg-[#43A97A] py-4 rounded-lg">
                            <Text className="text-center text-white">Send Verification Code</Text>
                        </Pressable>
                    </View>

                </View>
            </SafeAreaView>
        </View>
    )
};




export default WelcomeScreen;