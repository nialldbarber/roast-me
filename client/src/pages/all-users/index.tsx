import React, { FC } from 'react'
import { useQuery } from '@apollo/react-hooks'
// Schema 
import { GET_ALL_USERS } from '~@pages/all-users/schema'

const AllUsers: FC = () => {
  const { loading, error, data } = useQuery(GET_ALL_USERS)

  console.log(data)

  return (
    <div>
      <p>All users</p>
    </div>
  )
}

export default AllUsers
