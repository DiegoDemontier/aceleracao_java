import * as React from 'react';
import CollapsibleTable from './components/CollapsibleTable';
import Form from './components/Form';
import Header from './components/Header';
import axios from 'axios';


function App() {
  const [user, setUser] = React.useState([]);
  const [type, setType] = React.useState([]);
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    const requestStudent = async () => {
      const request = await axios
        .get(`https://aceleracaoapi.diegodemontier.repl.co/${user}`)
        .then((res) => res.data)
        .catch((err) => err.response);
        setData(request)
    };
    requestStudent();
  }, [user]);

  return (
    <div className="container">
      <Header />
      <Form
        setUser={setUser}
        setType={setType}
      />
      <CollapsibleTable
        data={data}
        type={type}
      />
    </div>
  );
}

export default App;
