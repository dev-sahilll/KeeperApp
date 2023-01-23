import React from "react";
import NotesIcon from '@mui/icons-material/Notes';
function Header() {
  return (
    <header>
    <div className="head">
    <div>
    <NotesIcon sx={{color:"white"}}/>
    </div>
    <div>
      <h1>
        
        Notes App
      </h1>
      </div>
      </div>
    </header>
  );
}

export default Header;
