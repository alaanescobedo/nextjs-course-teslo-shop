import { Box, Typography } from '@mui/material';
import { ShopLayout } from '../components/layout/ShopLayout';

const Custom404Page = () => {
  return (
    <ShopLayout title="Page not found" pageDescription="Nothing to display here">
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="calc(100vh - 200px)"
        sx={{ flexDirection: { xs: "column", sm: "row" } }}
      >
        <Typography variant="h1" component="h1" fontSize={80} fontWeight={400}>
          404|
        </Typography>
        <Typography marginLeft={2} fontSize={30}>Page not found</Typography>
      </Box>
    </ShopLayout >
  )
}

export default Custom404Page