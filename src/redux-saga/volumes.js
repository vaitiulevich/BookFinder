import { takeEvery, put, call, all } from 'redux-saga/effects';

import { googleBooksApi } from '../services/services';

import {
  getBooksSuccess,
  getBooksFailure,
  getMoreBooksSuccess,
  getMoreBooksFailure,
} from '../actions/createAction';
import { GET_BOOKS_LIST_PENDING, GET_MORE_BOOKS_PENDING } from '../actions/actions';

function* getBooks({ payload }) {
  try {
    const searchTerm = payload;

    const { totalItems, items } = yield call(googleBooksApi.getBooks, searchTerm);

    yield put(getBooksSuccess({ totalItems, items, searchTerm }));
  } catch ({ response: { data } }) {
    yield put(getBooksFailure(data.error));
  }
}

function getMoreBooks({ payload }) {
  try {
    const searchTerm = payload;

    const { totalItems, items } = call(googleBooksApi.getBooks, searchTerm);

    put(getMoreBooksSuccess({ totalItems, items, searchTerm }));
  } catch ({ response: { data } }) {
    put(getMoreBooksFailure(data.error));
  }
}

export function volumeListSaga() {
  return all([
    takeEvery(GET_BOOKS_LIST_PENDING, getBooks),
    takeEvery(GET_MORE_BOOKS_PENDING, getMoreBooks),
  ]);
}
