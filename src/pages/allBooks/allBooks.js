import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { getMoreBooks } from '../../actions/createAction';

import { MAX_RESULTS } from '../../constants/api';

import CardsBook from './cardsBook';

const AllBooks = () => {
    const { total, books, searchTerm } = useSelector(
        state => state.volumeList,
      );

      const currentPage = searchTerm.page;
  const nextPage = currentPage + 1;

  const possibleCount = nextPage * MAX_RESULTS;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (books?.length === 0) {
      navigate('/', { replace: true });
    }
  }, [books,navigate]);

  const handleOnClick = () => {
    dispatch(getMoreBooks({ ...searchTerm, page: nextPage }));
  };
  return (
    <div className='all-books container'>
          <div className='amount-res'>Found {total} result</div>
          <CardsBook books={books}/>
    </div>
  );
};

export default AllBooks;
