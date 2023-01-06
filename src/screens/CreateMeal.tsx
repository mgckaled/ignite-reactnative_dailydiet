import { useNavigation } from '@react-navigation/native'
import { VStack } from 'native-base'

import { ScreenHeader } from '@components/ScreenHeader'

export function CreateMeal() {
	const navigation = useNavigation()

	function handleGoBack() {
		navigation.goBack()
	}

	return (
		<VStack flex={1}>
			<ScreenHeader
				onPress={handleGoBack}
				headerBgColor="gray.300"
				title="Nova Refeição"
			/>
		</VStack>
	)
}
