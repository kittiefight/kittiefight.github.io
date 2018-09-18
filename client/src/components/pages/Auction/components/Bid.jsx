import React, { Component } from 'react'

export default function Bid() {
  return (
    <li className="flex justify-between px-4 py-4 mt-4 bg-white text-grey-dark radius-sm big-el-bottom-shadow-hover cursor-pointer">
      <span>
        account
      </span>
      <span>amount</span>
      <span>price</span>
      <span>date/time</span>
    </li>
  )
}
