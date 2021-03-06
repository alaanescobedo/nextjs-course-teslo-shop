import NextLink from "next/link"
import { AppBar, Badge, Box, Button, IconButton, Link, Toolbar, Typography } from "@mui/material"
import { SearchOutlined, ShoppingBagOutlined } from "@mui/icons-material"

export const Navbar = () => {
  return (
    <AppBar >
      <Toolbar>
        <NextLink href="/" passHref>
          <Link display="flex" alignItems="center">
            <Typography variant="h6">Teslo</Typography>
            <Typography sx={{ ml: 0.5 }}>Shop</Typography>
          </Link>
        </NextLink>

        <Box sx={{ flexGrow: 1 }} />

        <Box sx={{ display: { xs: 'none', sm: 'block' } }} >
          <NextLink href="/category/men" passHref>
            <Link>
              <Button>Mens</Button>
            </Link>
          </NextLink>
          <NextLink href="/category/women" passHref>
            <Link>
              <Button>Womens</Button>
            </Link>
          </NextLink>
          <NextLink href="/category/kids" passHref>
            <Link>
              <Button>Kids</Button>
            </Link>
          </NextLink>
        </Box>

        <Box sx={{ flexGrow: 1 }} />

        <IconButton>
          <SearchOutlined />
        </IconButton>

        <NextLink href="/cart" passHref>
          <Link>
            <IconButton>
              <Badge badgeContent={2} color="secondary">
                <ShoppingBagOutlined />
              </Badge>
            </IconButton>
          </Link>
        </NextLink>

        <NextLink href="/" passHref>
          <Link>
            <Typography marginLeft={2} fontWeight={500} >Menu</Typography>
          </Link>
        </NextLink>


      </Toolbar>
    </AppBar >
  )
}
