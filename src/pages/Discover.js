import React from 'react';
import PageLayout from '../components/pageLayout/PageLayout';
import books from "../fakeData/books.json"
import Book from "../components/book/Book.js"

const Discover = () => {
    return (
        <PageLayout>
            <h1>Book</h1>
            {
                books.map((book) => (<Book key={book.id} book={book} />))
            }
        </PageLayout>
    );
};

export default Discover;