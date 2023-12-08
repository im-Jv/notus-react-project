import { Box, Button, Flex, Image, Input, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
// import { HamNavbar } from '../Navbar'
import { Link, useNavigate } from 'react-router-dom'
import HeadCard from '../HeadCard'
import { useAuth } from '../../api/hook/useAuth'


const monthlyTraffic = {
  title: 'Traffic',
  subtitle: 'Since last month',
  traffic: '350,890',
  percent: '3.48%',
  profit: true,
}
const weeklyUsers = {
  title: 'new users',
  subtitle: 'Since last week',
  traffic: '2,356',
  percent: '3.48%',
  profit: false,
}
const dailySales = {
  title: 'sales',
  subtitle: 'Since yesterday',
  traffic: '924',
  percent: '1.18%',
  profit: false,
}
const monthlyPerformance = {
  title: 'Performance',
  subtitle: 'Since last month',
  traffic: '49.65%',
  percent: '12%',
  profit: true,
}

export default function Header() {
  const auth = useAuth();
  const navi = useNavigate();
  const [drop, setDrop] = useState(false)
  return (
    <Box as='section' pt={{lg:'1.5rem', base:'5rem'}} mt={{lg:'0', base:'3%'}} pb='10rem' px='2vw' bgColor='primary.blue'>
      <Flex align='center' justify='space-between' mb='2rem' hideBelow='lg'>
          <Link to='/' style={{ fontSize: '16px', fontWeight: '500', color: '#fff' }}>DASHBOARD</Link>
        <Flex position='relative'>
          <Input type='text' me='1rem' placeholder='Search here...' fontSize='12px' />
          <Image onClick={()=> setDrop(!drop)} cursor='pointer' borderRadius='50%' h='40px' w='40px' objectFit='cover' src='/assets/imgs/dummy-profile.png' />
          <Box bgColor='white' position='absolute' right='0' top='105%' p='10px' width='150px' shadow='0 0 5px rgba(0,0,0,0.4)' rounded='5px' display={drop ? 'block' : 'none'} fontSize='.9rem'>
          <Text><Link>Action 1</Link></Text>
          <Text><Link>Action 2</Link></Text>
          <Text><Link>Action 3</Link></Text>
          <Text mt='10px' pt='10px' borderTop='1px solid' borderColor='text.vlight'><Button  fontWeight='500' fontSize='.9rem' onClick={()=> {auth.isLogout(); navi('/login')}}>Logout</Button></Text>
          </Box>
        </Flex>
      </Flex>
      {/* cards */}
      <Flex h='80%' justify='space-between' align='center' flexWrap='wrap'>
        <HeadCard icon='BarChart3' {...monthlyTraffic} boxColor='primary.red' textColor='primary.green'/>
        <HeadCard icon='PieChart' {...weeklyUsers} boxColor='primary.orange' textColor='primary.red' />
        <HeadCard icon='UsersRound' {...dailySales} boxColor='primary.pink' textColor='primary.orange' />
        <HeadCard icon='Percent' {...monthlyPerformance} boxColor='primary.blue' textColor='primary.green' />
      </Flex>
    </Box>
  )
}
