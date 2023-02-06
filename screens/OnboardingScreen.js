import { View, Text, Pressable, Image, Dimensions, StatusBar } from 'react-native'
import React from 'react'
import AppIntroSlider from 'react-native-app-intro-slider'
import { SafeAreaView } from 'react-native-safe-area-context'
import AsyncStorage from '@react-native-async-storage/async-storage'




const OnboardingScreen = (props) => {

    let deviceWidth = Dimensions.get('window').width
    let { setOnBoarding } = props;


    const onBoardingslides = [
        {
            id: 1,
            title: 'Stay Top of Mind',
            desc: "With SearchTag, you popup when people search for contacts they know who offer your services",
            image: require('../assets/images/slide1.png')
        },
        {
            id: 2,
            title: 'Find a contact who can help',
            desc: "You can find friends on your contact list who offer the services you need.",
            image: require('../assets/images/slide2.png')
        },
        {
            id: 3,
            title: "Never Be Stranded",
            desc: "Use Searchtag to find a friend who works at a company you need to access.",
            image: require('../assets/images/slide3.png')
        }
    ]


    const buttonLabel = (label) => {
        return (
            <View className="mt-6">
                <Text selectable={false} className="text-white  rounded-lg bg-[#43A97A] py-4 text-center font-bold text-base">{label}</Text>
            </View>
        )
    }


    //finish onboarding
    const finishOnboarding = async () => {
        try {
            await AsyncStorage.setItem('searchTagOnboarding6', 'true');
            setOnBoarding(true)
        } catch (err) {
            console.log("setOnboarding error", err)
        }
    }


    return (
        <AppIntroSlider data={onBoardingslides} renderItem={({ item }) => {
            return (
                <View>
                    <StatusBar />
                    <SafeAreaView>
                        <View className="space-y-6">
                            <Image source={item.image} className="w-full object-cover" resizeMode='cover' />
                            <View className="px-14">
                                <Text className="text-3xl text-center font-m_medium ">{item.title}</Text>
                                <Text className="text-center text-lg font-base">{item.desc}</Text>
                            </View>
                        </View>
                    </SafeAreaView>
                </View>
            )
        }}
            activeDotStyle={{ backgroundColor: "#000000", width: 20, height: 6 }}
            dotStyle={{ backgroundColor: 'rgba(0, 0, 0, .2)', width: 20, height: 6 }}
            bottomButton
            renderNextButton={() => buttonLabel("Log in")}
            renderDoneButton={() => buttonLabel("Log in")}
            onDone={() => finishOnboarding()}
        />
    )
}

export default OnboardingScreen