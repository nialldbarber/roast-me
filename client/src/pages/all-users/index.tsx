import React, { FC } from 'react'
import { useQuery } from '@apollo/react-hooks'
// Components
import Card from '~@components/card'
// Styles
import { PageContainer } from '~@styles/components/container'
import { Title } from '~@styles/components/title'
import { Cards } from '~@pages/all-stores/styles'
// Schema 
import { GET_ALL_USERS } from '~@pages/all-users/schema'

const AllUsers: FC = () => {
  const { loading, error, data } = useQuery(GET_ALL_USERS)

  console.log(data)

  return (
    <PageContainer>
      <Title>Store List</Title>
      <Cards>
        {data.getAllUsers.map(({ _id, username }) => (
          <Card key={_id} id={_id} name={username} />
        ))}
      </Cards>
    </PageContainer>
  )
}

export default AllUsers
