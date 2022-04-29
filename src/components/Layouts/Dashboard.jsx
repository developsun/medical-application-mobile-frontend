import React from 'react'

import {BottomNavigationComponent} from './Dashboard/BottomNavigation'
import {DashboardContent} from './Dashboard/DashboardContent'
import FormatColorTextIcon from '@mui/icons-material/FormatColorText';

export const Dashboard = () => {

  return (
    <>
        <DashboardContent/>
        <BottomNavigationComponent/>
    </>
  )
}
