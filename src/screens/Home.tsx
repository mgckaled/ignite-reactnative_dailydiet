import { HStack, Text, VStack } from 'native-base'
import { ForkKnife } from 'phosphor-react-native'
import { useState } from 'react'

import { UserImage } from '@components/UserImage'

export function Home() {
	const [userPhoto, setUserPhoto] = useState('https://github.com/mgckaled.png')

	return (
		<VStack flex={1} bg="gray.100" mt={6}>
			<HStack mt={8} mx={7} alignItems="center" justifyContent="space-between">
				<HStack ml={1}>
					<ForkKnife size={46} />
					<VStack>
						<Text fontFamily="heading">Daily</Text>
						<Text fontFamily="heading">Diet</Text>
					</VStack>
				</HStack>
				<UserImage source={{ uri: userPhoto }} alt="Imagem do usuário" />
			</HStack>
		</VStack>
	)
}
