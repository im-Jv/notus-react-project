import { Box, Flex, Text } from "@chakra-ui/react";
import Formm from "../componants/Formm";
import { Link } from "react-router-dom";


export default function SignUp() {


  return (
    <>
      <Box bgColor='primary.black' h='100%'>
        <Flex maxW='1366px' mx='auto' flexDir='column' justify='space-between' h='100%'>
          <Box paddingBlock='4rem 4rem' h='90%' bgImage='/assets/imgs/register_bg_2.png' bgSize='cover' backgroundPosition='bottom' bgRepeat='no-repeat' align='center' justify='center'>
            <Formm formType='signup' formWidth='460px' />
          </Box>
          <Box mt='2rem' px='4vw'>
            <Flex as="footer" justify='space-between' py='1.5rem' borderTop='1px solid' borderColor='text.light'>
              <Text color='text.light' fontWeight='500' fontSize='16px'>Copyright &copy 2023 <Link style={{ color: 'white', fontWeight: '500', }}>Creative Team</Link></Text>
              <Box>
                {footLinks.map((fl, i) => <Link style={{ marginInline: '5px', color: 'white', fontWeight: '500' }} key={i} to={fl.path}>{fl.flink}</Link>)}
              </Box>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </>
  )
}

const footLinks = [
  {
    flink: 'home',
    path: '/'
  },
  {
    flink: 'home',
    path: '/'
  },
  {
    flink: 'home',
    path: '/'
  },
  {
    flink: 'home',
    path: '/'
  },
]
