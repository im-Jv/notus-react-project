import React, {  useState } from 'react'
import { Navbar, TopBar } from './Navbar'
import { Box, Flex, useBreakpointValue } from '@chakra-ui/react'
import Header from './HomePag/Header'

export default function MainLayout({ children }) {

  const [openMenu, setOpenMenu] = useState(true)

  const varient = useBreakpointValue({
    base: true,
    lg: false
  })
  return (
    <Flex>
      <Box as='nav' position={{ lg: 'relative', base: 'absolute' }} width={{ lg: '22%', base: '100%' }} bgColor='transparent'>
        <Box hideFrom='lg'>
          <TopBar onClickFn={() => setOpenMenu(!openMenu)} />
        </Box>
        <Box>
          <Navbar hamBurger={varient} setOpenMenu={openMenu} />
        </Box>
      </Box>
      <Box width={{ lg: '78%', base: '100%' }} bgColor='pink'>
        <Header />
        <Box>
          {children}
        </Box>
      </Box>
    </Flex>
  )
}
