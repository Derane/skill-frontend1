import React, {useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'components/Link';
import * as PAGES from 'constants/pages';
import {fetchBooks, clearBooks, clearCurrentBook} from "../../../app/actions/book";
import BookItem from "../../../components/BookItem";
import Button from "../../../components/Button/index";

const getClasses = makeStyles(() => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
    },
}));

const Books = ({
                 }) => {
    const classes = getClasses();

    const book = useSelector(({book}) => book);
    const dispatch = useDispatch();
    useEffect(() => {
        if (!book.isUpdating && !book.isCreating && !book.isDeleting) {
            dispatch(fetchBooks())
            return () => {
                dispatch(clearBooks())
            };
        }
    }, [book.isUpdating, book.isCreating, book.isDeleting])



    return (
        <div className={classes.container}>
            <Link to={location => ({
                ...location,
                pathname : `/${PAGES.NEW_BOOK}`
            })}>
                <Button onClick={() => dispatch(clearCurrentBook())}>New book</Button>
            </Link>
            {(book.isFetching || book.isUpdating || book.isCreating) &&
                <div>
                    Making books ready to show..
                </div>
            }
            {book.items.map((value, index) =>
                <BookItem item={value} ></BookItem>
            )}
        </div>
    )
};

export default Books;
