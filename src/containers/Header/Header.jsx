import React from 'react';
import './Header.styles.scss';
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const Header = () => {
  return (
      <Toolbar>
          <Typography variant="h6" className="title">
              News
          </Typography>
      </Toolbar>
  );
};

export default Header;
