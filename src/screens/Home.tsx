import { useNavigation } from '@react-navigation/native'
import {
	HStack,
	Heading,
	Icon,
	SectionList,
	Text,
	VStack,
	useTheme
} from 'native-base'
import { ForkKnife, Plus } from 'phosphor-react-native'
import { useState } from 'react'

import { Button } from '@components/Button'
import { MealCard } from '@components/MealCard'
import { StatisticBox } from '@components/StatisticBox'
import { UserImage } from '@components/UserImage'

export function Home() {
	const { colors } = useTheme()
	const [userPhoto, setUserPhoto] = useState('https://github.com/mgckaled.png')

	const [meals, setMeals] = useState([
		{
			title: '12.08.22',
			data: ['X-Tudo', 'Sanduíche', 'Lasanha de Frango com queijo']
		},
		{
			title: '11.08.22',
			data: ['X-Tudo', 'Torta de chocolate']
		}
	])

	const navigation = useNavigation()

	function handleStatistics() {
		navigation.navigate('statistics')
	}

	function handleCreateMeal() {
		navigation.navigate('create')
	}

	return (
		<VStack flex={1} bg="gray.100" safeArea>
			<HStack mt={8} mx={8} alignItems="center" justifyContent="space-between">
				<HStack>
					<ForkKnife size={46} />
					<VStack>
						<Text fontFamily="heading">Daily</Text>
						<Text fontFamily="heading">Diet</Text>
					</VStack>
				</HStack>
				<UserImage source={{ uri: userPhoto }} alt="Imagem do usuário" />
			</HStack>
			<VStack flex={1} mt={8} mx={8}>
				<StatisticBox
					flex={1}
					mb={6}
					percentMeal={88.99}
					colorIcon={''}
					onPress={handleStatistics}
				/>
				<Text mb={1} fontFamily="body" fontSize="md">
					Refeições
				</Text>
				<Button
					title="Nova Refeição"
					leftIcon={
						<Icon
							as={Plus}
							size={30}
							style={{ backgroundColor: colors.gray[300] }}
						/>
					}
					onPress={handleCreateMeal}
				/>
				<SectionList
					flex={1}
					mt={3}
					mb={2}
					sections={meals}
					keyExtractor={item => item}
					renderItem={({ item }) => (
						<MealCard hour={'12:00'} title={item} color={colors.green[400]} />
					)}
					renderSectionHeader={({ section }) => (
						<Heading mt={3} color="gray.600" fontSize="lg" fontFamily="heading">
							{section.title}
						</Heading>
					)}
					ListEmptyComponent={() => (
						<Text
							color="gray.600"
							textAlign="center"
							fontFamily="body"
							fontSize="lg"
						>
							Não há registradas ainda. {'\n'}
							Vamos fazer exercícios hoje?
						</Text>
					)}
				/>
			</VStack>
		</VStack>
	)
}
