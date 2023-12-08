import { Box, Flex, Text } from "@chakra-ui/react";
import Formm from "../componants/Formm";
import { Link, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { API } from "../api/api";
// import Icon from "../componants/Icons";
import { useState } from "react";

const getUser = async () => {
  return (await API.get('/users')).data
}

export default function Login() {
  const navigate = useNavigate();
  // const toast = useToast()

  const [val, setVal] = useState({
    email: '',
    password: ''
  });
  const { data } = useQuery({
    queryKey: ['users'],
    queryFn: getUser
  });

  const checkCredentials = () => {
    for (var i = 0; i < data.length; i++) {
      if (val.email === data[i].email) {
        let theUser = data[i];
        window.localStorage.setItem("userIsLogged", JSON.stringify(theUser));
        console.log('true');
        navigate('/profile')
        return;
      }
      else {
        console.log('false', data);
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setVal({ ...val, [name]: value });
  }
  return (
    <>
      <Box bgColor='primary.black' h='100vh'>
        <Flex maxW='1366px' mx='auto' flexDir='column' justify='space-between' h='100%'>
          <Box paddingBlock='5rem 4rem' h='90%' bgImage='/assets/imgs/register_bg_2.png' bgSize='cover' backgroundPosition='bottom' bgRepeat='no-repeat' align='center' justify='center'>
            <Formm formType='login' inputVal={val} onChangefn={handleChange} onSubmitfn={() => checkCredentials()} formWidth='360px' />

          </Box>
          <Box px='4vw'>
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

// {/*
// export const Toast = ({ color, title, msg, icon }) => {
//   return (
//     <Flex p={3} bg={color} align='center' color='white'>
//       <Icon name={icon} />&nbsp;&nbsp;
//       <Box>
//         <Text fontWeight='500'>{title}</Text>
//         <Text fontSize='.6rem'>{msg}</Text>
//       </Box>
//     </Flex>
//   )
// } */}
