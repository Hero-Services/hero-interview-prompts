const Output = () => {
  const endpoint = "http://localhost:5000/api/v1";
  const postData = async (url = "", data = {}) => {
    const response = await fetch(url, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "http://localhost:3000",
        "Access-Control-Allow-Credentials": "true"
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify(data)
    });
    return response.json();
  };

  const [values, setValues] = React.useState(null);

  const handleValue = e => {
    const {name, value} = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    postData(`${endpoint}/signin`, {...values}).then(response => {
      console.log(response);
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" name="email" onChange={handleValue} />
      <input type="password" name="email" onChange={handleValue} />
      <button type="submit">Submit</button>
    </form>
  );
};
