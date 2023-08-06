'use client'
import styles from './page.module.css';
import { useUserAuth } from './context/AuthContext';
import Container from '@mui/material/Container';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import NewsCard from './component/NewsCard'
export default function Home() {


  const { news } = useUserAuth();
  if (news === null) {
    return (
      <main className={styles.main}>
        <Container>
          <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
            <CircularProgress />
          </Box>
        </Container>
      </main>
    );
  }
  return (
    <main className={styles.main}>
      <Container >
        <Box sx={{ width: '100%' }}>
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <NewsCard />
          </Grid>
        </Box>
      </Container>

    </main>
  );
}
