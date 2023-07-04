import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';

const MyTable = () => {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>ID</TableCell>
          <TableCell>Nome</TableCell>
          <TableCell>Email</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell>1</TableCell>
          <TableCell>João</TableCell>
          <TableCell>joao@example.com</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>2</TableCell>
          <TableCell>Maria</TableCell>
          <TableCell>maria@example.com</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default MyTable;
