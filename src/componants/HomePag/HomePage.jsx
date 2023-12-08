import { Box, Flex } from '@chakra-ui/react'
import HeadGraph from '../HeadGraph'
import TableSect from '../TableSect'
import SideTable from '../SideTable'


export default function HomePage() {

  return (
    <Box as='section' p='1.6rem'>
      <Box>
        <HeadGraph />
      </Box>
      <Flex justify='space-between'>
        <TableSect />
        <SideTable />
      </Flex>
    </Box>
  )
}
