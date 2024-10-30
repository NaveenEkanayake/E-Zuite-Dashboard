import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.main,
    color: theme.palette.primary.main || theme.palette.blue[700],
    fontWeight: "bold",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    color: theme.palette.main,
    fontWeight: "semibold",
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const rows = [
  {
    firstName: "John",
    lastName: "Doe",
    address: "123 Elm Street",
    mobile: "555-1234",
    email: "john.doe@example.com",
    department: "Sales",
    designation: "Manager",
    updated: "2024-05-08 1:45 PM",
    number: 1,
    letter: "J",
  },
  {
    firstName: "Jane",
    lastName: "Smith",
    address: "456 Oak Avenue",
    mobile: "555-5678",
    email: "Jane.smith@gmail.com",
    department: "Marketing",
    designation: "Director",
    updated: "2024-03-08 2:10 PM",
    number: 2,
    letter: "S",
  },
  {
    firstName: "Alice",
    lastName: "Johnson",
    address: "789 Pine Road",
    mobile: "555-8765",
    email: "alice.johnson@example.com",
    department: "HR",
    designation: "Coordinator",
    updated: "2024-03-08 2:30 PM",
    number: 3,
    letter: "J",
  },
  {
    firstName: "Bob",
    lastName: "Brown",
    address: "321 Maple Lane",
    mobile: "555-2345",
    email: "bob.brown@example.com",
    department: "IT",
    designation: "Technician",
    updated: "2024-03-08 3:00 PM",
    number: 4,
    letter: "B",
  },
  {
    firstName: "Charlie",
    lastName: "Davis",
    address: "654 Bitch Boulevard",
    mobile: "555-345",
    email: "charlie.davis@example.com",
    department: "Finance",
    designation: "Analyst",
    updated: "2024-03-08 3:15 PM",
    number: 5,
    letter: "B",
  },
  {
    firstName: "Eve",
    lastName: "Miller",
    address: "987 Cedar Street",
    mobile: "555-4567",
    email: "eve.miller@example.com",
    department: "Operations",
    designation: "SuperVisor",
    updated: "2024-03-08 3:30 PM",
    number: 6,
    letter: "J",
  },
  {
    firstName: "Frank",
    lastName: "Wilson",
    address: "321 Spruce Way",
    mobile: "555-5678",
    email: "frank.wilson@example.com",
    department: "Legal",
    designation: "Consultant",
    updated: "2024-03-08 3:45 PM",
    number: 7,
    letter: "J",
  },
  {
    firstName: "Grace",
    lastName: "Lee",
    address: "654 Palm Drive",
    mobile: "555-6789",
    email: "grace.lee@example.com",
    department: "Engineer",
    designation: "Developer",
    updated: "2024-03-08 4:00 PM",
    number: 8,
    letter: "J",
  },
  {
    firstName: "Henry",
    lastName: "Taylor",
    address: "987 Fir Street",
    mobile: "555-7890",
    email: "henry.taylor@example.com",
    department: "R&D",
    designation: "Scientist",
    updated: "2024-03-08 4:15 PM",
    number: 9,
    letter: "A",
  },
  {
    firstName: "Isabel",
    lastName: "Anderson",
    address: "123 Aspen court",
    mobile: "555-8901",
    email: "isable.anderson@example.com",
    department: "Customer Support",
    designation: "Agent",
    updated: "2024-03-08 4:30 PM",
    number: 10,
    letter: "J",
  },
  {
    firstName: "Jack",
    lastName: "Thomas",
    address: "458 Cyprus Avenue",
    mobile: "555-9012",
    email: "jack.thomas@example.com",
    department: "Quality Assurence",
    designation: "Inspector",
    updated: "2024-03-08 4:45 PM",
    number: 11,
    letter: "J",
  },
  {
    firstName: "Karen",
    lastName: "Jackson",
    address: "789 Redwood Road",
    mobile: "555-0123",
    email: "karen.jackson@example.com",
    department: "Logistic",
    designation: "Coordinator",
    updated: "2024-03-08 5:00 PM",
    number: 12,
    letter: "J",
  },
];

export default function CustomizedTables() {
  return (
    <TableContainer component={Paper} sx={{ marginTop: 3, height: 750 }}>
      <Box>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell sx={{ width: "10%", fontWeight: "500" }}>
                First Name
              </StyledTableCell>
              <StyledTableCell sx={{ width: "10%" }}>Last Name</StyledTableCell>
              <StyledTableCell sx={{ width: "20%" }}>Address</StyledTableCell>
              <StyledTableCell sx={{ width: "10%" }}>Mobile</StyledTableCell>
              <StyledTableCell sx={{ width: "20%" }}>Email</StyledTableCell>
              <StyledTableCell sx={{ width: "10%" }}>
                Department
              </StyledTableCell>
              <StyledTableCell sx={{ width: "10%" }}>
                Designation
              </StyledTableCell>
              <StyledTableCell sx={{ width: "10%" }}>Updated</StyledTableCell>
              <StyledTableCell sx={{ width: "5%" }}>Number</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.number}>
                <StyledTableCell component="th" scope="row">
                  {row.firstName}
                </StyledTableCell>
                <StyledTableCell>{row.lastName}</StyledTableCell>
                <StyledTableCell>{row.address}</StyledTableCell>
                <StyledTableCell>{row.mobile}</StyledTableCell>
                <StyledTableCell>{row.email}</StyledTableCell>
                <StyledTableCell>{row.department}</StyledTableCell>
                <StyledTableCell>{row.designation}</StyledTableCell>
                <StyledTableCell>
                  <div className="flex items-center space-x-2">
                    <span
                      className="text-blue-800 border border-blue-800 inline-flex mr-2 align-top"
                      style={{
                        borderRadius: "50%",
                        borderWidth: "1px",
                        padding: "5px 10px",
                      }}
                      title="Letter"
                    >
                      {row.letter}
                    </span>
                    <span className="inline-block w-[100px] text-right">
                      {row.updated}
                    </span>
                  </div>
                </StyledTableCell>
                <StyledTableCell
                  style={{
                    textAlign: "center",
                    color: "darkblue",
                    textDecoration: "underline",
                  }}
                >
                  {row.number}
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    </TableContainer>
  );
}
