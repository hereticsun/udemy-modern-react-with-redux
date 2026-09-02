import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const removeUser = createAsyncThunk('users/remove', async () => {
  const response = await axios.delete(`http://localhost:3005/users/${UserActivation.id}`);

  return response.data;
}) ;

export {removeUser};
