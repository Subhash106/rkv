import { func, object, shape } from 'prop-types';
import React, { useEffect } from 'react';
import Button from '../../shared/Button';
import TextInput from '../../shared/TextInput';

const SalesFormFields = props => {
  const { values, handleChange, setFieldValue, handleSubmit } = props;
  const { mobile, firstName, lastName, address, items, subTotal } = values;

  useEffect(() => {
    const subTotal = items.reduce((total, next) => {
      return next.rate * next.quantity + total;
    }, 0);

    setFieldValue('subTotal', subTotal);
  }, [items]);

  const addItemHandler = () => {
    const itemsCopy = [...items];
    itemsCopy.push({ item: '', quantity: '', rate: 0, total: 0 });
    console.log('updatedItems', itemsCopy);
    setFieldValue('items', itemsCopy);
  };

  return (
    <div className="sales-form bg-white">
      <div className="row col-md-1">
        <h1 className="heading-primary">Enter sale details and save</h1>
      </div>
      <div className="row col-md-3 col-sm-1">
        <TextInput onChange={handleChange} value={mobile} id="mobile" name="mobile" label="Mobile" />
        <TextInput onChange={handleChange} value={firstName} id="firstName" name="firstName" label="First Name" />
        <TextInput onChange={handleChange} value={lastName} id="lastName" name="lastName" label="Last Name" />
      </div>
      <div className="row col-md-1">
        <TextInput onChange={handleChange} value={address} id="address" name="address" label="Address" />
      </div>

      <div className="row col-md-1">
        <table>
          <thead>
            <tr>
              <th className="text-left">SNo.</th>
              <th className="text-left">Item</th>
              <th className="text-left quantity">Quantity</th>
              <th className="text-left rate">Rate</th>
              <th className="text-right">Total</th>
            </tr>
          </thead>
          <tbody>
            {items.map((el, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <th>
                  <TextInput
                    onChange={handleChange}
                    value={el.item}
                    id={`items[${index}].item`}
                    name={`items[${index}].item`}
                    type="text"
                  />
                </th>
                <th>
                  <TextInput
                    onChange={handleChange}
                    className="text-right"
                    value={el.quantity}
                    id={`items[${index}].quantity`}
                    name={`items[${index}].quantity`}
                    type="number"
                  />
                </th>
                <th>
                  <TextInput
                    onChange={handleChange}
                    className="text-right"
                    value={el.rate}
                    id={`items[${index}].rate`}
                    name={`items[${index}].rate`}
                    type="number"
                  />
                </th>
                <th className="text-right">{el.rate * el.quantity}</th>
              </tr>
            ))}
            <tr>
              <th colSpan={3} className="text-left sub-total">
                Sub Total
              </th>
              <th colSpan={2} className="text-right sub-total">
                &#8377;{subTotal}
              </th>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="row col-md-2">
        <div />
        <div className="row col-md-2">
          <Button onClick={() => handleSubmit(values)} className="btn-gray">
            Save
          </Button>
          <Button onClick={addItemHandler}>Add Item</Button>
        </div>
      </div>
    </div>
  );
};

SalesFormFields.propTypes = {
  values: shape(object),
  handleChange: func,
  setFieldValue: func,
  handleSubmit: func,
  resetForm: func
};

export default SalesFormFields;
