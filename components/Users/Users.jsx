import React, { useState } from 'react';
import { Button, Table, TableBody,Typography , TableCell, TableContainer, TableHead, TableRow, Paper, TextField, TablePagination } from '@mui/material';
import { styled } from '@mui/material/styles';
import SearchOffIcon from '@mui/icons-material/SearchOff';

const PaginationContainer = styled('div')(({ theme }) => ({
  '& .MuiTablePagination-selectRoot': {
    display: 'flex',
    alignItems: 'center',
  },
  '& .MuiTablePagination-select': {
    minWidth: '50px',
  },
}));

const CustomTableHead = styled(TableHead)(({ theme }) => ({
    backgroundColor: '#ECEBF9',
  }));
  

const Users = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [users] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
    { id: 3, name: 'Mike Johnson', email: 'mike@example.com' },
  ]);

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.email.toLowerCase().includes(searchQuery.toLowerCase())
  );


  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleClearSearch = () => {
    setSearchQuery('');
  };

  return (
    <div style={{ padding: "20px" }}>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
        <TextField
          label="Search"
          placeholder='Search by User Name'
          variant="outlined"
          value={searchQuery}
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
      </div>
      <TableContainer component={Paper}>
        <Table>
        <CustomTableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </CustomTableHead>
          <TableBody>
          {filteredUsers.length > 0 ? (
              filteredUsers.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(user => (
                <TableRow key={user.id}>
                  <TableCell>{user.id}</TableCell>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell></TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={4} align="center">
                  <Typography variant="body1" color="textSecondary">
                    No records to display
                  </Typography>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <PaginationContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={filteredUsers.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </PaginationContainer>
    </div>
  );
};

export default Users;