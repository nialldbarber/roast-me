import React, { FC } from 'react'
// Hooks
import useAddStore from '~@hooks/useAddStore'
// Components
import Toast from '~@components/toast'
import AddStoreForm from '~@components/add-store'
// Styles
import { PageContainer } from '~@styles/components/container'
import { Title } from '~@styles/components/title'
// Types 
import { Props } from '~@pages/add-store/types'

const AddStore: FC<Props> = (props) => {
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
