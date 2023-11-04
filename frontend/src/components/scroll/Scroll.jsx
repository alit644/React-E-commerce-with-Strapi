import { KeyboardArrowUp } from "@mui/icons-material";
import { Fab, Zoom, useScrollTrigger } from "@mui/material";

const Scroll = () => {
  const trigger = useScrollTrigger({
    // Number of pixels needed to scroll to toggle `trigger` to `true`.
    threshold: 300,
  })
  return (
    <Zoom in={trigger} >
      <Fab onClick={() => {
        window.scrollTo(0 ,0) 
      }} sx={{ position: "fixed", bottom: 33, right: 33 }} size="medium" color="primary" aria-label="add">
        <KeyboardArrowUp />
      </Fab>
    </Zoom>
  );
};

export default Scroll;
