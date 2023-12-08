import { Box, Text, Button, Flex, Input } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import Icon from './Icons'
import { useState } from 'react'


const navLinks = [
  {
    name: 'Dashboard',
    path: '/',
    icon: <Icon name='Laptop2' me='10px' />
  },
  {
    name: 'Settings',
    path: '/settings',
    icon: <Icon name='Settings' me='10px' />
  },
  {
    name: 'Tables',
    path: '/table',
    icon: <Icon name='Sheet' me='10px' />
  },
  {
    name: 'Maps',
    path: '/maps',
    icon: <Icon name='Map' me='10px' />
  },
  {
    name: 'Profile',
    path: '/profile',
    icon: <Icon name='User' me='10px' />
  },
]


export const Navbar = ({ hamBurger, setOpenMenu }) => {

  const isAuth = JSON.parse(localStorage.getItem("userIsLogged"));

  return (
    <>
      <Box as='nav' width={hamBurger ? '95%' : '100%'} bg='white' mx='auto' border={hamBurger ? '1px solid' : '0'} borderColor='text.mlight' rounded={hamBurger ? '5px' : '0'} pos='relative' zIndex='99' padding={hamBurger ? '1rem' : '1.6rem'} display={{ lg: setOpenMenu ? 'flex' : 'none', base: setOpenMenu ? 'none' : 'flex' }}>
        <Box top='0' left='0' width='100%'>
          {hamBurger ?
            <Box py='1rem' mb='1rem' w='100%' borderBottom='1px solid' borderColor='text.vlight'>
              <Input type='text' w='100%' border='1px solid' placeholder='Search...' borderColor='text.vlight' />
            </Box> :
            <Text pb='1.5rem' fontWeight='600' textTransform='uppercase' borderBottom='1px solid' borderColor='text.vlight' mb='1.5rem'>Notus React</Text>
          }
          <Box>
            {navLinks.map((navlink) => (
              <Link
                key={navlink.path} style={{ textDecoration: 'none', display: 'flex', paddingBlockEnd: '1rem', fontSize: '16px', fontWeight: '500' }} to={navlink.path}>{navlink.icon}&nbsp;&nbsp;{navlink.name}</Link>
            ))}
            {!isAuth && (<Link style={{ textDecoration: 'none', display: 'flex', paddingBlockEnd: '1rem', fontSize: '16px', fontWeight: '500' }} to='/login'>Login</Link>)}
          </Box>
        </Box>
      </Box>
    </>
  )
}

export const TopBar = ({ onClickFn }) => {

  const [dropDown, setDropDown] = useState(false)
  const [dropDown2, setDropDown2] = useState(false)

  return (
    <Box p='10px' bgColor='white'>
      <Flex align='center' as='nav' justify='space-between'>
        <Button colorScheme='teal' border='1px solid' borderColor='grey' rounded='3px' p='5px' me='10px' onClick={onClickFn}>
          <Icon name='Menu' color='grey' />
        </Button>
        <Text fontWeight='600' textTransform='uppercase'>Notus React</Text>
        <Flex alignItems='center' pos='relative'>
          <Box onClick={() => setDropDown2(!dropDown2)}>
            <Icon name='Bell' fill='grey' color='grey' size='16px' />
            <Box pos='absolute' top='50px' right='80px' shadow='0 0 4px rgba(0,0,0,0.3)' cursor='pointer'>
              <Box display={dropDown2 ? 'flex' : 'none'} flexDir='column' width='170px' rounded='5px' padding='8px 5px' bgColor='white'>
                {dropList.map((drop, i) => <Link style={{ backgroundColor: 'white', marginInline: '10px', padding: '6px' }} key={i} to={drop.path}>{drop.lnk}</Link>)
                }
              </Box>
            </Box>
          </Box>
          <Box ms='1.5rem' h='40px' w='40px' bgImage='/assets/imgs/dummy-profile.png' bgSize='cover' bgRepeat='no-repeat' rounded='50px' onClick={() => setDropDown(!dropDown)}>
            <Box shadow='0 0 4px rgba(0,0,0,0.3)' pos='absolute' top='50px' right='15px' cursor='pointer'>
              <Box display={dropDown ? 'flex' : 'none'} flexDir='column' width='170px' rounded='5px' padding='8px 0px' bgColor='white'>
                {dropList.map((drop, i) => <Link style={{ backgroundColor: 'white', marginInline: '10px', padding: '6px 10px' }} key={i} to={drop.path}>{drop.lnk}</Link>)
                }
                <Link style={{ backgroundColor: 'white', padding: '6px 20px', borderTop: '2px solid #F1F5F9' }}>eperate Link</Link>
              </Box>
            </Box>
          </Box>
        </Flex>
      </Flex>
    </Box>
  )
}

const dropList = [
  {
    lnk: 'Action1',
    path: '/action/1'
  }, {
    lnk: 'Action2',
    path: '/action/2'
  }, {
    lnk: 'Action3',
    path: '/action/3'
  }, {
    lnk: 'seperate',
    path: '/action/next/1'
  },
]
