import React, { FC } from 'react'
import AddStoreForm from '~/components/add-store'
import { PageContainer } from '~/styles/components/container'
import { Title } from '~/styles/components/title'
import { Props } from '~/pages/add-store/types'

const AddStore: FC<Props> = (props) => (
	<PageContainer>
		<Title>Add Store</Title>
		<AddStoreForm visibility={true} page={props} />
	</PageContainer>
)

export default AddStore
