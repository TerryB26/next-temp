import React, { useState } from 'react';
import PageHeader from "@/components/General/PageHeader";
import { Tabs, Tab, Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "20px",
  },
  tabsContainer: {
    marginTop: "20px",
    display: 'flex',
    justifyContent: 'center',
  },
  tabButton: {
    backgroundColor: theme.palette.background.paper,
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    margin: theme.spacing(1),
    minWidth: "120px",
    fontWeight: "bold",
    color: theme.palette.text.primary,
    textTransform: "none",
    transition: "all 0.3s",
  },
  selectedTabButton: {
    backgroundColor: "#ECEBF9",
    borderTop: "2px solid #D1B0DB",
    borderLeft: "2px solid #D1B0DB",
    borderRight: "2px solid #D1B0DB",
    fontWeight: "bold",
  },
  tabIndicator: {
    display: 'none',
  },
  tabPanel: {
    padding: theme.spacing(3),
    backgroundColor: "#f9f9f9",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    marginTop: theme.spacing(2),
  },
}));

const tabContents = [
  { label: "Tab 1", title: "Content for Tab 1", content: "Here is some content for the first tab." },
  { label: "Tab 2", title: "Content for Tab 2", content: "Here is some content for the second tab." },
  { label: "Tab 3", title: "Content for Tab 3", content: "Here is some content for the third tab." },
];

const Library = () => {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <PageHeader />
      <Box className={classes.tabsContainer}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="library tabs"
          classes={{ indicator: classes.tabIndicator }}
        >
          {tabContents.map((tab, index) => (
            <Tab
              key={index}
              label={tab.label}
              className={`${classes.tabButton} ${value === index ? classes.selectedTabButton : ''}`}
            />
          ))}
        </Tabs>
      </Box>
      {tabContents.map((tab, index) => (
        <TabPanel key={index} value={value} index={index} className={classes.tabPanel}>
          <Typography variant="h6">{tab.title}</Typography>
          <Typography>{tab.content}</Typography>
        </TabPanel>
      ))}
    </div>
  );
};

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          {children}
        </Box>
      )}
    </div>
  );
};

export default Library;