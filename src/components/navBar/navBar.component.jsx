// React
import { useState, useEffect, useContext } from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

// MUI
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";

// Components
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import SearchBar from "../../components/search-bar/SearchBar";

// Redux
import { selectIsCartOpen } from "../../store/cart/cart.selector";
import { selectCurrentUser } from "../../store/user/user.selector";
import { signOutStart } from "../../store/user/user.action";
import { selectCategoriesMap } from "../../store/categories/category.selector";
import { fetchCategoriesStart } from "../../store/categories/category.action";

// Dependencies
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import "./navBar.styles.scss";

const pages = [
  { id: 1, title: "Home", link: "/" },
  { id: 2, title: "Shop", link: "/shop" },
  { id: 3, title: "Contact Us", link: "/contact-us" },
];
const settings = ["Profile"];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        width: "12ch",
        "&:focus": {
          width: "20ch",
        },
      },
    },
  }));

  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);

  useEffect(() => {
    dispatch(fetchCategoriesStart());
  }, []);

  const categoriesMap = useSelector(selectCategoriesMap);

  // Getting the categories for the searchBar
  let allProducts = [];
  const products = Object.values(categoriesMap).map((product) => {
    allProducts.push(...product);
  });
  // console.log(allProducts);

  let navigate = useNavigate();
  const signOutUser = () => dispatch(signOutStart());

  return (
    <AppBar className="appbar-container" position="static" elevation={0}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link to="/">
            <CrwnLogo />
          </Link>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {/* Small Bar */}
              {pages.map((page) => (
                <Link key={page.id} to={page.link} onClick={handleCloseNavMenu}>
                  <MenuItem>{page.title}</MenuItem>
                </Link>
              ))}
              <MenuItem onClick={handleCloseNavMenu}>
                {currentUser ? (
                  <span onClick={signOutUser}>Sign Out</span>
                ) : (
                  <Link to="/sign-in">Sign In</Link>
                )}
              </MenuItem>
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1 }}>
            <Toolbar>
              {/* <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ "aria-label": "search" }}
                />
              </Search> */}
              {products && products.length ? (
                <SearchBar placeholder="Search " data={allProducts} />
              ) : null}
            </Toolbar>
          </Box>
          <div className="cartIconDiv">
            <span
              style={{
                color: "black",
              }}
            >
              <span
                style={{
                  color: "white",
                }}
              >
                <CartIcon />
              </span>
              {isCartOpen && <CartDropdown />}
            </span>
          </div>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "end",
            }}
          >
            {pages.map((page) => (
              <Link
                style={{
                  color: "white",
                  backgroundColor: "transparent",
                }}
                key={page.id}
                onClick={handleCloseNavMenu}
                to={page.link}
              >
                <Button sx={{ my: 2, color: "white", display: "block" }}>
                  {page.title}
                </Button>
              </Link>
            ))}
            <Button
              onClick={handleCloseNavMenu}
              sx={{
                my: 2,
                color: "white",
                display: "block",
                backgroundColor: "transparent",
              }}
            >
              {currentUser ? (
                <span onClick={signOutUser}>SIGN OUT</span>
              ) : (
                <Link
                  style={{ color: "white", backgroundColor: "transparent" }}
                  to="/sign-in"
                >
                  <span>SIGN IN</span>
                </Link>
              )}
            </Button>
            <div
              style={{
                marginTop: "8px",
                color: "black",
              }}
            >
              <span
                style={{
                  color: "white",
                }}
              >
                <CartIcon />
              </span>
              {isCartOpen && <CartDropdown />}
            </div>
          </Box>

          {/* <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box> */}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
