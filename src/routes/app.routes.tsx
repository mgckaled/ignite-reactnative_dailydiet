import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { CreateMeal } from '@screens/CreateMeal'
import { Home } from '@screens/Home'
import { Statistics } from '@screens/Statistics'

const { Navigator, Screen } = createNativeStackNavigator()

export function AppRoutes() {
	return (
		<Navigator screenOptions={{ headerShown: false }}>
			<Screen name="home" component={Home} />
			<Screen name="statistics" component={Statistics} />
			<Screen name="create" component={CreateMeal} />
		</Navigator>
	)
}
