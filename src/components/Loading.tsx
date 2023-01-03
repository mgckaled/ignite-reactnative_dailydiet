import { Center, Spinner } from 'native-base'

export function Loading() {
	return (
		<Center flex={1} bg="gray.100">
			<Spinner color="green.700" />
		</Center>
	)
}
