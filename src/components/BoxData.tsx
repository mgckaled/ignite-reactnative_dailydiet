import { Box, Heading, IBoxProps, Text, VStack } from 'native-base'

type Props = IBoxProps & {
	data: string
	boxText: string
	boxColor: 'gray.200' | 'green.100' | 'red.100'
}

export function BoxData({ data, boxText, boxColor, ...rest }: Props) {
	return (
		<Box
			size="full"
			p={1}
			rounded={10}
			bg={boxColor}
			justifyContent="center"
			alignItems="center"
			{...rest}
		>
			<VStack alignItems="center">
				<Heading fontSize="2xl" color="gray.700" fontFamily="heading">
					{data}
				</Heading>
				<Text fontSize="sm" fontFamily="body" color="gray.600">
					{boxText}
				</Text>
			</VStack>
		</Box>
	)
}
