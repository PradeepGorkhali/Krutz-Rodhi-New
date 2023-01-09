import React from "react";
import { Stack } from "@mui/material";
import Accordion from "./Accordion";

import heightOffset from "./common";
import data from "./setup";
import "./faqstyle.css";

function FAQ() {
  return (
    <div className="faq_container">
      <div className="faq_container_title">
        <h1>Your Queries?</h1>
      </div>
      <div className="faq_container_section">
        <Stack
          alignItems="center"
          sx={{
            position: "relative",
            minHeight: `calc(100vh - ${heightOffset})`,
            width: "100%",
          }}
        >
          {/* <div style={{ position: "absolute", bottom: 0, right: "-150px" }}>
        <img src={corporateArt} width={500} />
      </div> */}

          {data.map((e, i) => (
            <Accordion key={i} title={e.title} value={e.value} />
          ))}
        </Stack>
      </div>
    </div>
  );
}

export default FAQ;
