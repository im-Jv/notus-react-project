import { Box, Flex } from '@chakra-ui/react'
import { useState } from 'react'
import { Chart } from 'chart.js/auto';
import { CategoryScale } from 'chart.js'
import { Data, totalOrders } from '../api/Data'
import LineChart from './charts/LineChart';
import BarsChart from './charts/BarsChart';
Chart.register(CategoryScale);

// Chart.defaults.color = '#fff'

export default function HeadGraph() {
  // eslint-disable-next-line no-unused-vars
  const [chartData, setChartData] = useState({
    labels: Data.map((data) => data.months),

    datasets: [
      {
        label: 'Sales Gained',
        data: Data.map((data) => data.salesGain),
        borderColor: 'white',
        borderWidth: 3,
        order: 2,
      },
      {
        label: 'Sales Loss',
        data: Data.map((data) => data.salesLost),
        borderColor: '#4C51BF',
        borderWidth: 3,
        order: 1,
      }
    ]
  });

  // eslint-disable-next-line no-unused-vars
  const [chartDataTwo, setChartDataTwo] = useState({
    labels: totalOrders.map(data => data.id),

    datasets: [
      {
        label: '2020',
        data: totalOrders.map(data => data.orderPlaced),
        backgroundColor: '#ec4899',
      },
      {
        label: '2022',
        data: totalOrders.map(data => data.orderPlaced),
        backgroundColor: 'blue'
      }
    ]
  })

  return (
    <Flex justify='space-between' flexDir={{md:'row', base:'column'}} px='2vw'>
      <Box w={{md:'55%', base:'100%'}} h='max-content'  mb='1.6rem' bg='text.dark' rounded='5px' shadow='0 0 5px rgba(0,0,0,0.4)'>
        <LineChart chartData={chartData} />
      </Box>
      <Box w={{md:'39%', base:'100%'}} h='auto' bg='white' rounded='5px' shadow='0 0 5px rgba(0,0,0,0.4)'>
        <BarsChart chartData={chartDataTwo} />
      </Box>
    </Flex>
  )
}
