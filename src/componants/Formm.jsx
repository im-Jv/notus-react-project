import { Box, Button, Checkbox, Flex, Input, Text } from '@chakra-ui/react'
import React from 'react'
import Icon from '../componants/Icons'
import { Link } from 'react-router-dom';
import { useAuth } from '../api/hook/useAuth';


// hoc
// pure
// Library, framework
// react
// single page app




export default function Formm({ formType, formWidth, inputVal, onChangefn, onSubmitfn }) {

  const auth = useAuth();
  return (
    <Box bg='#E2E8F0' w={formWidth} rounded='3px' shadow='0 0 5px rgba(0,0,0,0.3)' textAlign='center' px='2rem' paddingBlock='1rem 1.5rem'>
      <Text color='text.light' fontWeight='700' fontSize='.83rem' mb='1rem'>{formType !== 'login' ? 'Sign up' : 'Sign in'} with</Text>
      <Box borderBottom='1px solid' borderColor='text.vlight' pb='2rem'>
        <Button fontSize='13px' fontWeight='500' bgColor='secondary' rounded='3px' padding='4px 12px' boxShadow='0 0 4px rgba(0,0,0,0.4)' _active={{ boxShadow: 'inset 0 0 5px rgba(0,0,0,0.4)' }}
          mx='6px'><Icon name='Github' size='16px' />&nbsp;GitHub</Button>
        <Button fontSize='13px' fontWeight='500' bgColor='secondary' rounded='3px' padding='4px 12px' boxShadow='0 0 4px rgba(0,0,0,0.4)' _active={{ boxShadow: 'inset 0 0 5px rgba(0,0,0,0.4)' }} mx='6px'><Icon name='Facebook' size='16px' />&nbsp;Google</Button>
      </Box>
      <Text color='text.mlight' fontWeight='700' fontSize='.77rem' marginBlock='1.5rem'>Or {formType !== 'login' ? 'sign up' : 'sign in'} with credentials</Text>
      <Box noValidate>
        <Box px='.6rem'>
          {formType !== 'login' && <Box>
            <Text textAlign='start' color='text.dark' fontSize='.8rem' textTransform='uppercase' my='4px' fontWeight='500'>Email</Text>
            <Input name='name' type='text' value={inputVal.name} w='100%' fontSize='14px' rounded='3px' p='6px' placeholder='Name' shadow='0 0 3px rgba(0,0,0,0.2)' mb='1rem' onChange={onChangefn} isRequired={true} />
          </Box>}
          <Box>
            <Text textAlign='start' color='text.dark' fontSize='.8rem' textTransform='uppercase' my='4px' fontWeight='500'>Email</Text>
            <Input name='email' type='email' value={inputVal.email} w='100%' fontSize='14px' rounded='3px' p='6px' placeholder='Email' shadow='0 0 3px rgba(0,0,0,0.2)' mb='1rem' onChange={onChangefn} isRequired={true} />
          </Box>
          <Box>
            <Text textAlign='start' color='text.dark' fontSize='.8rem' textTransform='uppercase' my='4px' fontWeight='500'>Email</Text>
            <Input name='password' type='text' value={inputVal.password} w='100%' fontSize='14px' rounded='3px' p='6px' placeholder='Password' shadow='0 0 3px rgba(0,0,0,0.2)' mb='1rem' onChange={onChangefn} isRequired={true} />
          </Box>
          <Flex align='center' textAlign='start'>
            <Checkbox w='18px' bgColor='secondary' iconColor='secondary' _checked={{ bgColor: 'primary.black' }} h='18px' iconSize='14px' shadow='0 0 3px rgba(0,0,0,0.3)' rounded='3px' isRequired={formType !== 'login'}></Checkbox>
            {formType === 'login' ?
              <Text textAlign='start' color='text.dark' fontSize='.8rem' my='4px' fontWeight='500'>&nbsp;&nbsp;Remember me</Text> :
              <Text textAlign='start' color='text.dark' fontSize='.8rem' my='4px' fontWeight='500'>&nbsp;&nbsp;I agree with the <Link to='/privacy-policy' style={{ color: '#0284C7' }}>Privacy Policy</Link></Text>
            }
          </Flex>
          <Button onClick={()=> auth.isLogout()}>Clear</Button>
          <Button onClick={onSubmitfn} type='submit' fontSize='.7rem' letterSpacing='1px' fontWeight='700' color='white' bgColor='primary.black' w='100%' py='8px' rounded='3px' mt='1rem' textTransform='uppercase'>{formType === 'login' ? 'sign in' : 'create account'}</Button>
          <Box borderTop='1px solid' borderColor='text.vlight' mt='1rem' pt='1rem'>
            {formType !== 'login' ?
              <Text fontWeight='500' fontSize='12px'>Already have an account?
                <Link style={{ color: '#0284C7', fontWeight: '500' }} to='/login'>&nbsp;Sign in!</Link>
              </Text> :
              <Text fontWeight='500' fontSize='12px'>Don't have an account?
                <Link style={{ color: '#0284C7', fontWeight: '500' }} to='/signup'>&nbsp;Create Now!</Link>
              </Text>
            }
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
