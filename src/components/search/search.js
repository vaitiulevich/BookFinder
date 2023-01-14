import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { CATEGORY_SELECT_OPTIONS, SORT_SELECT_OPTIONS } from '../../constants/sort';

import { getBooks } from '../../actions/createAction';

import './search.css'

const SerchForm = ()=>{
    const initialValues = { searchTerm: '', category: '', page: 0, sort: 'Relevance' };

    const [values, setValues] = useState(initialValues);
    const [isInvalid, setIsInvalid] = useState(false);
  
    const dispatch = useDispatch();
    const navigate = useNavigate();
  
    const handleOnChange = e => {
      const { name, value } = e.target;
  
      setValues({ ...values, [name]: value });
      setIsInvalid(false);
    };
  
    const handleSubmit = e => {
      e.preventDefault();
  
      if (values.searchTerm === '') {
        setIsInvalid(true);
  
        return;
      }
  
      dispatch(getBooks(values));
  
      navigate('books/list');
    };
    return(
        <form onSubmit={handleSubmit}>
            <input type='text' 
            // isInvalid={isInvalid}
                name='searchTerm'
                className='inp-s'
                value={values.searchTerm}
                onChange={handleOnChange}
                placeholder='Search...'/>
            {/* {SORT_SELECT_OPTIONS.map(({ name, value }, index) => (
                <option key={index} value={value}>
                  {name}
                </option>
              ))} */}
                <button className='btn-s' id='submit-button' size='sm' variant='secondary' type='submit'>Search</button>
        </form>
    )
}

export default SerchForm;