import {
	HStack,
	Heading,
	IPressableProps,
	Pressable,
	Text,
	VStack
} from 'native-base'
import { ArrowUpRight } from 'phosphor-react-native'

type Props = IPressableProps & {
	percentMeal: number
	colorIcon: string
}

export function StatisticBox({ percentMeal, ...rest }: Props) {
	return (
		<Pressable
			flex={1}
			onPress={() => console.log("I'm Pressed")}
			maxH={32}
			maxW={96}
			p={1}
			rounded={8}
			borderWidth={1}
			borderStyle="solid"
			borderColor="green.400"
			bg="green.100"
			{...rest}
		>
			<HStack ml={310}>
				<ArrowUpRight size={30} color="#B9BBBC" />
			</HStack>

			<VStack justifyContent="center" alignItems="center">
				<Heading fontSize="2xl" color="gray.600" fontFamily="heading">
					{percentMeal}%
				</Heading>
				<Text fontSize="sm" fontFamily="body" color="gray.600">
					das refeições dentro da dieta
				</Text>
			</VStack>
		</Pressable>
	)
}
