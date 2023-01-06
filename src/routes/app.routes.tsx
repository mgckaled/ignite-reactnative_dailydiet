import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Home } from '@screens/Home'
import { Stattistics } from '@screens/Statistics'

const { Navigator, Screen } = createNativeStackNavigator()

export function AppRoutes() {
	return (
		<Navigator screenOptions={{ headerShown: false }}>
			<Screen name="home" component={Home} />
			<Screen name="statistics" component={Stattistics} />
		</Navigator>
	)
}
