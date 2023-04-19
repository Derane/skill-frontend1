import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import useAccessValidate from 'hooks/useAccessValidate';
import {useDispatch, useSelector} from "react-redux";
import Button from "../../../components/Button/index";
import {TextField} from "@material-ui/core";
import {clearCurrentBook, createBook, updateBook} from "../../../app/actions/book";
import Link from "../../../components/Link";
import * as PAGES from "../../../constants/pages";

const getClasses = makeStyles(() => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap'
    },
    button: {
        margin: '0 auto',
    }
}));


const NewBook = ({}) => {
    const classes = getClasses();
    const book = useSelector(({book}) => book);
    const dispatch = useDispatch();

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [iconId, setIconId] = useState("");

    useEffect(() => {
        if (!book.isFetching && book.currentItem.id !== undefined) {
            setName(book.currentItem.name);
            setDescription(book.currentItem.author);
            setIconId(book.currentItem.icon.id);
        }
    }, [book.currentItem])

    return (
        <div>
            <div className={classes.container}>
                <TextField id="filled-basic" placeholder="Name"
                           value={name} onChange={e => setName(e.target.value)}
                           variant="filled"/>
                <TextField id="filled-basic" placeholder="Description"
                           value={description} onChange={e => setDescription(e.target.value)}
                           variant="filled"/>
                <TextField id="filled-basic" placeholder="Icon id"
                           value={iconId} onChange={e => setIconId(e.target.value)}
                           variant="filled"/>
            </div>

            { !book.isFetching && book.currentItem.id !== undefined &&

                    <div>

                        <Link to={location => ({
                            ...location,
                            pathname : `/${PAGES.BOOKS}`
                        })}>
                            <Button onClick={() =>
                                dispatch(updateBook(
                                    book.currentItem.id, {name: name, description: description, iconId: iconId === "" ? null : iconId}
                                ))
                            }>
                                Edit
                            </Button>
                        </Link>

                        <Link to={location => ({
                            ...location,
                            pathname : `/${PAGES.BOOKS}`
                        })}>
                            <Button onClick={() => dispatch(clearCurrentBook())}>Cancel</Button>
                        </Link>
                    </div>
                    }

                    {!book.isFetching && book.currentItem.name === undefined &&
                        <div>
                            <Link to={location => ({
                                ...location,
                                pathname : `/${PAGES.BOOKS}`
                            })}>
                                <Button onClick={() =>
                                    dispatch(createBook(
                                        {name: name, description: description, iconId: iconId === "" ? null : iconId}
                                    ))
                                }>
                                    Create
                                </Button>
                            </Link>

                            <Link to={location => ({
                                ...location,
                                pathname : `/${PAGES.BOOKS}`
                            })}>
                                <Button>Cancel</Button>
                            </Link>
                        </div>
                    }
        </div>
    )};

export default NewBook;
