/* eslint-disable react/no-unescaped-entities */
import { AddShoppingCartOutlined } from "@mui/icons-material";
import { Box, Button, Stack, Typography } from "@mui/material";

const ProductDetails = () => {
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 2.5 , flexDirection: {xs : 'column' , sm: 'row'} }}>
      <Box>
        <img
          width={300}
          src="https://mui.com//static/images/cards/contemplative-reptile.jpg"
          alt=""
        />
      </Box>

      <Box sx={{textAlign: {xs: 'center' , sm: 'left'}}}>
        <Typography variant="h6">WOMEN'S FASHION</Typography>
        <Typography my={0.4} fontSize={"22px"} variant="h6" color={"crimson"}>
          $12.99
        </Typography>
        <Typography variant="body1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio tempore
          autem omnis ipsa, at voluptatum?
        </Typography>

        <Stack sx={{justifyContent: {xs : 'center' , sm:'left'}}} direction={"row"} gap={1} my={2}>
          {['22' , '22' , '22'].map((item) => {
            return(

              <img style={{borderRadius: 3}} width={90} height={100} key={item} src="" alt="" />
            )
          })}
        </Stack>

        <Button sx={{textTransform: 'capitalize' }} variant='contained'>
            <AddShoppingCartOutlined sx={{mr: 1}} fontSize='small'/>
            Buy Now
        </Button>
      </Box>
    </Box>
  );
};

export default ProductDetails;
