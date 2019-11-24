import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';

const searchBox = () => {
    return (
        <Navbar className="bg-light justify-content-between">
        <div>
        <h1>Friends Profile</h1>
        </div>
        <Form inline>
          <FormControl type="text" placeholder="Search" className=" mr-sm-2" />
          <Button type="submit">Submit</Button>
        </Form>
      </Navbar>
    )
}

export default searchBox;
