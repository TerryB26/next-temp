import React, { useState } from 'react';
import { Box, Grid, Dialog, DialogTitle, DialogContent, Divider, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField, Button, TableSortLabel, TablePagination} from "@mui/material";
import PageHeader from "@/components/General/PageHeader";
import InfoCard from "@/components/General/InfoCard";
import { MdOutlineAdsClick, MdNavigateBefore, MdNavigateNext, MdOutlineVisibility, MdOutlineVisibilityOff } from "react-icons/md";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import CloseIcon from '@mui/icons-material/Close';
import BarGraph from '@/components/Statistics/BarGraph';
import PieChart from '@/components/Statistics/PieChart';
import SearchOffIcon from '@mui/icons-material/SearchOff';


const DashboardView = () => {

    const dummyData = [
        { user: 'John Doe', age: 28, transactions: 5, totalAmount: 1500 },
        { user: 'Jane Smith', age: 34, transactions: 8, totalAmount: 2300 },
        { user: 'Alice Johnson', age: 45, transactions: 3, totalAmount: 1200 },
        { user: 'Bob Brown', age: 23, transactions: 7, totalAmount: 1900 },
        { user: 'John Doe', age: 28, transactions: 5, totalAmount: 1500 },
        { user: 'Jane Smith', age: 34, transactions: 8, totalAmount: 2300 },
        { user: 'Alice Johnson', age: 45, transactions: 3, totalAmount: 1200 },
        { user: 'Bob Brown', age: 23, transactions: 7, totalAmount: 1900 },
        { user: 'John Doe', age: 28, transactions: 5, totalAmount: 1500 },
        { user: 'Jane Smith', age: 34, transactions: 8, totalAmount: 2300 },
        { user: 'Alice Johnson', age: 45, transactions: 3, totalAmount: 1200 },
        { user: 'Bob Brown', age: 23, transactions: 7, totalAmount: 1900 },
      ];

    const [searchTerm, setSearchTerm] = useState('');
    const [order, setOrder] = useState('asc');
    const [orderBy, setOrderBy] = useState('user');
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);    
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

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
      };
    
      const handleClearSearch = () => {
        setSearchTerm('');
      };
    
      const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
      };
    
      const handleChangePage = (event, newPage) => {
        setPage(newPage);
      };
    
      const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
      };
    
      const filteredData = dummyData.filter((row) =>
        row.user.toLowerCase().includes(searchTerm.toLowerCase())
      );
    
      const sortedData = filteredData.sort((a, b) => {
        if (orderBy === 'user') {
          return order === 'asc'
            ? a.user.localeCompare(b.user)
            : b.user.localeCompare(a.user);
        } else {
          return order === 'asc'
            ? a[orderBy] - b[orderBy]
            : b[orderBy] - a[orderBy];
        }
      });

      const paginatedData = sortedData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);


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
                  1
                </>
              }
              innerText="10"
            />
          </Grid>
          <Grid item xs={12} md={3} key="Total">
            <InfoCard
              header={
                <>
                  <MdOutlineAdsClick
                    style={{ marginRight: "8px", verticalAlign: 'middle', position: 'relative', top: '-2px', cursor: 'pointer' }}
                  />
                  2
                </>
              }
              innerText="20"
            />
          </Grid>
          <Grid item xs={12} md={3} key="Total">
            <InfoCard
              header={
                <>
                  <MdOutlineAdsClick
                    style={{ marginRight: "8px", verticalAlign: 'middle', position: 'relative', top: '-2px', cursor: 'pointer' }}
                  />
                  3
                </>
              }
              innerText="30"
            />
          </Grid>
          <Grid item xs={12} md={3} key="Total">
            <InfoCard
              header={
                <>
                  <MdOutlineAdsClick
                    style={{ marginRight: "8px", verticalAlign: 'middle', position: 'relative', top: '-2px', cursor: 'pointer' }}
                  />
                  4
                </>
              }
              innerText="40"
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
            header="Chart 1"
            innerText={
              <BarGraph />
            }
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <InfoCard
            header="Chart 2"
            innerText={
                <PieChart />
              }
          />
        </Grid>

        <Grid item xs={12} md={12}>
            <InfoCard
              header="Table Info"
              innerText={
                <Box p={2}>
                  <Box p={2} display="flex" alignItems="center">
                    <TextField
                      label="Search"
                      placeholder='Search by User Name'
                      variant="outlined"
                      value={searchTerm}
                      onChange={handleSearchChange}
                      fullWidth
                      style={{ marginRight: '20px' }}
                      InputProps={{
                        style: {
                          height: '40px',
                        },
                      }}
                      InputLabelProps={{
                        shrink: true,
                      }}
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          '& fieldset': {
                            borderColor: '#550000',
                          },
                          '&:hover fieldset': {
                            borderColor: '#ff0000',
                          },
                          '&.Mui-focused fieldset': {
                            borderColor: '#550000',
                          },
                        },
                      }}
                    />
                    <Button
                      variant="contained"
                      color="secondary"
                      onClick={handleClearSearch}
                      startIcon={<SearchOffIcon sx={{ color: '#550000' }} />}
                      sx={{
                        height: '40px',
                        backgroundColor: 'white',
                        border: '1px solid #550000',
                        color: '#550000',
                        '&:hover': {
                          backgroundColor: 'white',
                          border: '1px solid #ff0000',
                          color: '#ff0000',
                        },
                      }}
                    >
                      Clear
                    </Button>
                  </Box>
                  <TableContainer component={Paper} style={{ maxHeight: 400 }}>
                    <Table stickyHeader>
                      <TableHead>
                        <TableRow>
                          <TableCell>
                            <TableSortLabel
                              active={orderBy === 'user'}
                              direction={orderBy === 'user' ? order : 'asc'}
                              onClick={(event) => handleRequestSort(event, 'user')}
                            >
                              User
                            </TableSortLabel>
                          </TableCell>
                          <TableCell align="right">
                            <TableSortLabel
                              active={orderBy === 'age'}
                              direction={orderBy === 'age' ? order : 'asc'}
                              onClick={(event) => handleRequestSort(event, 'age')}
                            >
                              Age
                            </TableSortLabel>
                          </TableCell>
                          <TableCell align="right">
                            <TableSortLabel
                              active={orderBy === 'transactions'}
                              direction={orderBy === 'transactions' ? order : 'asc'}
                              onClick={(event) => handleRequestSort(event, 'transactions')}
                            >
                              Transactions
                            </TableSortLabel>
                          </TableCell>
                          <TableCell align="right">
                            <TableSortLabel
                              active={orderBy === 'totalAmount'}
                              direction={orderBy === 'totalAmount' ? order : 'asc'}
                              onClick={(event) => handleRequestSort(event, 'totalAmount')}
                            >
                              Total Amount ($)
                            </TableSortLabel>
                          </TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {paginatedData.map((row, index) => (
                          <TableRow key={index}>
                            <TableCell component="th" scope="row">
                              {row.user}
                            </TableCell>
                            <TableCell align="right">{row.age}</TableCell>
                            <TableCell align="right">{row.transactions}</TableCell>
                            <TableCell align="right">{row.totalAmount}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                  <TablePagination
                    component="div"
                    count={filteredData.length}
                    page={page}
                    onPageChange={handleChangePage}
                    rowsPerPage={rowsPerPage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                    rowsPerPageOptions={[5, 10, 25]}
                  />
                </Box>
              }
            />
        </Grid>
      </Grid>

    </div>
  )
}

export default DashboardView