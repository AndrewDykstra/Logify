import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Typography, Paper } from '@mui/material';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios.get('http://localhost:3000/')
      .then(response => {
        setMessage(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the data!', error);
      });
  }, []);

  return (
    <Container>
      <Paper elevation={3} style={{ padding: '16px', marginTop: '16px' }}>
        <Typography variant="h4" component="h1">
          Logify
        </Typography>
        <Typography variant="body1" component="p">
          {message}
        </Typography>
      </Paper>
    </Container>
  );
}

export default App;
