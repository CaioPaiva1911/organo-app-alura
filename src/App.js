import { useState } from 'react';
import Banner from './components/Banner';
import Form from './components/Form';
import Team from './components/Team';

function App() {

  const teams  = [
    {
      name: 'Programming',
      primaryColor: '#D9F7E9',
      secondaryColor: '#57C278'
    },
    {
      name: 'Front-End',
      primaryColor: '#82CFFA',
      secondaryColor: '#E8F8FF'
    },
    {
      name: 'Data Science',
      primaryColor: '#A6D157',
      secondaryColor: '#F0F8E2'
    },
    {
      name: 'DevOps',
      primaryColor: '#E06b69',
      secondaryColor: '#FDE7E8'
    },
    {
      name: 'UX and Design',
      primaryColor: '#DB6EBF',
      secondaryColor: '#FAE9F5'
    },
    {
      name: 'Mobile',
      primaryColor: '#FFBA05',
      secondaryColor: '#FFF5D9'
    },
    {
      name: 'Inovation and Business',
      primaryColor: '#FF8A29',
      secondaryColor: '#FFEEDF'
    }
  ]

  const [colaborators, setColaborators] = useState([])

  const inNewColaboratorSaved = (colaborator) => {
    debugger
    setColaborators([...colaborators, colaborator])    
  }

  return (
    <div className="App">
      <Banner />
      <Form teams={teams.map(team => team.name)} onColaboratorSaved={colaborator => inNewColaboratorSaved(colaborator)}/>

      {teams.map(team => <Team 
        key={team.name} 
        name={team.name} 
        primaryColor={team.primaryColor} 
        secondaryColor={team.secondaryColor} 
        colaborators={colaborators.filter(colaborator => colaborator.team === team.name)}
      />)}
    </div>
  )
}

export default App;
