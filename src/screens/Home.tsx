import { HStack, Icon, Text, VStack, useTheme } from 'native-base'
import { ForkKnife, Plus } from 'phosphor-react-native'
import { useState } from 'react'

import { Button } from '@components/Button'
import { StatisticBox } from '@components/StatisticBox'
import { UserImage } from '@components/UserImage'

export function Home() {
	const { colors } = useTheme()
	const [userPhoto, setUserPhoto] = useState('https://github.com/mgckaled.png')

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
				<StatisticBox mb={6} percent="88,99" />
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
				/>
			</VStack>
		</VStack>
	)
}
