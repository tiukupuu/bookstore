import { useState } from 'react';
import { TextField, Button, Stack } from '@mui/material';

function AddBook({ addBook }) {
  const [book, setBook] = useState({ title: '', author: '', isbn: '', year: '', price: '' });

  const inputChanged = (event) => {
    setBook({ ...book, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addBook(book);
    setBook({ title: '', author: '', isbn: '', year: '', price: '' });
  };

  return (
    <Stack direction="row" spacing={2} mt={2} justifyContent="center" alignItems="center">
      <TextField
        label="Title"
        name="title"
        value={book.title}
        onChange={inputChanged}
      />
      <TextField
        label="Author"
        name="author"
        value={book.author}
        onChange={inputChanged}
      />
      <TextField
        label="ISBN"
        name="isbn"
        value={book.isbn}
        onChange={inputChanged}
      />
      <TextField
        label="Year"
        name="year"
        value={book.year}
        onChange={inputChanged}
      />
      <TextField
        label="Price"
        name="price"
        value={book.price}
        onChange={inputChanged}
      />
      <Button variant="outlined" onClick={handleSubmit}>
        Add
      </Button>
    </Stack>
  );
}

export default AddBook;
