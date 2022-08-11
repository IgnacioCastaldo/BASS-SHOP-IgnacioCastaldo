import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './ItemDetail.css'



function ItemDetail({ name, category, price, stock, img }) {
return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia component="img" alt={name} height="140" image={img} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">{name}</Typography>
        <Typography gutterBottom variant="h5" component="div">{category}</Typography>
        <Typography variant="body2" color="text.secondary">${price}</Typography>
      </CardContent>
      <CardActions>
      
      </CardActions>
    </Card>
  );
}

export default ItemDetail