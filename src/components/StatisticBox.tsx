import { Heading, IPressableProps, Pressable, Text, VStack } from 'native-base'
import { ArrowUpRight } from 'phosphor-react-native'

type Props = IPressableProps & {
	percent: string
}

export function StatisticBox({ percent, ...rest }: Props) {
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
			<ArrowUpRight size={30} />

			<VStack alignItems="center">
				<Heading fontSize="2xl" color="gray.600" fontFamily="heading">
					{percent}%
				</Heading>
				<Text fontSize="sm" fontFamily="body" color="gray.600">
					das refeições dentro da dieta
				</Text>
			</VStack>
		</Pressable>
	)
}
