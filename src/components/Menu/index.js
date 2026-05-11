import * as React from "react";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { NavLink } from "react-router-dom";
import { routePaths } from "routes/mainRoutes/routePaths";

const ITEM_HEIGHT = 48;

export default function LongMenu({ id, disable = [false, false, false] }) {
  const options = [
    {
      title: "View Property",
      link: `${routePaths.PROPERTY_PROFILE_PATH}/?id=${id}`,
    },
    {
      title: "View Proposals",
      link: `${routePaths.PROPERTY_MGR_PROPERTY_PROPOSALS_PATH}/${id}`,
    },
    {
      title: "Create Proposal",
      link: `${routePaths.PROPERTY_MGR_CREATE_PROPOSAL_PATH}/?pid=${id}`,
    },
  ];

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? "long-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          "aria-labelledby": "long-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: "20ch",
          },
        }}
      >
        {options.map((option, index) => {
          if (disable[index] === true) {
            return null;
          } else
            return (
              <NavLink to={option.link} key={option.title}>
                <MenuItem selected={option === "Pyxis"} onClick={handleClose}>
                  {option.title}
                </MenuItem>
              </NavLink>
            );
        })}
      </Menu>
    </div>
  );
}
