import { Formik, useFormikContext } from 'formik';
import Yup from 'yup';
import React, { useEffect, useState } from 'react';
import Button from '../../shared/Button';
import TextInput from '../../shared/TextInput';
import './style.css';

const SalesForm = () => {
  const [formData, setFormData] = useState({
    mobile: '',
    firstName: '',
    lastName: '',
    address: '',
    items: [{ item: '', quantity: '', rate: '', total: 0 }],
    subTotal: 0
  });

  const { handleChange } = useFormikContext();

  const getValidationSchema = () =>
    Yup.object().shape({
      firstName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
      lastName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
      mobile: Yup.string().email('Invalid email').required('Required')
      //items:
    });

  const submitHandler = () => {};

  const { mobile } = formData;

  useEffect(() => {
    console.log('hello');
    const formDataCopy = { ...formData };
    const { items } = formDataCopy;
    const updatedItems = items.map(el => ({ ...el, total: el.rate * el.quantity }));
    formDataCopy.items = updatedItems;
    formDataCopy.subTotal = items.reduce((total, next) => {
      return next.total + total;
    }, 0);
    setFormData(formDataCopy);
    console.log(formDataCopy);
  }, [mobile]);

  const addItemHandler = () => {
    const formDataCopy = { ...formData };
    formDataCopy.items.push({ item: '', quantity: '', rate: 0, total: 0 });
    setFormData(formDataCopy);
  };

  const rateChangeHandler = (e, index) => {
    const {
      target: { value }
    } = e;

    const formDataCopy = { ...formData };
    formDataCopy.items[index].rate = value;
    setFormData(formDataCopy);
  };

  const quantityChangeHandler = (e, index) => {
    const {
      target: { value }
    } = e;

    const formDataCopy = { ...formData };
    formDataCopy.items[index].quantity = value;
    setFormData(formDataCopy);
  };

  const itemChangeHandler = (e, index) => {
    const {
      target: { value }
    } = e;

    const formDataCopy = { ...formData };
    formDataCopy.items[index].item = value;
    setFormData(formDataCopy);
  };

  return (
    <Formik initialValues={formData} validate={getValidationSchema} onSubmit={submitHandler}>
      <div className="sales-form bg-white">
        <div className="row col-md-3 col-sm-1">
          <TextInput onChange={handleChange} id="mobile" name="mobile" label="Mobile" />
          <TextInput onChange={handleChange} id="firstName" name="firstName" label="First Name" />
          <TextInput onChange={handleChange} id="lastName" name="lastName" label="Last Name" />
        </div>
        <div className="row col-md-1">
          <TextInput id="address" name="address" label="Address" />
        </div>

        <div className="row col-md-1">
          <table>
            <thead>
              <tr>
                <th className="text-left">SNo.</th>
                <th className="text-left">Item</th>
                <th className="text-left">Quantity</th>
                <th className="text-left">Rate</th>
                <th className="text-left">Total</th>
              </tr>
            </thead>
            <tbody>
              {formData.items.map((el, index) => (
                <tr key={index}>
                  <th>{index + 1}</th>
                  <th>
                    <TextInput
                      onChange={e => itemChangeHandler(e, index)}
                      value={el.item}
                      id={`item${index + 1}`}
                      name={`item${index + 1}`}
                      type="text"
                    />
                  </th>
                  <th>
                    <TextInput
                      onChange={e => quantityChangeHandler(e, index)}
                      className="text-right"
                      value={el.quantity}
                      id={`quantity${index + 1}`}
                      name={`quantity${index + 1}`}
                      type="number"
                    />
                  </th>
                  <th>
                    <TextInput
                      onChange={e => rateChangeHandler(e, index)}
                      className="text-right"
                      value={el.rate}
                      id={`rate${index + 1}`}
                      name={`rate${index + 1}`}
                      type="number"
                    />
                  </th>
                  <th>{el.total}</th>
                </tr>
              ))}
              <tr>
                <th colSpan={3} className="text-left sub-total">
                  Sub Total
                </th>
                <th colSpan={2} className="text-right sub-total">
                  &#8377;{formData.subTotal}
                </th>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="row col-md-2">
          <Button onClick={addItemHandler} className="btn-gray">
            Save
          </Button>
          <Button onClick={addItemHandler}>Add Item</Button>
        </div>
      </div>
    </Formik>
  );
};

export default SalesForm;
