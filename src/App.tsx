import { Button, CircularProgress, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import {  useState } from "react";
import { useFetchAllBooksQuery } from "./app/services/BookService";
import { CardComponent } from "./Components/Card";
import { Header } from "./Components/Header";
import { Search } from "./Components/Search";
import { SelectType } from "./Components/SelectType";
import { SelectSort } from "./Components/SelectSort";
import SearchIcon from '@mui/icons-material/Search';

function App() {
  const [search, setSearch] = useState('JavaScript')
  const [type, setType] = useState('all')
  const [sort, setSort] = useState('relevance')
  const [maxResults, setMaxResults] = useState(11)
  const [request, setRequest] = useState({search, type, sort, maxResults})

  const {data: books, isLoading, error} = useFetchAllBooksQuery(request)

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

          <Grid item 
                container
                justifyContent='center'
                alignItems='center'
          >
            <Grid item >
              <Search setSearch={setSearch}/>
            </Grid>
            <Grid item>
              <Button variant='contained'
                      onClick={() => setRequest({search, type, sort, maxResults})}
                      endIcon={<SearchIcon/>}
              >
                Search
              </Button>
            </Grid>
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
              <SelectType type={type} setType={setType}/>
            </Grid>
            <Grid item 
                  width={100}
            >
              <SelectSort sort={sort} setSort={setSort}/>
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
            <Typography>Found {books?.totalItems} result</Typography> 
          </Grid>
        </Grid>

        <Grid item 
              container
              spacing={1}
        >
            {isLoading ? <CircularProgress /> : null}
            {books && books.items.map((book) => (
              <Grid item 
                    key={book.id}
              >
                  <CardComponent imageLinks={book.volumeInfo.imageLinks}
                                 categories={book.volumeInfo.categories}
                                 title={book.volumeInfo.title}
                                 authors={book.volumeInfo.authors}
                  />
              </Grid>
            ))}
            {error ? "Ошибка!" : null}
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
