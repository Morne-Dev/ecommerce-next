import React from 'react';
import Head from 'next/head';
import { AppBar, Toolbar, Typography, Container } from '@material-ui/core';

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>Next Amazonly</title>
      </Head>
      <AppBar position="static">
        <Toolbar>
          <Typography>amazonly</Typography>
        </Toolbar>
      </AppBar>
      <Container>{children}</Container>
    </div>
  );
}
