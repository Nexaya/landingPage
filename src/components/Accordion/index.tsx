import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import AccordionSectionConstants from "@/constant/AccordionSection/AccordionSectionDetails";

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  width: "100%",
  border: "none",
  borderRadius: "8px",
  marginBottom: "2rem",
  borderBottom: `2px solid #33971F`,
  // '&:not(:last-child)': {
  //   border: 0,
  // },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    {...props}
    expandIcon={
      <ArrowForwardIosSharpIcon sx={{ fontSize: "1rem", color: "#33971F" }} />
    }
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export default function SectionAccordion() {
  const [expanded, setExpanded] = React.useState<string | false>("panel1");

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <div>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography className="font-bold">
            {" "}
            {AccordionSectionConstants.Items[0].Question}{" "}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {AccordionSectionConstants.Items[0].Answer.Title}
            {AccordionSectionConstants.Items[0].Answer.Details}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography className="font-bold">
            {" "}
            {AccordionSectionConstants.Items[1].Question}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {AccordionSectionConstants.Items[1].Answer.Title}
            {AccordionSectionConstants.Items[1].Answer.Details}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography className="font-bold">
            {AccordionSectionConstants.Items[2].Question}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {AccordionSectionConstants.Items[2].Answer.Title}
            {AccordionSectionConstants.Items[2].Answer.Details}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
          <Typography className="font-bold">
            {AccordionSectionConstants.Items[3].Question}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {AccordionSectionConstants.Items[3].Answer.Title}
            {AccordionSectionConstants.Items[3].Answer.Details}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel5"}
        onChange={handleChange("panel5")}
      >
        <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
          <Typography className="font-bold">
            {AccordionSectionConstants.Items[4].Question}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {AccordionSectionConstants.Items[4].Answer.Title}
            {AccordionSectionConstants.Items[4].Answer.Details}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
