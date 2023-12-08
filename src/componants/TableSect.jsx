import { Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'
import { tableData } from '../api/Data'
import Icon from './Icons'
import { Link } from 'react-router-dom'




export default function TableSect() {
  return (
    // <Box mt='3rem' w='max-content' bg='red'>
      <Table size='md' mt='3rem' w={{lg:'55%', base:'100%'}} p='10px' rounded='5px' shadow='0 0 5px rgba(0,0,0,0.4)' bg='white'>
        <Thead>
          <Tr>
            <Th colSpan={3} fontSize='20px'>Page Visits</Th>
            <Th><Link style={{backgroundColor:'Highlight', color: 'white', padding:'2px 5px', borderRadius: '5px'}}>see all</Link></Th>
          </Tr>
          <Tr>
            {tableData.headings.map((data,i) => <Th key={i}>{data}</Th>)}
          </Tr>
        </Thead>
        <Tbody>
          {tableData.body.map((data, i) => {
            return (
              <Tr key={i} fontSize={{lg:'16px', base:'14px'}}>
                <Td>{data.title}</Td>
                <Td>{data.visitor}</Td>
                <Td>{data.users}</Td>
                <Td display='flex' align='center'><Icon size='16px' name={data.profit ? 'ArrowUp' : 'ArrowDown'} />{data.rate}</Td>
              </Tr>
            )
          })}
        </Tbody>
      </Table>
    // </Box>
  )
}
