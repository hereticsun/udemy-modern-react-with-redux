import { createAsycThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const removeUser = createAsycThunk('users/remove', async () => {
  const response = await axios.delete(`http://localhost:3005/users/${UserActivation.id}`);

  return response.data;
}) ;

export {removeUser};
