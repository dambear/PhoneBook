import React, { useState } from 'react';

const Phonebook = () => {
  const [contacts, setContacts] = useState([]);
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [isUpdating, setIsUpdating] = useState(false);
  const [updateIndex, setUpdateIndex] = useState(null);
  
  const phoneNumberRegex = /^\d+$/; // Regex pattern for numbers only

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !phoneNumber || !address) {
      alert('Please provide name, phone number, and address');
      return;
    }

    if (!phoneNumberRegex.test(phoneNumber)) {
      alert('Phone number should contain only numbers');
      return;
    }

    if (isUpdating) {
      const updatedContacts = [...contacts];
      updatedContacts[updateIndex] = { name, phoneNumber, address };
      setContacts(updatedContacts);
      setIsUpdating(false);
      setUpdateIndex(null);
    } else {
      setContacts([...contacts, { name, phoneNumber, address }]);
    }

    setName('');
    setPhoneNumber('');
    setAddress('');
  };

  const handleUpdate = (index) => {
    const selectedContact = contacts[index];
    setName(selectedContact.name);
    setPhoneNumber(selectedContact.phoneNumber);
    setAddress(selectedContact.address);
    setIsUpdating(true);
    setUpdateIndex(index);
  };

  const handleDelete = (index) => {
    const updatedContacts = [...contacts];
    updatedContacts.splice(index, 1);
    setContacts(updatedContacts);
  };

  return (
    <div className="p-2 w-2/4 mx-auto bg-white rounded-xl shadow-md space-y-4">
      <h1 className="text-3xl font-semibold text-center">Phonebook</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <label className="block">
          <span className="text-gray-700">Name:</span>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 p-2 block w-full rounded-md border-2 border-gray-300"
          />
        </label>
        <label className="block">
          <span className="text-gray-700">Phone Number:</span>
          <input
            type="text"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="mt-1 p-2 block w-full rounded-md border-2 border-gray-300"
          />
        </label>
        <label className="block">
          <span className="text-gray-700">Address:</span>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="mt-1 p-2 block w-full rounded-md border-2 border-gray-300"
          />
        </label>
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition duration-300"
        >
          {isUpdating ? 'Update Contact' : 'Add Contact'}
        </button>
      </form>

      <table className="w-full">
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone Number</th>
            <th>Address</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody className='text-center'>
          {contacts.map((contact, index) => (
            <tr key={index}>
              <td>{contact.name}</td>
              <td>{contact.phoneNumber}</td>
              <td>{contact.address}</td>
              <td>
                <button
                  onClick={() => handleUpdate(index)}
                  className="text-blue-500 hover:underline"
                >
                  Update
                </button>
                <button
                  onClick={() => handleDelete(index)}
                  className="text-red-500 hover:underline ml-2"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Phonebook;
