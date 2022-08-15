import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import { Link } from "react-router-dom";

function Item({ name, category, price, stock, img, id, desciption }) {
return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia component="img" alt={name} height="140" image={img} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">{name}</Typography>
        <Typography gutterBottom variant="h5" component="div">{category}</Typography>
        <Typography gutterBottom variant="h5" component="div">{desciption}</Typography>
        <Typography variant="body2" color="text.secondary">$ {price}</Typography>
      </CardContent>
      <CardActions>
        <Link to={`/detail/${id}`}>Detalle</Link>
      </CardActions>
    </Card>
  );
}

export default Item