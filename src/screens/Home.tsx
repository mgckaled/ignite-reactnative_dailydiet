import { HStack, Text, VStack } from 'native-base'
import { ForkKnife } from 'phosphor-react-native'
import { useState } from 'react'

import { StatisticBox } from '@components/StatisticBox'
import { UserImage } from '@components/UserImage'

export function Home() {
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
			<StatisticBox mt={8} mx={8} percent="88,99" />
		</VStack>
	)
}
