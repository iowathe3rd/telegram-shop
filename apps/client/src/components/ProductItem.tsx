import React from "react";
import Card from "./common/Card"
import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material';


export interface ProductItemsProps {
    title: string;
    price: number;
    description: string;
    id: string;
    imgLink: string
}

const ProductItem: React.FC<ProductItemsProps> = (props) => {
    return (
        <Card sx={{
          padding: "1rem"
        }}>
          <Stack>
              <div><img src={props.imgLink} alt={props.title} /></div>
              <Typography>{props.title}</Typography>
              <Typography>{props.price}</Typography>
          </Stack>
        </Card>
    )
}

export default ProductItem;
