import React, { useState, ChangeEvent, FormEvent } from "react";
import { TextField, InputAdornment, Paper, Box, Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useAppDispatch } from "app/hooks";
import { getCustomersByName } from "./customerSlice";
import { handleLoading } from "app/globalSlice";

const CustomerSearch = () => {
  const dispatch = useAppDispatch();
  const [name, setName] = useState<string>("");

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) =>
    setName(e.target.value);

  const filterData = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch(handleLoading(true));
    try {
      await dispatch(getCustomersByName(name));
    } catch (e) {
      console.error(e);
    } finally {
      dispatch(handleLoading(false));
    }
  };

  return (
    <form action="#" noValidate method="GET" onSubmit={filterData}>
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
            value={name}
            onChange={handleNameChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
          <Button type="submit" sx={{ width: "10%" }} variant="contained">
            Search
          </Button>
        </Box>
      </Paper>
    </form>
  );
};

export default CustomerSearch;
