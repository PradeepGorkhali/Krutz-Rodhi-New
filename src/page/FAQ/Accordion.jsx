import React, { useState } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import "./style.css";

function CustomAccordion({ title, value }) {
  const [expand, setExpand] = useState(false);
  return (
    <Accordion
      className="faq_responsive"
      sx={{
        margin: "5px 0px",
        borderRadius: "10px",
        border: "0px",
        "&::before": { display: "none" },
      }}
    >
      <AccordionSummary
        onClick={() => setExpand(!expand)}
        expandIcon={
          expand ? (
            <RemoveIcon sx={{ color: "primary.main" }} />
          ) : (
            <AddIcon sx={{ color: "primary.main" }} />
          )
        }
      >
        <Typography
          variant="body2"
          sx={{ color: "black", fontSize: "20px", fontWeight: "bold" }}
        >
          {title}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography variant="body2" sx={{ color: "dimmer" }}>
          {value}
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
}

export default CustomAccordion;
