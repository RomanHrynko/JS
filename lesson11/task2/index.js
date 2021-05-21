const sortContacts = (contacts, isAsc) => {
  if (!Array.isArray(contacts)) {
    return null;
  }

  if (isAsc === false) {
    return contacts.sort((a, b) => b.name.localeCompare(a.name));
  }

  return contacts.sort((a, b) => a.name.localeCompare(b.name));
};

const contact = [
  { name: 'Bob', phoneNumber: '888-88-88' },
  { name: 'Tom', phoneNumber: '777-77-77' },
  { name: 'Ann', phoneNumber: '111-77-77' },
  { name: 'Lebron', phoneNumber: '333-77-77' },
  { name: 'Ross', phoneNumber: '333-33-33' },
  { name: 'Siruy', phoneNumber: '555-55-55' },
  { name: 'Igor', phoneNumber: '777-77-77' },
];

console.log(sortContacts(contact, false));
