import { createSelector } from "@reduxjs/toolkit";
import { selectContacts } from "./contacts/slice";
import { selectFilter } from "./filter/slice";

export const selectFilteredContactsMemo = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
