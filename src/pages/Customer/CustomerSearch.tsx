import React from "react";
import { TextField, InputAdornment, Paper, Box, Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const CustomerSearch = () => {
  return (
    <Paper
      className="customer-search px-3 py-4"
      sx={{ width: "100%", mb: 2, borderRadius: 4 }}
    >
      <p className="mb-3">What are you looking for?</p>
      <Box className="w-100 d-flex align-items-center justify-content-between">
        <TextField
          className="customer-header__search"
          sx={{ width: "30%" }}
          size="small"
          placeholder="Search customer by name..."
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
        <Button sx={{ width: "10%" }} variant="contained">
          Search
        </Button>
      </Box>
    </Paper>
  );
};

export default CustomerSearch;
