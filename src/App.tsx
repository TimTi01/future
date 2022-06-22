import { Card, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import { fetchBooks } from "./app/redicers/ActionCreators";
import { Header } from "./Components/Header";
import { Search } from "./Components/Search";
import { SelectComponent } from "./Components/Select";

function App() {
  const dispatch = useAppDispatch()
  const {books, isLoading, error} = useAppSelector(state => state.bookReducer)

  useEffect(() => {
    dispatch(fetchBooks())
  }, [])

  console.log(books);

  return (
    <Container maxWidth='xl'>
      <Grid container 
            direction='column'
      >
        <Grid item 
              container
              direction='column'
              alignItems='center'
        >
          <Grid item>
            <Header/>
          </Grid>

          <Grid item>
            <Search/>
          </Grid>

          <Grid item 
                container
                justifyContent='center'
                spacing={1}
                mt={2} 
          >
            <Grid item 
                  width={100}
            >
              <SelectComponent/>
            </Grid>
            <Grid item 
                  width={100}
            >
              <SelectComponent/>
            </Grid>
          </Grid>
        </Grid>

        <Grid item 
              container
              direction='column'
              alignItems='center'
              mt={4}
        >
          <Grid item>
            <Typography>Found ??? result</Typography> 
          </Grid>
        </Grid>

        <Grid item 
              container
        >
          <Grid item>
            <Card>

            </Card>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
