import React from 'react';
import EditBook from '../components/EditBook';

const BookList = ({ books, deleteBook, bookEdited }) => {
  console.log('books length:::', books);
  if (books.length === 0) return null;

  const TaskRow = (task, index) => {
    return (
      <tr key={index} className={index % 2 === 0 ? 'odd' : 'even'}>
        <td>{task.id}</td>
        <td>{task.task}</td>
        <td>{task.assignee}</td>
        <td>
          <div className="row">
            <div className="col-md-6">{task.status}</div>
            <div className="col-md-3">
              <EditBook task={task} bookEdited={bookEdited} />
            </div>
            <div className="col-md-3">
              <button
                type="button"
                onClick={(e) => deleteBook(task.id)}
                className="btn btn-danger right"
              >
                Delete
              </button>
            </div>
          </div>
        </td>
      </tr>
    );
  };

  const bookTable = books.map((book, index) => TaskRow(book, index));

  return (
    <div className="container">
      <h2>books</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Book Id</th>
            <th>Book Name</th>
            <th>Assignee</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>{bookTable}</tbody>
      </table>
    </div>
  );
};

export default BookList;
