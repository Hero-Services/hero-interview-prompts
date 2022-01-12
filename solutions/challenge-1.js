const Output = () => {
  const [users, setUsers] = React.useState([]);

  React.useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <div>
      <ul style={{listStyle: "none", padding: "0"}}>
        {users.map(user => (
          <li
            key={user.id}
            style={{
              border: "2px solid #000",
              borderRadius: "5px",
              padding: "0 10px",
              marginBottom: "10px",
              width: "fit-content",
              minWidth: "200px"
            }}>
            <h3>{user.name}</h3>
            <p>{user.email}</p>
            <p>{user.phone}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
