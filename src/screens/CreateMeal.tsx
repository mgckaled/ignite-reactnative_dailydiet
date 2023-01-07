import { yupResolver } from '@hookform/resolvers/yup'
import { useNavigation } from '@react-navigation/native'
import { HStack, ScrollView, Text, VStack } from 'native-base'
import { Controller, useForm } from 'react-hook-form'
import * as yup from 'yup'

import { Button } from '@components/Button'
import { Input } from '@components/Input'
import { ScreenHeader } from '@components/ScreenHeader'

type FormDataProps = {
	name: string
	description: string
	date: string
	hour: string
}

const createMealRegister = yup.object({
	name: yup.string().required('Informe o nome da refeição'),
	description: yup.string().required('Informe a descrição da refeição'),
	date: yup.string().required('Informe a data da refeição'),
	hour: yup.string().required('Informe a hora da refeição.')
})

export function CreateMeal() {
	const navigation = useNavigation()

	function handleGoBack() {
		navigation.goBack()
	}

	const {
		control,
		handleSubmit,
		formState: { errors }
	} = useForm<FormDataProps>({
		resolver: yupResolver(createMealRegister)
	})

	return (
		<VStack flex={1} safeAreaTop>
			<VStack>
				<ScreenHeader
					onPress={handleGoBack}
					headerBgColor="gray.300"
					title="Nova Refeição"
				/>
			</VStack>
			<ScrollView
				mx={7}
				mt={8}
				mb={10}
				contentContainerStyle={{ flexGrow: 1 }}
				showsVerticalScrollIndicator={false}
			>
				<VStack flex={1}>
					<Text color="gray.700" fontSize="md" fontFamily="body" mb={1}>
						Nome
					</Text>
					<Controller
						control={control}
						name="name"
						render={({ field: { onChange, value } }) => (
							<Input
								onChangeText={onChange}
								value={value}
								errorMessage={errors.name?.message}
							/>
						)}
					/>

					<Text color="gray.700" fontSize="md" fontFamily="body" mb={1}>
						Descrição
					</Text>
					<Controller
						control={control}
						name="description"
						render={({ field: { onChange, value } }) => (
							<Input
								h={32}
								onChangeText={onChange}
								value={value}
								errorMessage={errors.description?.message}
							/>
						)}
					/>
					<HStack flex={1}>
						<VStack flex={1} mr={2}>
							<Text color="gray.700" fontSize="md" fontFamily="body" mb={1}>
								Data
							</Text>
							<Controller
								control={control}
								name="date"
								render={({ field: { onChange, value } }) => (
									<Input
										onChangeText={onChange}
										value={value}
										errorMessage={errors.date?.message}
									/>
								)}
							/>
						</VStack>
						<VStack flex={1} ml={2}>
							<Text color="gray.700" fontSize="md" fontFamily="body" mb={1}>
								Hora
							</Text>
							<Controller
								control={control}
								name="hour"
								render={({ field: { onChange, value } }) => (
									<Input
										onChangeText={onChange}
										value={value}
										errorMessage={errors.hour?.message}
									/>
								)}
							/>
						</VStack>
					</HStack>
				</VStack>
				<Button title="Cadastrar Refeição" />
			</ScrollView>
		</VStack>
	)
}
