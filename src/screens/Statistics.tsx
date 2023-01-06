import { useNavigation } from '@react-navigation/native'
import { Box, HStack, Pressable, Stack, Text, VStack } from 'native-base'
import { ArrowLeft } from 'phosphor-react-native'

import { BoxData } from '@components/BoxData'

export function Statistics() {
	const navigation = useNavigation()

	function handleGoBack() {
		navigation.goBack()
	}

	return (
		<Stack flex={1} safeAreaTop>
			<Pressable
				bg="green.100"
				paddingX={6}
				paddingTop={4}
				onPress={handleGoBack}
			>
				<ArrowLeft size={30} />
			</Pressable>
			<VStack flex={1} alignContent="center">
				<BoxData
					maxH={24}
					data={'90,86%'}
					boxText={'das refeições dentro da dieta'}
					boxColor={'green.100'}
				/>
				<Box flex={1} bg="gray.100">
					<VStack flex={1} alignItems="center" justifyItems="center">
						<Text fontSize="lg" fontFamily="heading" my={5}>
							Estatísticas Gerais
						</Text>
						<BoxData
							maxH={32}
							maxW={96}
							data={'22'}
							boxText={'melhor sequência de pratos dentro da dieta'}
							boxColor={'gray.200'}
						/>
						<BoxData
							my={5}
							maxH={32}
							maxW={96}
							data={'109'}
							boxText={'refeições registradas'}
							boxColor={'gray.200'}
						/>
						<HStack flex={1} mx={10}>
							<BoxData
								maxH={32}
								maxW={40}
								data={'99'}
								boxText={'refeições dentro da dieta'}
								boxColor={'green.100'}
							/>
							<BoxData
								ml={4}
								maxH={32}
								maxW={40}
								data={'10'}
								boxText={'refeições fora da dieta'}
								boxColor={'red.100'}
							/>
						</HStack>
					</VStack>
				</Box>
			</VStack>
		</Stack>
	)
}
