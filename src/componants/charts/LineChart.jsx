import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import { Line } from 'react-chartjs-2'



export default function LineChart({ chartData }) {


  return (
    <Box p='1rem'>
      <Box mb='1rem'>
        <Text textAlign='start' fontWeight='500' textTransform='uppercase' color='white' fontSize={{ lg: '12px', base: '8px' }}>Overview</Text>
        <Text fontSize={{ lg: '24px', base: '16px' }} textAlign='start' fontWeight='500' color='white'>Sales value</Text>
      </Box>
      <Line
        data={chartData}
        options={{
          plugins: {
            title: {
              display: false,
            },
            legend: {
              display: true,
              labels: {
                color: 'white'
              },
              align: 'end',
              position: 'bottom',
            }
          },
          scales: {
            y: {
              ticks: {
                color: 'white',
              }
            },
            x: {
              ticks: {
                color: 'white',
              }
            },
          }
        }}
      />
    </Box>
  )
}
