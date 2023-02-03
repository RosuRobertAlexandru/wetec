import { useState } from 'react'

function RobotForm (props) {
  const {onAdd} = props;

  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [mass, setMass] = useState('');

  const addRobot = (event) => {
    event.preventDefault();

    onAdd({
      type, 
      name, 
      mass
    });

    setName('');
    setType('');
    setMass('');
  }

  return (
    <form>
      <p>RobotForm</p>
      <label>
        Name:
        <input type="textbox" name="name" id="name" onChange={(event) => setName(event.target.value)} value={name} />
      </label>
      <br />
      <label>
        Type:
        <input type="textbox" name="type" id="type" onChange={(event) => setType(event.target.value)} value={type} />
      </label>
      <br />
      <label>
        Mass:
        <input type="textbox" name="mass" id="mass" onChange={(event) => setMass(event.target.value)} value={mass} />
      </label>
      <br />
      <input type="submit" value="button" id="button" onClick={addRobot}/>
    </form>
  );
}

export default RobotForm
