import { createAsyncThunk } from "@reduxjs/toolkit";
import { authApi } from "../../config/authApi";

export const fetchContactsThunk = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    try {
      const { data } = await authApi.get("contacts");
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContactThunk = createAsyncThunk(
  "contacts/addContact",
  async (contact, thunkAPI) => {
    try {
      const { data } = await authApi.post("contacts", contact);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContactThunk = createAsyncThunk(
  "contacts/deleteContact",
  async (id, thunkAPI) => {
    try {
      const { data } = await authApi.delete(`contacts/${id}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
