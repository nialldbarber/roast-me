import React, { FC } from 'react'
import useAddStore from '~@hooks/useAddStore'
import Toast from '~@components/toast'
import Button from '~@components/button'
import Rating from '~@components/rating'
import AddStoreForm from '~@components/add-store'
import { PageContainer } from '~@styles/components/container'
import { Title } from '~@styles/components/title'

const AddStore: FC = (props) => {
	const { store, storeError, handleChange, handleSubmit } = useAddStore()
	const { name, location, description, rating } = store
	const { status, message } = storeError

	return (
		<PageContainer>
			<Title>Add Store</Title>
			<Toast error={status} message={message} link={name} />
			<AddStoreForm visibility={true} page={props} />
		</PageContainer>
	)
}

export default AddStore
