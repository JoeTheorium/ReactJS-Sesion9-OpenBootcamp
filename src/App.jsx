import { useState } from 'react';

const App = () => {
    const [ contacts, setContacts ] = useState([]);
    const [ newContact, setNewContact ] = useState('');

    const inputChange = (event) => {
        setNewContact(event.target.value);
    };

    const addContact = () => {
        if (newContact.trim() !== '') {
            setContacts([...contacts, { name: newContact, isConnected: false }]);
            setNewContact('');
        }
    };

    const deleteContact = (index) => {
        const updatedContacts = [...contacts];
        updatedContacts.splice(index, 1);
        setContacts(updatedContacts);
    };

    const toggleStatus = (index) => {
        const updatedContacts = [...contacts];
        updatedContacts[index].isConnected = !updatedContacts[index].isConnected;
        setContacts(updatedContacts);
    };

    return (
        <div>
            <h1>Contact List</h1>
            <input
                type="text"
                value={newContact}
                onChange={inputChange}
                placeholder="Ingresar nombre de contacto"
            />
            <button onClick={addContact}>Add Contact</button>
            <ul>
                {contacts.map((contact, index) => (
                    <li key={index}>
                        {contact.name} - {contact.isConnected ? 'Conectado' : 'Desconectado'}
                        <button onClick={() => toggleStatus(index)}>Toggle Status</button>
                        <button onClick={() => deleteContact(index)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default App;
