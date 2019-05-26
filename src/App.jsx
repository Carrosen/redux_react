import React from 'react';
import { Container, Header } from 'semantic-ui-react';
import { connect } from 'react-redux';

const App = () => {
  return (
    <>
      <Container>
        <Header
          as='h1'>
           Hello World
        </Header>
      </Container>
    </>
  );
}

export default connect()(App)
