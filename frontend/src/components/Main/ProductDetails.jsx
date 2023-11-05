/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import { AddShoppingCartOutlined } from "@mui/icons-material";
import { Box, Button, Stack, Typography } from "@mui/material";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
const ProductDetails = ({ clickedProduct }) => {
  const [selectedImg, setselectedImg] = useState(0);
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 2.5,
        flexDirection: { xs: "column", sm: "row" },
      }}
    >
      <Box>
        <img
          width={300}
          // eslint-disable-next-line react/prop-types
          src={`${clickedProduct.attributes.productimg.data[selectedImg].attributes.url}`}
          alt=""
        />
      </Box>

      <Box sx={{ textAlign: { xs: "center", sm: "left" } }}>
        <Typography variant="h6">
          {clickedProduct.attributes.productTitle}
        </Typography>
        <Typography my={0.4} fontSize={"22px"} variant="h6" color={"crimson"}>
          ${clickedProduct.attributes.productPrice}
        </Typography>
        <Typography variant="body1">
          {clickedProduct.attributes.productDescription}
        </Typography>

        <Stack
          sx={{ justifyContent: { xs: "center", sm: "left" } }}
          direction={"row"}
          gap={1}
          my={2}
        >
          {clickedProduct.attributes.productimg.data.map((item ,index) => {
            return (
              <img
                onClick={() => {
                  setselectedImg(index)
                }}
                style={{ borderRadius: 3 }}
                width={90}
                height={100}
                key={item}
                src={item.attributes.url}
                alt=""
              />
            );
          })}
        </Stack>

        <Button sx={{ textTransform: "capitalize" }} variant="contained">
          <AddShoppingCartOutlined sx={{ mr: 1 }} fontSize="small" />
          Buy Now
        </Button>
      </Box>
    </Box>
  );
};

export default ProductDetails;
