import { Card, CardContent, Typography } from '@material-ui/core'
import React from 'react';
import '../styles/Infobox.css';

const InfoBox = ({title,isRed,active,cases,total,...props}) => {
  return (
    <Card className={`infobox ${active && 'infobox--selected'} ${isRed && 'infobox--red'} `} onClick={props.onClick}>
         <CardContent>
             <Typography color='textSecondary' className='infobox_title'>{title}</Typography>
             <h2 className='infobox_cases'>{cases}</h2>
             <Typography color='textPrimary' className='infobox_total'>{total}</Typography>
         </CardContent>
    </Card>
  )
}

export default InfoBox