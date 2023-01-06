import { HStack, Image, Pressable, Text } from 'native-base'

type Props = {
	hour: string
	title: string
	color: string
}

export function MealCard({ hour, title, color }: Props) {
	return (
		<Pressable
			flexDirection="row"
			w="full"
			mt={2}
			mb={1}
			py={3}
			px={4}
			bg="gray.100"
			borderWidth={1}
			borderColor="gray.400"
			rounded="md"
			alignContent="center"
			alignItems="center"
			justifyContent="space-between"
			onPress={() => console.log("I'm Pressed")}
		>
			<HStack flex={1} alignItems="center">
				<Text color="gray.500" fontSize="sm" fontFamily="heading">
					{hour}
				</Text>
				<Text ml={2} color="gray.400" fontSize="md">
					|
				</Text>
				<Text flex={1} ml={2} color="gray.400" fontSize="md" numberOfLines={1}>
					{title}
				</Text>
			</HStack>
			<Image
				w={4}
				h={4}
				rounded="full"
				backgroundColor={color}
				alt="Indicador de Dieta"
			/>
		</Pressable>
	)
}
