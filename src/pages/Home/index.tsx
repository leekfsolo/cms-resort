import { Box, Button, Paper } from "@mui/material";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { homeSelector } from "app/selectors";
import React, { FormEvent, useEffect } from "react";
import { getBranches } from "./homeSlice";
import { handleLoading } from "app/globalSlice";
import CSelect from "components/CSelect";

const years = ["2022", "2021", "2020"];

const Home = () => {
  const dispatch = useAppDispatch();
  const { branches } = useAppSelector(homeSelector);

  const filterData = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch(handleLoading(true));
    try {
    } catch (e) {
      console.error(e);
    } finally {
      dispatch(handleLoading(false));
    }
  };

  useEffect(() => {
    dispatch(getBranches());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <form action="#" noValidate method="GET" onSubmit={filterData}>
      <Paper
        className="customer-search px-3 py-4"
        sx={{ width: "100%", mb: 2, borderRadius: 4 }}
      >
        <p className="mb-3">What are you looking for?</p>
        <Box className="w-100 d-flex align-items-center justify-content-between">
          <Box
            className="d-flex align-items-center gap-3"
            sx={{ width: "80%" }}
          >
            <CSelect
              className="customer-header__search"
              sx={{ width: "30%" }}
              size="small"
              placeholder="Branch"
              options={branches}
            />
            <CSelect
              className="customer-header__search"
              sx={{ width: "30%" }}
              size="small"
              placeholder="years"
              options={years}
            />
          </Box>
          <Button type="submit" sx={{ width: "10%" }} variant="contained">
            Search
          </Button>
        </Box>
      </Paper>
    </form>
  );
};

export default Home;
