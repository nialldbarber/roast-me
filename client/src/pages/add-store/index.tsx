import React, { FC } from 'react'
import useAddStore from '~@hooks/useAddStore'
import Toast from '~@components/toast'
import AddStoreForm from '~@components/add-store'
import { PageContainer } from '~@styles/components/container'
import { Title } from '~@styles/components/title'

const AddStore: FC = (props) => {
	const { store, storeError } = useAddStore()
	const { name } = store
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
