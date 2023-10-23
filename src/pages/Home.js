import { Alchemy, Network } from 'alchemy-sdk';
import React, { useEffect, useState } from 'react'
import LastBlockInfo from '../components/LastBlockInfo'
// Refer to the README doc for more information about using API
// keys in client-side code. You should never do this in production
// level code.
const settings = {
  apiKey: process.env.REACT_APP_ALCHEMY_API_KEY,
  network: Network.ETH_MAINNET,
};


// In this week's lessons we used ethers.js. Here we are using the
// Alchemy SDK is an umbrella library with several different packages.
//
// You can read more about the packages here:
//   https://docs.alchemy.com/reference/alchemy-sdk-api-surface-overview#api-surface
const alchemy = new Alchemy(settings);



const Home = () => {

  const [blockNumber, setBlockNumber] = useState(0);
  const [blockInfo, setBlockInfo] = useState(0);

  const getBlockNumber = async () => {
    try {
      const blockNumber = await alchemy.core.getBlockNumber()
      setBlockNumber(blockNumber)
      const blockInfo = await alchemy.core.getBlockWithTransactions(blockNumber);
      setBlockInfo(blockInfo)
      console.log(blockInfo)

    } catch(error) {
      console.log(error)
    }
   }

  useEffect(() => { getBlockNumber()},
    [])

  return (
    <LastBlockInfo blockInfo={blockInfo}/>
  )
}

export default Home