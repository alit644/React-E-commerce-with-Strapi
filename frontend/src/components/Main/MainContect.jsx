import {
  Box,
  Container,
  Dialog,
  IconButton,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import { AddShoppingCartOutlined, Close } from "@mui/icons-material";
import ProductDetails from "./ProductDetails";

import { useGetproductByNameQuery } from "../../Redux/product";
const MainContect = () => {
  const allProductsApi = "products?populate=*";
  const womenCategoryApi =
    "products?populate=*&filters[productCategory][$eq]=women";
  const menCategoryApi =
    "products?populate=*&filters[productCategory][$eq]=men";

  const [myData, setmyData] = useState(allProductsApi);
  const { data, error, isLoading } = useGetproductByNameQuery(myData);

  const handleAlignment = (event, newValue) => {
    setmyData(newValue)
  };

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  if (error) {
    return (
      <Typography variant="h3" color="error">
        Error 404
      </Typography>
    );
  }

  if (isLoading) {
    return (
      <Typography variant="h3" color="error">
        Loading
      </Typography>
    );
  }

  if (data) {
    return (
      <Container sx={{ py: 4 }}>
        <Stack
          direction={"row"}
          alignItems={"centen"}
          justifyContent={"space-between"}
          flexWrap={"wrap"}
          gap={3}
        >
          <Box sx={{ textAlign: "left" }}>
            <Typography variant="h6">Selected Products</Typography>
            <Typography variant="body1" fontWeight={300}>
              All oun new arrivals in a exclusive brand selection
            </Typography>
          </Box>

          <ToggleButtonGroup
            color="error"
            value={myData}
            exclusive
            onChange={handleAlignment}
            aria-label="text alignment"
            sx={{
              ".Mui-selected": {
                border: "1px solid rgba(233, 69 , 96 ,0.5) !important",
                color: " #e94560",
                backgroundColor: "initial",
              },
            }}
          >
            <ToggleButton
              className="my-btn"
              value={allProductsApi}
              aria-label="left aligned"
            >
              All Products
            </ToggleButton>
            <ToggleButton
            
              sx={{ mx: "16px !important" }}
              className="my-btn"
              value={menCategoryApi}
              aria-label="centered"
            >
              MEN category
            </ToggleButton>
            <ToggleButton
            
              className="my-btn"
              value={womenCategoryApi}
              aria-label="right aligned"
            >
              WOMEN category
            </ToggleButton>
          </ToggleButtonGroup>
        </Stack>

        <Stack
          direction={"row"}
          flexWrap={"wrap"}
          justifyContent={"space-between"}
        >
          {data.data.map((item) => {
            return (
              <Card
                key={item}
                sx={{
                  maxWidth: 310,
                  my: 6,
                  "&:hover .MuiCardMedia-root": {
                    scale: "1.1",
                    transition: "0.3s",
                  },
                }}
              >
                <CardMedia
                  sx={{ height: 250 }}
                  // @ts-ignore
                  image={`${
                    item.attributes.productimg.data[0].attributes.url
                  }`}
                  title="green iguana"
                />
                <CardContent>
                  <Stack
                    direction={"row"}
                    alignItems={"center"}
                    justifyContent={"space-between"}
                  >
                    <Typography variant="h6" component={"div"}>
                      {item.attributes.productTitle}
                    </Typography>
                    <Typography variant="subtitle1" component={"p"}>
                      ${item.attributes.productPrice}
                    </Typography>
                  </Stack>

                  <Typography
                    textAlign={"left"}
                    variant="body2"
                    color="text.secondary"
                  >
                    {item.attributes.productDescription}
                  </Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: "space-between" }}>
                  <Button
                    onClick={handleClickOpen}
                    sx={{ textTransform: "capitalize" }}
                    size="large"
                  >
                    <AddShoppingCartOutlined sx={{ mr: 1 }} fontSize="small" />
                    add to cart
                  </Button>
                  <Button size="small">
                    <Rating
                      name="half-rating-read"
                      defaultValue={item.attributes.productRating}
                      precision={0.5}
                      readOnly
                      size="small"
                    />
                  </Button>
                </CardActions>
              </Card>
            );
          })}
        </Stack>

        <Dialog
          sx={{ ".MuiPaper-root": { minWidth: { xs: "96%", md: 800 }, py: 2 } }}
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <Box>
            <IconButton
              onClick={handleClose}
              sx={{ position: "absolute", right: 0, top: 10 }}
            >
              <Close />
            </IconButton>
          </Box>

          <ProductDetails />
        </Dialog>
      </Container>
    );
  }
};

export default MainContect;
