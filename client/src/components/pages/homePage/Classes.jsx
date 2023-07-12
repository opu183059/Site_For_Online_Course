import Python from "./Classes/Python";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import JS from "./Classes/JS";
import React from "./Classes/React";
import { useState } from "react";

const Classes = () => {
  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="text-left p-3 md:p-0 pt-8 max-w-6xl mx-auto">
      <h1 className="text-4xl">A broad selection of courses</h1>
      <p className="text-lg mb-5">
        Choose from over 210,000 online video courses with new additions
        published every month
      </p>

      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Python" {...a11yProps(0)} />
            <Tab label="JavaScript" {...a11yProps(1)} />
            <Tab label="React" {...a11yProps(2)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <Python></Python>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <JS></JS>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <React></React>
        </TabPanel>
      </Box>
    </div>
  );
};

export default Classes;
