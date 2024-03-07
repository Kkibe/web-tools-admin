import React from 'react'
import User from '../components/User'
import { Button, Table, TableCaption, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr } from '@chakra-ui/react'

export default function Users() {
  return (
<TableContainer>
  <Table variant='striped' colorScheme='teal'  size='sm'>
    <TableCaption>Web Tools Admin Users</TableCaption>
    <Thead>
      <Tr>
        <Th>ID</Th>
        <Th>USERNAME</Th>
        <Th>EMAIL</Th>
        <Th>ROLE</Th>
        <Th isNumeric>POSTS</Th>
        <Th>EMPLOYED</Th>
      </Tr>
    </Thead>
    <Tbody>
      <User />
      <User />
      <User />
      <User />
    </Tbody>
    <Tfoot>
      <Tr>
        <Th><Button>Load More</Button></Th>
      </Tr>
    </Tfoot>
  </Table>
</TableContainer>
  )
}
