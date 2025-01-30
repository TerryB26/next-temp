import React from 'react';
import { Box, Grid, Typography, IconButton, Dialog, DialogTitle, DialogContent, Divider, Tooltip,Card,CardContent,Line } from "@mui/material";
import PageHeader from "@/components/General/PageHeader";
import InfoCard from "@/components/General/InfoCard";
import { MdOutlineAdsClick, MdNavigateBefore, MdNavigateNext, MdOutlineVisibility, MdOutlineVisibilityOff } from "react-icons/md";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import CloseIcon from '@mui/icons-material/Close';

const DashboardView = () => {

    const [dialogOpen, setDialogOpen] = React.useState(false);
    const [dialogTitle, setDialogTitle] = React.useState('');
    const [currentSet, setCurrentSet] = React.useState(0);
    const [currentSet2, setCurrentSet2] = React.useState(0);
    const [visibility, setVisibility] = React.useState({
      total: true,
      approved: true,
      rejected: true,
      awaiting: true,
    });
  
    const handleDialogOpen = (title) => {
      setDialogTitle(title);
      setDialogOpen(true);
    };
  
    const handleDialogClose = () => {
      setDialogOpen(false);
    };


  return (
    <div style={{ padding: "20px" }}>
      <PageHeader/>

      <Grid container spacing={3}>
        {/* Info Cards */}
        
          <Grid item xs={12} md={3} key="Total">
            <InfoCard
              header={
                <>
                  <MdOutlineAdsClick
                    style={{ marginRight: "8px", verticalAlign: 'middle', position: 'relative', top: '-2px', cursor: 'pointer' }}
                  />
                  fgdgfdgdfg
                </>
              }
              innerText="dfgd"
            />
          </Grid>
          <Grid item xs={12} md={3} key="Total">
            <InfoCard
              header={
                <>
                  <MdOutlineAdsClick
                    style={{ marginRight: "8px", verticalAlign: 'middle', position: 'relative', top: '-2px', cursor: 'pointer' }}
                  />
                  fgdgfdgdfg
                </>
              }
              innerText="dfgd"
            />
          </Grid>
          <Grid item xs={12} md={3} key="Total">
            <InfoCard
              header={
                <>
                  <MdOutlineAdsClick
                    style={{ marginRight: "8px", verticalAlign: 'middle', position: 'relative', top: '-2px', cursor: 'pointer' }}
                  />
                  fgdgfdgdfg
                </>
              }
              innerText="dfgd"
            />
          </Grid>
          <Grid item xs={12} md={3} key="Total">
            <InfoCard
              header={
                <>
                  <MdOutlineAdsClick
                    style={{ marginRight: "8px", verticalAlign: 'middle', position: 'relative', top: '-2px', cursor: 'pointer' }}
                  />
                  fgdgfdgdfg
                </>
              }
              innerText="dfgd"
            />
          </Grid>


        {/* Dialog */}
        <Dialog open={dialogOpen} onClose={handleDialogClose} maxWidth="xl" fullWidth>
          <DialogTitle style={{}}>
            {dialogTitle}
            <HighlightOffIcon
              aria-label="close"
              onClick={handleDialogClose}
              sx={{
                position: 'absolute',
                right: 8,
                top: 8,
                color: (theme) => theme.palette.grey[500],
                fontSize: 25,
              }}
            >
              <CloseIcon />
            </HighlightOffIcon>
          </DialogTitle>
          <Divider />
          <DialogContent>
            <>
              <PageHeader routeName={dialogTitle}/>
            </>
          </DialogContent>
         
        </Dialog>


        {/* Charts */}
        <Grid item xs={12} md={6}>
          <InfoCard
            header="Total & Awaiting"
            innerText={
              <>
                "dgdfgdfgdfgdfgrfff"
              </>
            }
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <InfoCard
            header="Total Instances"
            innerText={
              <>
                "ffdgdfgdf"
              </>
            }
          />
        </Grid>

        <Grid item xs={12} md={12}>
            <InfoCard
              header="Total & Awaiting"
              innerText={
                <>
                  "dgdfgdfgdfgdfgrfff"
                </>
              }
            />
        </Grid>
      </Grid>

    </div>
  )
}

export default DashboardView