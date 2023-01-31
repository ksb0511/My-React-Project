import React from "react";
import './Login.css';
import {Form, Label, Input} from 'reactstrap';


const Login = () => {
    return (
        <div className="form-main">
            <Form className="form-signin">
                <h2 className="form-signin-heading">Please sign in</h2>
                <Label for="inputEmail" className="form-control" placeholder="Email address" required autofocus />
                <Input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autofocus />
                <Label for="inputPassword" className="sr-only">Password</Label>
                <Input type="password" id="inputPassword" className="form-control" placeholder="Password" required />
                {/*<Button className="btn btn-lg btn-block" color="primary" type="button" onClick={() => {*/}
                {/*history.push('/main')}}> Sign in</Button>*/}

            </Form>
        </div>
    );
}

export default Login