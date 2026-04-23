import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  TextField,
  InputAdornment,
  IconButton,
  Box,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import WhatshotIcon from "@mui/icons-material/Whatshot";

const drawerWidth = 240;

export function Layout(props: {
  query: string;
  onQueryChange: (q: string) => void;
  children: React.ReactNode;
}) {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const menuItemSx = {
    mx: 1.2,
    my: 0.4,
    px: 1.6,
    py: 1,
    borderRadius: 2,
    color: "#0f172a",
    "& .MuiListItemIcon-root": {
      minWidth: 34,
      color: "#64748b"
    },
    "&:hover": {
      backgroundColor: "rgba(14,165,233,0.14)",
      "& .MuiListItemIcon-root": { color: "#0284c7" }
    }
  };

  const drawer = (
    <div className="h-full bg-sky-50 text-slate-900">
      <div className="px-4 py-4">
        <Typography
          variant="h6"
          sx={{
            fontFamily: "Sora, Manrope, sans-serif",
            fontSize: "1.85rem",
            fontWeight: 800,
            letterSpacing: "0.015em"
          }}
        >
          SONG UI
        </Typography>
      </div>

      <List sx={{ mt: 0.5 }}>
        <ListItemButton sx={menuItemSx}>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText
            primary="Home"
            slotProps={{
              primary: {
                sx: {
                  fontFamily: "Manrope, sans-serif",
                  fontSize: "1.12rem",
                  fontWeight: 650,
                  letterSpacing: "0.004em"
                }
              }
            }}
          />
        </ListItemButton>

        <ListItemButton sx={menuItemSx}>
          <ListItemIcon>
            <WhatshotIcon />
          </ListItemIcon>
          <ListItemText
            primary="Trending"
            slotProps={{
              primary: {
                sx: {
                  fontFamily: "Manrope, sans-serif",
                  fontSize: "1.12rem",
                  fontWeight: 650,
                  letterSpacing: "0.004em"
                }
              }
            }}
          />
        </ListItemButton>

        <ListItemButton sx={menuItemSx}>
          <ListItemIcon>
            <MusicNoteIcon />
          </ListItemIcon>
          <ListItemText
            primary="Music"
            slotProps={{
              primary: {
                sx: {
                  fontFamily: "Manrope, sans-serif",
                  fontSize: "1.12rem",
                  fontWeight: 650,
                  letterSpacing: "0.004em"
                }
              }
            }}
          />
        </ListItemButton>
      </List>
    </div>
  );

  return (
    <div className="min-h-full bg-transparent text-slate-900">
      <AppBar position="sticky" elevation={0}>
        <Toolbar className="flex gap-2">
          <IconButton
            edge="start"
            onClick={() => setMobileOpen(true)}
            sx={{ mr: 1, display: { md: "none" } }}
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>

          <Typography variant="h6" sx={{ fontWeight: 900, display: { xs: "none", sm: "block" } }}>
            SONG UI
          </Typography>

          <div className="mx-auto w-full max-w-2xl">
            <TextField
              variant="outlined"
              fullWidth
              size="small"
              placeholder="Search"
              value={props.query}
              onChange={(e) => props.onQueryChange(e.target.value)}
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  )
                }
              }}
              sx={{
                "& .MuiInputBase-root": {
                  backgroundColor: "rgba(255,255,255,0.82)",
                  border: "1px solid rgba(2,132,199,0.24)",
                  borderRadius: "999px"
                }
              }}
            />
          </div>
        </Toolbar>
      </AppBar>

      <Box sx={{ display: "flex" }}>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={() => setMobileOpen(false)}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              backgroundColor: "#f0f9ff",
              borderRightColor: "rgba(2,132,199,0.2)"
            }
          }}
        >
          {drawer}
        </Drawer>

        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", md: "block" },
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
              backgroundColor: "#f0f9ff",
              borderRightColor: "rgba(2,132,199,0.2)"
            }
          }}
          open
        >
          {drawer}
        </Drawer>

        <Box component="main" sx={{ flexGrow: 1 }}>
          <div className="mx-auto w-full max-w-7xl p-4">{props.children}</div>
        </Box>
      </Box>
    </div>
  );
}