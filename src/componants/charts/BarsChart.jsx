import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import { Bar } from 'react-chartjs-2'

export default function BarsChart({ chartData }) {
  return (
    <Box p='1rem'>
      <Box mb='1.5rem'>
        <Text textAlign='start' fontWeight='500' textTransform='uppercase' fontSize='12px'>Performance</Text>
        <Text fontSize='24px' textAlign='start' fontWeight='500'>Total Orders</Text>
      </Box>
      <Bar
        data={chartData}
        options={{
          aspectRatio: 1,
          plugins: {
            title: {
              display: false,
            },
            legend: {
              labels: {
                color: 'white',
              },
              display: false,
            }
          },
          scales: {
            x: {
              type: 'linear',
              min: 1,
              max: 13,
              ticks:{
                stepSize: 5,
              }
            },
            y: {
              type: 'linear',
              min: 0,
              max: 100,
              ticks:{
                stepSize: 10,
              }
            }
          }
        }}
      />
    </Box>
  )
}
