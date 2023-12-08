import React from 'react'
import UpdateView from '../componants/settingPag/UpdateView'
import { Box, Button, Flex, SimpleGrid } from '@chakra-ui/react'
import Icon from '../componants/Icons'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../api/hook/useAuth'

export default function Profile() {

  const navigate = useNavigate()
  const auth = useAuth()

  return (
    <SimpleGrid>
      <Flex bgImage='/assets/imgs/samuel-ferrara-1527pjeb6jg-unsplash.jpg' bgSize='cover' bgPos='center' h='400px' display='flex' alignItems='flex-start' bgBlendMode='color-burn' bgColor='rgba(0,0,0,0.3)' justifyContent='space-between' py='1vw' px='4vw'>
        <Button fontWeight='500' color='white' onClick={() => navigate('/')}>
          <Icon name='ArrowLeft' size='16px' />&nbsp;Back
        </Button>
        <Button fontWeight='500' color='white' onClick={() => {auth.isLogout(); navigate('/login')}}>
        Logout&nbsp;<Icon name='LogOut' size='16px' />
        </Button>
      </Flex>
      <Box height='130vh' bgColor='text.vlight' px='4vw'>
        <UpdateView editMode={false} />
      </Box>
    </SimpleGrid>
  )
}
