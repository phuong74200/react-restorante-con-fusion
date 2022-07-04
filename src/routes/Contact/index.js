import { FormFeedback, FormGroup, Label, Col, Input, Button, Breadcrumb, BreadcrumbItem } from 'reactstrap';

import { Link } from 'react-router-dom';

import { Form, Field } from 'react-final-form';

import { email } from '../../common/valid';

const onSubmit = (data, formData) => {
    console.log(data);
};
const validate = (values) => {
    const errors = {};
    if (!values.firstname || !/^[A-Za-z\s]{3,}$/.test(values.firstname)) {
        errors.firstname = "First name is invalid";
    }
    if (!values.lastname || !/^[A-Za-z\s]{3,10}$/.test(values.lastname)) {
        errors.lastname = "Last name is invalid";
    }
    if (!values.telnum || !/^\d+$/.test(values.telnum)) {
        errors.telnum = "Tel. num name is invalid";
    }
    if (!values.email || !email.test(values.email)) {
        errors.email = "Email is not valid";
    }
    return errors;
};

const Contact = () => {
    return (
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Contact us</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>Send us your feedback</h3>
                    <hr />
                </div>
            </div>
            <div className="col-12 col-md-9">
                <Form
                    onSubmit={onSubmit}
                    validate={validate}
                    render={({ handleSubmit }) => {
                        return (
                            <form onSubmit={handleSubmit}>
                                <FormGroup row>
                                    <Field
                                        name="firstname"
                                        render={({ input, meta }) => (
                                            <>
                                                <Label htmlFor="firstname" md={2}>First Name</Label>
                                                <Col md={10}>
                                                    <Input invalid={meta.active && meta.error} type="text" name="firstname" placeholder="First Name" {...input} />
                                                    <FormFeedback>{meta.error}</FormFeedback>
                                                </Col>
                                            </>
                                        )}
                                    />
                                </FormGroup>
                                <FormGroup row>
                                    <Field
                                        name="lastname"
                                        render={({ input, meta }) => (
                                            <>
                                                <Label htmlFor="lastname" md={2}>First Name</Label>
                                                <Col md={10}>
                                                    <Input invalid={meta.active && meta.error} type="text" name="lastname" placeholder="Last Name" {...input} />
                                                    <FormFeedback>{meta.error}</FormFeedback>
                                                </Col>
                                            </>
                                        )}
                                    />
                                </FormGroup>
                                <FormGroup row>
                                    <Field
                                        name="telnum"
                                        render={({ input, meta }) => (
                                            <>
                                                <Label htmlFor="telnum" md={2}>Contact Tel.</Label>
                                                <Col md={10}>
                                                    <Input invalid={meta.active && meta.error} type="tel" id="telnum" name="telnum" placeholder="Tel. number" {...input} />
                                                    <FormFeedback>{meta.error}</FormFeedback>
                                                </Col>
                                            </>
                                        )}
                                    />
                                </FormGroup>
                                <FormGroup row>
                                    <Field
                                        name="email"
                                        render={({ input, meta }) => (
                                            <>
                                                <Label htmlFor="email" md={2}>Email</Label>
                                                <Col md={10}>
                                                    <Input invalid={meta.active && meta.error} type="email" id="email" name="email" placeholder="Email" {...input} />
                                                    <FormFeedback>{meta.error}</FormFeedback>
                                                </Col>
                                            </>
                                        )}
                                    />
                                </FormGroup>
                                <FormGroup row>
                                    <Field
                                        name="agree"
                                        type="checkbox"
                                        render={({ input, meta }) => (
                                            <>
                                                <Col md={{ size: 6, offset: 2 }}>
                                                    <FormGroup check>
                                                        <Label check>
                                                            <Input type="checkbox" name="agree" {...input} /> {' '}
                                                            <strong>May we contact you?</strong>
                                                        </Label>
                                                    </FormGroup>
                                                </Col>
                                            </>
                                        )}
                                    />
                                    <Field
                                        name="contactType"
                                        type="select"
                                        render={({ input, meta }) => (
                                            <>
                                                <Col md={{ size: 3, offset: 1 }}>
                                                    <Input type="select" name="contactType" {...input}>
                                                        <option>Tel.</option>
                                                        <option>Email</option>
                                                    </Input>
                                                </Col>
                                            </>
                                        )}
                                    />
                                </FormGroup>
                                <FormGroup row>
                                    <Field
                                        name="message"
                                        render={({ input, meta }) => (
                                            <>
                                                <Label htmlFor="message" md={2}>Your Feedback</Label>
                                                <Col md={10}>
                                                    <Input type="textarea" id="message" name="message" rows="12" {...input}></Input>
                                                </Col>
                                            </>
                                        )}
                                    />
                                </FormGroup>
                                <Col md={{ size: 10, offset: 2 }}>
                                    <Button type="submit" color="primary">
                                        Send Feedback
                                    </Button>
                                </Col>
                            </form>
                        )
                    }}
                >
                </Form>
            </div>
        </div>
    )
}

export default Contact;
