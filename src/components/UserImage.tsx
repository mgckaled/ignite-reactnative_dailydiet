import { IImageProps, Image } from 'native-base'

type Props = IImageProps & {}

export function UserImage({ ...rest }: Props) {
	return (
		<Image
			w={10}
			h={10}
			rounded="full"
			borderWidth={1}
			borderColor="gray.600"
			{...rest}
		/>
	)
}
