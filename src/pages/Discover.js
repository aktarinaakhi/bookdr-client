import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import PageLayout from '../components/pageLayout/PageLayout';
import { createBook, deleteBook, getAllBooks } from '../lib/service';
import useAuth from '../lib/useAuth';
import BookList from './BookList';
import './modal.css';

const Discover = (props) => {
  const { user } = useAuth();
  const [description, setDescription] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [books, setBooks] = useState([]);
  const [numberOfBooks, setNumberOfBooks] = useState([]);
  const [isBookEdited, setBookEdited] = useState(false);
  const { register, handleSubmit } = useForm();

  useEffect(() => {
    getAllBooks().then((books) => {
      console.log(books);
      setBooks(books);
    });
  }, [numberOfBooks, isBookEdited]);

  function delBook(taskId) {
    deleteBook(taskId).then((response) => {
      console.log(response);
      setNumberOfBooks(numberOfBooks - 1);
    });
  }

  function bookCreated() {
    setNumberOfBooks(numberOfBooks + 1);
  }

  function bookEdited(res) {
    setBookEdited(res);
  }
  //   const onSubmit = (data, e) => {
  //     createBook(data).then((response) => {
  //       BookCreated();
  //       e.target.reset();
  //     });
  //   };
  const onSubmitForm = async (e) => {
    try {
      const body = { description };
      const response = await fetch('http://localhost:5000/todos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      });
      console.log(response);

      window.location = '/';
    } catch (err) {
      console.error(err.message);
    }
    e.preventDefault();
  };
  return (
    <PageLayout>
      <div className="d-flex justify-content-between flex-row">
        <div>
          <h5>Hi {user?.displayName} Here’s your reading list.</h5>
          <div className="container mrgnbtm">
            <div className="row">
              <div className="col-md-12"></div>
            </div>
          </div>
          <div className="container mrgnbtm">
            <BookList
              books={books}
              deleteBook={delBook}
              bookEdited={bookEdited}
            ></BookList>
          </div>
        </div>
        <button
          type="button"
          data-toggle="modal"
          className="openModalBtn btn btn-warning"
          onClick={() => {
            setModalOpen(true);
          }}
        >
          Add
        </button>

        {modalOpen && (
          <div className="modalBackground">
            <div className="modalContainer">
              <div className="titleCloseBtn">
                <button
                  onClick={() => {
                    setModalOpen(false);
                  }}
                >
                  X
                </button>
              </div>
              <div>
                <h4>Are You want to add a book?</h4>
              </div>

              <div className="body text-left">
                <form onSubmit={handleSubmit(onSubmitForm)}>
                  <div className="row mrgnbtm text-left">
                    <div className="form-group col-md-12">
                      <label htmlFor="exampleInputEmail1">Book name</label>
                      <input
                        {...register('title')}
                        placeholder="Create a Book"
                        className="form-control w-100"
                        name="title"
                        id="title"
                      />
                    </div>
                  </div>
                  <div className="row mrgnbtm text-left">
                    <div className="form-group col-md-12">
                      <label htmlFor="exampleInputPassword1">Author</label>
                      <input
                        {...register('author')}
                        placeholder="Author"
                        className="form-control"
                        name="author"
                        id="author"
                      />
                    </div>
                  </div>

                  <div className="row mrgnbtm text-left">
                    <div className="form-group col-md-12">
                      <label htmlFor="exampleInputEmail1">Description</label>
                      <input
                        {...register('description')}
                        placeholder="description"
                        className="form-control"
                        name="description"
                        id="description"
                      />
                    </div>
                  </div>
                  <div className="row mrgnbtm text-left">
                    <div className="form-group col-md-12">
                      <label htmlFor="exampleInputEmail1">Published Year</label>
                      <input
                        {...register('year')}
                        placeholder="year"
                        className="form-control"
                        name="year"
                        id="year"
                      />
                    </div>
                  </div>
                  <input type="submit" className="btn btn-danger mrgnbtm" />
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </PageLayout>
  );
};

export default Discover;
