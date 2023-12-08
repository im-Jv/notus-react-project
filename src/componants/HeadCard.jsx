import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import Icon from './Icons'

export default function HeadCard({title, traffic, icon, boxColor, textColor, subtitle, percent, profit}) {
  return (
    <Flex flexGrow='1 0 300px' justify='space-between' flexDir='column' w={{lg:'22%', md:'48%', base:'100%'}} h='max-content' bg='secondary' rounded='5px' p='.8rem' mb='1rem' shadow='0 7px 15px rgba(0,0,0,0.1)'>
      <Flex justify='space-between' align='center'>
        <Box>
          <Text fontSize={{lg:'12px', base: '8px'}} color='text.mlight' textTransform='uppercase' fontWeight='700'>{title}</Text>
          <Text fontSize={{lg:'22px', base:'16px'}} fontWeight='500'>{traffic}</Text>
        </Box>
        <Box bg={boxColor} h='max-content' p={{lg:'12px', base: '8px'}} shadow='0 0 10px #0000004e' rounded='50px'>
          <Icon color='white' size='16px' fill='transparent' name={icon} />
        </Box>
      </Flex>
      <Flex mt={{lg:'2px', base:'10px'}}>
        <Flex fontSize={{lg:'14px', base:'12px'}} color={textColor} fill='transparent' align='center'><Icon name={profit ? 'ArrowUp' : 'ArrowDown'} size='14px' />&nbsp;{percent}</Flex>
        <Text fontSize={{lg:'14px', base:'12px'}} color='text.light'>&nbsp;&nbsp;{subtitle}</Text>
      </Flex>
    </Flex>
  )
}
