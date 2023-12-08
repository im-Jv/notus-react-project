import { Box, Text, Input, Grid, Button } from '@chakra-ui/react'
import { useState } from 'react'

export default function UpdateForm() {
  const [editDetail, setEditDetail] = useState(true)
  const user = JSON.parse(localStorage.getItem("userIsLogged"))
  console.log(user.address, 'aaaaaaaaaa');
  debugger;
  return (
    user && (<Box bg='secondary' rounded='5px' my='20px' shadow='0 7px 15px rgba(0,0,0,0.1)'>
      <Text fontSize='1.3rem' fontWeight='600' p='1rem' display='flex' justifyContent='space-between' alignItems='center'>My Account <Button fontSize='12px' textTransform='uppercase' fontWeight='500' backgroundColor='#0284C7' color='white' padding='4px 15px' letterSpacing='1px' rounded='5px' float='right' onClick={() => setEditDetail(!editDetail)}>{editDetail ? 'Edit' : 'Save'}</Button></Text>
      <Box p='1.5rem' bgColor='#F1F5F9'>
        <Text textTransform='uppercase' fontSize='.8rem' fontWeight='700' color='text.mlight'>User Information</Text>
        <Grid mb='1rem' borderBottom='1px solid' borderColor='text.vlight' rowGap='1.5rem' columnGap='1rem' gridTemplateColumns='repeat(2, auto)' p='1.5rem'>
          <DefaultDetails label='Username' type='text' name='username' val={user?.username || ''} disable={editDetail} />
          <DefaultDetails label='Email' type='email' name='username' val={user?.email || ''} disable={editDetail} />
          <DefaultDetails label='First Name' type='text' name='name' val={user?.name.split(" ")[0] || ''} disable={editDetail} />
          <DefaultDetails label='Last Name' type='text' name='name' val={user?.name.split(" ")[1] || ''} disable={editDetail} />
        </Grid>
        <Text textTransform='uppercase' fontSize='.8rem' fontWeight='700' color='text.mlight'>Contact Information</Text>
        <Box p='1.5rem' mb='1rem' borderBottom='1px solid' borderColor='text.vlight'>
          <DefaultDetails label='Address' type='text' name='address' val={user?.address.suite} disable={editDetail} />
          <Grid gridTemplateColumns='repeat(3, auto)' mt='1rem' columnGap='1rem'>
            <DefaultDetails label='City' type='text' name='city' val={user?.address.city} width='10vw' disable={editDetail} />
            <DefaultDetails label='Postal Code' type='text' name='zipcode' val={user?.address.zipcode} width='10vw' disable={editDetail} />
            <DefaultDetails label='Company' type='text' name='company' val={user?.company.name} width='10vw' disable={editDetail} />
          </Grid>
        </Box>
        <Text textTransform='uppercase' fontSize='.8rem' fontWeight='700' color='text.mlight'>About me</Text>
        <Box p='1.5rem' mb='1rem'>
          <DefaultDetails label='Company' type='text' name='company' val='Hello' width='100%' h='12vh' disable={editDetail} />
        </Box>
      </Box>
    </Box>)
  )
}

export function DefaultDetails({ label, name, type, val, chngeFn, width, h, disable, ref }) {
  return (
    <Box>
      <Text fontSize='.8rem' textTransform='uppercase' my='4px' fontWeight='500'>{label}</Text>
      <Input name={name} type={type} w={width} h={h} value={val} ref={ref} onChange={chngeFn} isDisabled={disable} _disabled={{ color: 'text.light' }} />
    </Box>
  )
}
