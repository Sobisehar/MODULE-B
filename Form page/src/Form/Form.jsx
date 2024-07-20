import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import styles from './Form.module.css';

const FormApp = () => {
  const [data, setdata] = useState({
    firstName: "",
    lastName: "",
    email: "",
    PhoneNumber: "",
    month: "",
    day: "",
    year: "",
    streetAddress: "",
    city: "",
    state: "",
    zip: "",
    linkedIn: "",
    positionApplied: "",
    para: "",
    coverLetter: ""
  });

  const [save, setsave] = useState([]);

  function func(e) {
   const name = e.target.name;
   const value = e.target.value;
   setdata({ ...data, [name]: value }); 
  };

  function click(e){
    e.preventDefault();
    console.log(data)

    
    const newSave = {...data, id: new Date().getTime().toString()}
    setsave([...save, newSave]);
  }

  return (
    <>
    <div className={styles.head}>
      <div className={styles.top}>
        <div className={styles.heading}>
        <h1 className="ms-5 ">Job Application Form</h1>
        <p className="ms-5">Please complete the form below to apply for a position with us.</p>
        </div>
        <br />
        <hr />
        <br />
        <Form>
          <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label className=" ms-4">First Name</Form.Label>
          <Form.Control className="ms-4 w-75" onChange={func} name='firstName' type="text" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Last Name</Form.Label>
          <Form.Control className="w-75" onChange={func} name='lastName' type="text" />
        </Form.Group>
      </Row>
      
            <Row className="mb-3 mt-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label className="mt-3 ms-4">Email</Form.Label>
                <Form.Control className="ms-4 w-75" onChange={func} name='email' type="email" placeholder="ex: myname@example.com" />
              </Form.Group>
      
              <Form.Group as={Col} controlId="formGridPhoneNumber">
                <Form.Label className="mt-3">Phone Number</Form.Label>
                <Form.Control className="w-75" onChange={func} name='PhoneNumber' type="number" placeholder="(000) 000-0000" />
              </Form.Group>
            </Row>

      <Row className="mb-3 mt-3">        
        <Form.Group as={Col} controlId="formGridBirthDate">
          <Form.Label className="mt-3 ms-4">Birth Date</Form.Label>
          <Form.Select onChange={func} name='month' className={`ms-4 ${styles.birth1}`} defaultValue="Choose...">
            <option>Please select a month</option>
            <option>...</option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label className="mt-3"></Form.Label>
          <Form.Select onChange={func} name='day' className={`mt-3 ${styles.birth2}`} defaultValue="Choose...">
            <option>Please select a day</option>
            <option>...</option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label className="mt-3 "></Form.Label>
          <Form.Select onChange={func} name='year' className={`mt-3 ${styles.birth3}`} defaultValue="Choose...">
            <option>Please select a year</option>
            <option>...</option>
          </Form.Select>
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <h5  className="mt-5 ms-4">Current Address</h5>
        <Form.Label  className="mt-2 ms-4">Street Address</Form.Label>
        < Form.Control onChange={func} name='streetAddress' className={`mt-3 ms-4 ${styles.address}`} />
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label className="ms-4">City</Form.Label>
          <Form.Control onChange={func} name='city' className={`ms-4 ${styles.city}`}/>
        </Form.Group>

          <Form.Group as={Col} controlId="formGridCity">
          <Form.Label >State/Province</Form.Label>
          <Form.Control onChange={func} name='State' className={styles.state}/>
        </Form.Group> 
      </Row>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label className="ms-4">Postal / Zip Code</Form.Label>
        <Form.Control onChange={func} name='zip' type="code" className={`ms-4 ${styles.zip}`} />
      </Form.Group>
        
              <Form.Group className="mb-3" controlId="formGridAddress1">
                <Form.Label className="ms-4">LinkedIn</Form.Label>
                <Form.Control onChange={func} name='linkedIn' type="text" className={`ms-4 ${styles.link}`}/>
              </Form.Group>
              <br />
              <br />

              <Row className="mb-3 ">
        <Form.Group as={Col} controlId="formGridState">
          <Form.Label className="ms-4">Position Applied</Form.Label>
          <Form.Select onChange={func} name='positionApplied' className={`ms-4 ${styles.position}`} defaultValue="Choose...">
            <option>Please Select...</option>
            <option>...</option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label  className="ms-4">How did you hear about us</Form.Label>
          <Form.Select onChange={func} name='para' className={`ms-4 ${styles.position}`} defaultValue="Choose...">
            <option>Please Select...</option>
            <option>...</option>
          </Form.Select>
        </Form.Group>

      </Row>

      <br />
      <Form.Group as={Col} controlId="formGridCity">
          <h6 className="ms-4 mt-3">Cover Letter</h6>
          <textarea className={`ms-4 mt-3 ${styles.cover}`} onChange={func} name="coverLetter" id=""></textarea>
        </Form.Group>
        <br />
        <hr />
        <br />


      <Button type="Apply" onClick={click} className={`mb-3 ${styles.btn}`}>
        Apply
      </Button>
    </Form>
      </div>
    </div>

    {
    save.map((saving)=>{
      return(
        <div className={`container `}>
          <div className={` ${styles.result}`}>
            <div className='text-center'>
              <div className='col-12 col-lg-4 col-md-3 col-sm-12'>
                <h6 className={styles.resultVal}>First Name: {saving.firstname}</h6>
              </div>

              <div className='col-12 col-lg-4 col-md-3 col-sm-12'>
                <h6 className={styles.resultVal}>Last Name: {saving.lastName}</h6>
              </div>

              <div className='col-12 col-lg-4 col-md-3 col-sm-12'>
                <h6 className={styles.resultVal}>Email: {saving.email}</h6>
              </div>

              <div className='col-12 col-lg-4 col-md-3 col-sm-12'>
                <h6 className={styles.resultVal}>Phone Number: {saving.PhoneNumber}</h6>
              </div>

              <div className='col-12 col-lg-4 col-md-3 col-sm-12'>
                <h6 className={styles.resultVal}>Month: {saving.month}</h6>
              </div>

              <div className='col-12 col-lg-4 col-md-3 col-sm-12'>
                <h6 className={styles.resultVal}>Day: {saving.day}</h6>
              </div>

              <div className='col-12 col-lg-4 col-md-3 col-sm-12'>
                <h6 className={styles.resultVal}>Year: {saving.year}</h6>
              </div>

              <div className='col-12 col-lg-4 col-md-3 col-sm-12'>
                <h6 className={styles.resultVal}>Street Address: {saving.streetAddress}</h6>
              </div>

              <div className='col-12 col-lg-4 col-md-3 col-sm-12'>
                <h6 className={styles.resultVal}>City: {saving.city}</h6>
              </div>

              <div className='col-12 col-lg-4 col-md-3 col-sm-12'>
                <h6 className={styles.resultVal}>State: {saving.state}</h6>
              </div>

              <div className='col-12 col-lg-4 col-md-3 col-sm-12'>
                <h6 className={styles.resultVal}>Zip: {saving.zip}</h6>
              </div>

              <div className='col-12 col-lg-4 col-md-3 col-sm-12'>
                <h6 className={styles.resultVal}>linkedIn: {saving.linkedIn}</h6>
              </div>

              <div className='col-12 col-lg-4 col-md-3 col-sm-12'>
                <h6 className={styles.resultVal}>Position Applied: {saving.positionApplied}</h6>
              </div>

              <div className='col-12 col-lg-4 col-md-3 col-sm-12'>
                <h6 className={styles.resultVal}>Para: {saving.para}</h6>
              </div>

              <div className='col-12 col-lg-4 col-md-3 col-sm-12'>
                <h6 className={styles.resultVal}>Cover Letter: {saving.coverLetter}</h6>
              </div>
            </div>
          </div>
        </div>
      )
    })}

    </>
  )
}

export default FormApp



