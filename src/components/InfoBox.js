import { Card, CardContent, Typography } from '@material-ui/core'
import React from 'react'

const InfoBox = ({title,cases,total}) => {
  return (
    <Card className='infobox'>
         <CardContent>
             <Typography color='textSecondary' className='infobox_title'>{title}</Typography>
             <h2 className='infobox_cases'>{cases}</h2>
             <Typography color='textPrimary' className='infobox_total'>{total}</Typography>
         </CardContent>
    </Card>
  )
}

export default InfoBox