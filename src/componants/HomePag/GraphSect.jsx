import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import HeadGraph from '../HeadGraph'
import TableSect from '../TableSect'
import SideTable from '../SideTable'

export default function GraphSect() {
  return (
    <Box mt='-3rem' mb='3rem'>
      <HeadGraph />
      <Flex justify='space-between' px='2vw' flexWrap='wrap' flexDir={{md:'row', base:'column'}}>
        <TableSect />
        <SideTable />
      </Flex>
    </Box>
  )
}
