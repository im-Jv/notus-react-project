import { Progress, Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'
import { socialTraffic } from '../api/Data'
import { Link } from 'react-router-dom'

const colorsC = [
  '#10b981',
  '#ef4444',
  '#ec4899','#f97316'
]

export default function SideTable() {
  return (
    // <Box>
      <Table size='md' mt='3rem' w={{lg:'40%', base:'100%'}} rounded='5px' shadow='0 0 5px rgba(0,0,0,0.4)' bg='white' p='10px'>
        <Thead>
          <Tr>
            <Th colSpan={2} fontSize='18px'>social traffic</Th>
            <Th colSpan={2}><Link style={{ backgroundColor: 'Highlight', color: 'white', padding: '2px 5px', borderRadius: '5px' }}>see all</Link></Th>
          </Tr>
          <Tr>
            {socialTraffic.headings.map((data,i) => <Th key={i}>{data}</Th>)}
          </Tr>
        </Thead>
        <Tbody>
          {socialTraffic.body.map((data, i) => {
            return (
              <Tr key={i} fontSize={{lg:'14px', base:'16px'}}>
                <Td>{data.social}</Td>
                <Td>{data.visitors}</Td>
                <Td display='flex' align='center'>{data.percent}%</Td>
                <Td><Progress w='3.4vw' h='1vh' rounded='5px' value={data.percent} color={colorsC} /></Td>
              </Tr>
            )
          })}
        </Tbody>
      </Table>
    // </Box>
  )
}
