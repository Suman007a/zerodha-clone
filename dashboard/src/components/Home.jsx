import React from 'react'
import TopBar from './TopBar'
import Dashboard from './Dashboard'
import Menu from './Menu'


export default function Home() {
    
  return (
    <>
      <TopBar>
        <Menu/>
      </TopBar>
      <Dashboard />
    </>
  )
}
