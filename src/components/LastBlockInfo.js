
import React, { useEffect, useState } from 'react';

const LastBlockInfo = (props) => {
  
  const { blockInfo } = props;

  const formatter = (_data) => {
    return (_data < 10) ? `0${_data}` : `${_data}`;
  }

  const getDateFormat = (_date) => {
    const t = new Date(_date * 1000);
    return `${formatter(t.getDate())}/${formatter(t.getMonth() + 1)}/${formatter(t.getFullYear())} ${formatter(t.getHours())}:${formatter(t.getMinutes())}`
  }
  return (

    <>
      <div className="relative overflow-x-auto">
        <table className="md:w-full lg:w-[80%] text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3 text-3xl">
                Last Block Info
              </th>
              <th scope="col" className="px-6 py-3">
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Block Number
              </th>
              <td className="px-6 py-4">
              {blockInfo ? `${blockInfo.number}` : "No info"}
              </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                hash
              </th>
              <td className="px-6 py-4">
              {blockInfo.hash ? `${blockInfo.hash}` : "No info"}
              </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              parentHash
              </th>
              <td className="px-6 py-4">
              {blockInfo.parentHash ? `${blockInfo.parentHash}` : "No info"}
              </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                logsBloom
              </th>
              <td className="px-6 py-4">
              {blockInfo.logsBloom ? `${blockInfo.logsBloom}` : "No info"}
              </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                timestamp
              </th>
              <td className="px-6 py-4">
              {blockInfo.timestamp ? getDateFormat(`${blockInfo.timestamp}`) : "No info"}
              </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                nonce
              </th>
              <td className="px-6 py-4">
              {blockInfo.nonce ? `${blockInfo.nonce}` : "No info"}
              </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                difficulty
              </th>
              <td className="px-6 py-4">
              {blockInfo.difficulty ? `${blockInfo.difficulty}` : "No info"}
              </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                gasLimit
              </th>
              <td className="px-6 py-4">
              {blockInfo.gasLimit ? `${blockInfo.gasLimit}` : "No info"}
              </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                gasUsed
              </th>
              <td className="px-6 py-4">
              {blockInfo.gasUsed ? `${blockInfo.gasUsed}` : "No info"}
              </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                size
              </th>
              <td className="px-6 py-4">
              {blockInfo.size ? `${blockInfo.size}` : "No info"}
              </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                miner
              </th>
              <td className="px-6 py-4">
              {blockInfo.miner ? `${blockInfo.miner}` : "No info"}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="pl-5 mt-5">
        <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">See Transactions</button>
      </div>
      </>
  )
}

export default LastBlockInfo