const ContactList = ({ contacts, onDelContact }) => (
  <ul>
    {contacts.map(({ id, name, number }) => (
      <li key={id}>
        <p>
          {name}: {number}
        </p>
        <button type="button" onClick={() => onDelContact(id)}>
          Delete
        </button>
      </li>
    ))}
  </ul>
);

export default ContactList;
