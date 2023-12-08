import { Box, Button, Flex, GridItem, Image, SimpleGrid, Text } from '@chakra-ui/react'
import Icon from '../Icons'

export default function UpdateView({ editMode }) {

  const { name, address, company, website } = JSON.parse(localStorage.getItem("userIsLogged"))

  return (
    <Box bgColor='secondary' transform={ editMode ? { lg: 'translateY(5rem)', base: 'none' } : 'translateY(-30%)'} rounded='5px' pos='relative' my='1rem' shadow='0 7px 15px rgba(0,0,0,0.1)' px={editMode ? '1rem' : '10%'} py='1rem'>

      <SimpleGrid gridTemplateColumns={editMode ? 'repeat(1, auto)' : '2fr 3fr 2fr'} templateAreas={!editMode ? { lg: `"social img btn"`, base: `"img", "social"` } : `"img", "social"`} alignItems={editMode ? 'end' : { lg: 'start', base: 'end' }} justifyContent={editMode ? 'center' : { lg: 'space-between', base: 'center' }}>
        <GridItem area={'social'} mb={{ lg: '0', base: '-1rem' }}>
          <SimpleGrid columns={3} w='100%'>
            {userSocialData.map((usd, i) => {
              return (
                <Flex width='100%' key={i} flexDir='column' flexWrap='wrap' justify='center' align='center'>
                  <Text fontSize='1.5rem' fontWeight='700'>{usd.val}</Text>
                  <Text fontSize='.8rem' color='text.mlight'>{usd.title}</Text>
                </Flex>
              )
            })}
          </SimpleGrid>
        </GridItem>
        <GridItem area={'img'}>
          <Box h={{ lg: '160px', base: '130px' }} mx='auto' position='relative' w={{ lg: '160px', base: '130px' }} rounded='50%'>
            <Image borderRadius='50%' shadow='0 10px 15px rgba(0,0,0,0.19)' position='absolute' top='0%' left='50%' transform='translate(-50%,-50%)' h='100%' w='100%' objectFit='cover' src='/assets/imgs/dummy-profile.png' />
          </Box>
        </GridItem>
        {!editMode &&
          (<GridItem hideBelow='lg' area={'btn'} ms='auto'>
            <Button bgColor='#0EA5E9' padding='6px 20px' color='white' fontWeight='500' rounded='3px' _hover={{ cursor: 'pointer' }}>Connect</Button>
          </GridItem>)}
      </SimpleGrid>

      <Box px='4px' marginBlock='3rem 1rem'>
        <Box w='max-content' mx='auto'>
          <Text fontSize={editMode ? '1.1rem' : '1.7rem'} lineHeight='4rem' fontWeight='700' textAlign='center'>{name}</Text>
          <Flex mb='2vw' fontSize={editMode ? '.8rem' : '1.5rem'} color='text.mlight' justify='center' align='center' fontWeight='700'><Icon name='MapPin' color='#94a3b8' size='1.2vw' />&nbsp;&nbsp;{address?.street}, {address?.city}</Flex>
          <Box mb='3vw' fontSize='1vw' w='max-content' mx='auto'>
            <Text display='flex' lineHeight='3rem' my='10px' alignItems='center' fontSize={editMode ? '.77rem' : '1.2rem'} m='0' ><Icon size='1.23rem' name='Backpack' color='#94a3b8' />&nbsp;&nbsp;{company.catchPhrase}</Text>
            <Text display='flex' my='10px' alignItems='center' fontSize={editMode ? '.77rem' : '1.2rem'} m='0'><Icon size='1.23rem' name='Globe' lineHeight='3rem' color='#94a3b8' />&nbsp;&nbsp;{website}</Text>
          </Box>
        </Box>

        <Text mx='5%' textAlign='center' px='1rem' mt='1rem' py='2rem' borderTop='1px solid' borderColor='text.vlight'>
          Hello, I'm {name} Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam voluptas dicta maxime cum exercitationem molestias consequatur sapiente, enim in accusantium nulla, alias magni quasi eaque laboriosam qui. Alias, sed expedita? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa accusamus quos, molestiae dolore, vel dolorum aut, eligendi omnis iste cumque delectus dignissimos. Iusto perspiciatis quis omnis, atque aliquid voluptatem repudiandae!
        </Text>
      </Box>
    </Box >
  )
}

const userSocialData = [
  {
    title: 'Friends',
    val: 22,
  },
  {
    title: 'Photos',
    val: 10,
  },
  {
    title: 'Comments',
    val: 89,
  },
]
