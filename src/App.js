import React, { useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import {
  Container,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  TextField,
  MenuItem,
} from "@mui/material";
import theme from "./theme";

// Dummy Data for Events
const eventData = [
  { id: 1, name: "Basketball Tournament", description: "Inter-college match", date: "2024-12-20", type: "Sports", student: "Ritodip Dewry" },
  { id: 2, name: "Art Exhibition", description: "Display of student artworks", date: "2024-12-25", type: "Cultural", student: "Abhik Ghosh" },
  { id: 3, name: "Football Match", description: "Friendly match", date: "2024-12-18", type: "Sports", student: "Aham Mondal" },
  { id: 4, name: "Singing Competition", description: "College Competition", date: "2024-12-14", type: "Cultural", student: "Amitrakshar Chakraborty" },
];

function App() {
  const [filter, setFilter] = useState(""); // State for filtering events
  const today = new Date(); // Get today's date

  // Filter events based on type
  const filteredEvents = filter
    ? eventData.filter((event) => event.type === filter)
    : eventData;

  // Function to check if an event is past
  const isPastEvent = (date) => {
    const eventDate = new Date(date);
    return eventDate < today;
  };

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg" style={{ marginTop: "20px" }}>
        {/* Header */}
        <Typography variant="h3" align="center" gutterBottom color="primary">
          Teacher Dashboard
        </Typography>
        <Typography variant="h6" align="center" gutterBottom color="textSecondary">
          Logged in as: <b>Dr. Stephen Hawking</b>
        </Typography>

        {/* Filter */}
        <TextField
          select
          label="Filter by Type"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          fullWidth
          margin="normal"
          variant="outlined"
        >
          <MenuItem value="">All</MenuItem>
          <MenuItem value="Sports">Sports</MenuItem>
          <MenuItem value="Cultural">Cultural</MenuItem>
        </TextField>

        {/* Table */}
        <TableContainer component={Paper} elevation={3}>
          <Table>
            {/* Table Header */}
            <TableHead style={{ backgroundColor: "#f4f6f8" }}>
              <TableRow>
                <TableCell align="center" style={{ fontWeight: "bold" }}>Event ID</TableCell>
                <TableCell align="center" style={{ fontWeight: "bold" }}>Name</TableCell>
                <TableCell align="center" style={{ fontWeight: "bold" }}>Description</TableCell>
                <TableCell align="center" style={{ fontWeight: "bold" }}>Date</TableCell>
                <TableCell align="center" style={{ fontWeight: "bold" }}>Type</TableCell>
                <TableCell align="center" style={{ fontWeight: "bold" }}>Student</TableCell>
                <TableCell align="center" style={{ fontWeight: "bold" }}>Actions</TableCell>
              </TableRow>
            </TableHead>

            {/* Table Body */}
            <TableBody>
              {filteredEvents.map((event) => (
                <TableRow key={event.id} style={{ backgroundColor : "white" }}>
                  <TableCell align="center">{event.id}</TableCell>
                  <TableCell align="center">{event.name}</TableCell>
                  <TableCell align="center">{event.description}</TableCell>
                  <TableCell align="center">{event.date}</TableCell>
                  <TableCell align="center">{event.type}</TableCell>
                  <TableCell align="center">{event.student}</TableCell>
                  <TableCell align="center">
                    <Button variant="contained" color="secondary" size="small" style={{ marginRight: "10px" }}>
                      Approve
                    </Button>
                    <Button variant="outlined" color="error" size="small">
                      Reject
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </ThemeProvider>
  );
}

export default App;
