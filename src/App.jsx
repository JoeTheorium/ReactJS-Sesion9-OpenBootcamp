import { useState } from 'react';
import './App.css';

const App = () => {
    const [contacts, setContacts] = useState([]);
    const [newContact, setNewContact] = useState('');

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
        <>
            <h1>Lista de Contactos</h1>
            <div className="input">
                <input
                    type="text"
                    value={newContact}
                    onChange={inputChange}
                    placeholder="Ingresar nombre de contacto"
                />
                <button onClick={addContact}>Añadir Contacto</button>
            </div>
            <ul>
                {contacts.map((contact, index) => (
                    <li key={index} style={{ color: contact.isConnected ? "green" : "red" }}>
                        {contact.name} - {contact.isConnected ? 'Conectado' : 'Desconectado'}
                        <button onClick={() => toggleStatus(index)}>Cambiar Estado</button>
                        <button onClick={() => deleteContact(index)}>Borrar Contacto</button>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default App;