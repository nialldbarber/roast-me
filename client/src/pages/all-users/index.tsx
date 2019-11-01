import React, { FC, useState, useEffect } from 'react'
import { useQuery } from '@apollo/react-hooks'
// Components
import Loading from '~@components/loading'
import Error from '~@components/error'
import Card from '~@components/card'
// Styles
import { PageContainer } from '~@styles/components/container'
import { Title } from '~@styles/components/title'
import { Cards } from '~@pages/all-stores/styles'
// Schema 
import { GET_ALL_USERS } from '~@pages/all-users/schema'
// Types 
import { UserProps } from '~@pages/all-users/types'

const AllUsers: FC = () => {
  const { loading, error, data } = useQuery(GET_ALL_USERS)

  if (loading) return <Loading />
  if (error) return <Error message={error.message} />

  return (
    <PageContainer>
      <Title>Store List</Title>
      <Cards>
        {data.getAllUsers.map(({ _id, username }: UserProps) => (
          <Card key={_id} id={_id} name={username} likes={{}} type="User" />
        ))}
      </Cards>
    </PageContainer>
  )
}

export default AllUsers
