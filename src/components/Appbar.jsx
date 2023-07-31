import React from "react";
import {
  AppBar,
  IconButton,
  InputAdornment,
  OutlinedInput,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import logo from "../assets/images/logo.png";
import logoMobile from "../assets/images/ytLogo.png";

export function Appbar(props) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [value, setValue] = React.useState("");

  function handleKeyDown(e) {
    console.log(e);
    if (e.key === "Enter") {
      props.handleSearch(value);
    }
  }
  return (
    <AppBar
      fullWidth
      position="fixed"
      style={{ backgroundColor: "white" }}
      className={`py-2 ${isMobile ? "px-2" : "px-8"}`}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          {!isMobile && (
            <IconButton>
              <MenuIcon />
            </IconButton>
          )}

          {isMobile ? (
            <img
              alt=""
              src={logoMobile}
              style={{ width: "auto", height: 24, cursor: "pointer" }}
            />
          ) : (
            <img
              alt=""
              src={logo}
              className="pl-3"
              style={{ width: "auto", height: 28, cursor: "pointer" }}
            />
          )}
        </div>
        <div className="flex">
          <OutlinedInput
            size="small"
            style={{ borderRadius: 25, width: isMobile ? 200 : 540 }}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  onClick={(e) => {
                    e.preventDefault();
                    props.handleSearch(value);
                  }}
                >
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            }
            margin="dense"
            placeholder="Search"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={(e) => handleKeyDown(e)}
          />
          <IconButton style={{ marginLeft: 5 }}>
            <MicIcon />
          </IconButton>
        </div>
        {isMobile ? (
          <IconButton>
            <MenuIcon />
          </IconButton>
        ) : (
          <div className="flex">
            <IconButton style={{ marginRight: 5 }}>
              <VideoCallIcon />
            </IconButton>
            <IconButton style={{ marginRight: 5 }}>
              <NotificationsIcon />
            </IconButton>
            <IconButton style={{ marginRight: 5 }}>
              <AccountCircleIcon />
            </IconButton>
          </div>
        )}
      </div>
    </AppBar>
  );
}
