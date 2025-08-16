import { useState } from 'react';
import Form from './components/Form';
import Team from './components/Team';
import Footer from './components/Footer';
import { v4 as uuidv4 } from 'uuid';

import Banner from './components/Banner';

function App() {

  const [teams, setTeams]  = useState([
    {
      id: uuidv4(),
      name: 'Programming',
      color: '#57C278'
    },
    {
      id: uuidv4(),
      name: 'Front-End',
      color: '#E8F8FF'
    },
    {
      id: uuidv4(),
      name: 'Data Science',
      color: '#F0F8E2'
    },
    {
      id: uuidv4(),
      name: 'DevOps',
      color: '#FDE7E8'
    },
    {
      id: uuidv4(),
      name: 'UX and Design',
      color: '#FAE9F5'
    },
    {
      id: uuidv4(),
      name: 'Mobile',
      color: '#FFF5D9'
    },
    {
      id: uuidv4(),
      name: 'Inovation and Business',
      color: '#FFEEDF'
    }
  ]);

  const initial = [
    {
      id: uuidv4(),
      favorited: false,
      name: 'JULIANA AMOASEI',
      cargo: 'Desenvolvedora de software e instrutora',
      image: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      team: teams[0].name
    },
    {
      id: uuidv4(),
      favorited: false,
      name: 'DANIEL ARTINE',
      cargo: 'Engenheiro de Software na Stone Age',
      image: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      team: teams[0].name
    },
    {
      id: uuidv4(),
      favorited: false,
      name: 'GUILHERME LIMA',
      cargo: 'Desenvolvedor Python e JavaScript na Alura',
      image: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      team: teams[0].name
    },
    {
      id: uuidv4(),
      favorited: false,
      name: 'PAULO SILVEIRA',
      cargo: 'Hipster e CEO da Alura',
      image: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      team: teams[0].name
    },
    {
      id: uuidv4(),
      favorited: false,
      name: 'JULIANA AMOASEI',
      cargo: 'Desenvolvedora de software e instrutora',
      image: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      team: teams[1].name
    },
    {
      id: uuidv4(),
      favorited: false,
      name: 'DANIEL ARTINE',
      cargo: 'Engenheiro de Software na Stone Age',
      image: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      team: teams[1].name
    },
    {
      id: uuidv4(),
      favorited: false,
      name: 'GUILHERME LIMA',
      cargo: 'Desenvolvedor Python e JavaScript na Alura',
      image: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      team: teams[1].name
    },
    {
      id: uuidv4(),
      favorited: false,
      name: 'PAULO SILVEIRA',
      cargo: 'Hipster e CEO da Alura',
      image: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      team: teams[1].name
    },
    {
      id: uuidv4(),
      favorited: false,
      name: 'JULIANA AMOASEI',
      cargo: 'Desenvolvedora de software e instrutora',
      image: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      team: teams[2].name
    },
    {
      id: uuidv4(),
      favorited: false,
      name: 'DANIEL ARTINE',
      cargo: 'Engenheiro de Software na Stone Age',
      image: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      team: teams[2].name
    },
    {
      id: uuidv4(),
      favorited: false,
      name: 'GUILHERME LIMA',
      cargo: 'Desenvolvedor Python e JavaScript na Alura',
      image: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      team: teams[2].name
    },
    {
      id: uuidv4(),
      favorited: false,
      name: 'PAULO SILVEIRA',
      cargo: 'Hipster e CEO da Alura',
      image: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      team: teams[2].name
    },
    {
      id: uuidv4(),
      favorited: false,
      name: 'JULIANA AMOASEI',
      cargo: 'Desenvolvedora de software e instrutora',
      image: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      team: teams[3].name
    },
    {
      id: uuidv4(),
      favorited: false,
      name: 'DANIEL ARTINE',
      cargo: 'Engenheiro de Software na Stone Age',
      image: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      team: teams[3].name
    },
    {
      id: uuidv4(),
      favorited: false,
      name: 'GUILHERME LIMA',
      cargo: 'Desenvolvedor Python e JavaScript na Alura',
      image: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      team: teams[3].name
    },
    {
      id: uuidv4(),
      favorited: false,
      name: 'PAULO SILVEIRA',
      cargo: 'Hipster e CEO da Alura',
      image: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      team: teams[3].name
    },
    {
      id: uuidv4(),
      favorited: false,
      name: 'JULIANA AMOASEI',
      cargo: 'Desenvolvedora de software e instrutora',
      image: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      team: teams[4].name
    },
    {
      id: uuidv4(),
      favorited: false,
      name: 'DANIEL ARTINE',
      cargo: 'Engenheiro de Software na Stone Age',
      image: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      team: teams[4].name
    },
    {
      id: uuidv4(),
      favorited: false,
      name: 'GUILHERME LIMA',
      cargo: 'Desenvolvedor Python e JavaScript na Alura',
      image: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      team: teams[4].name
    },
    {
      id: uuidv4(),
      favorited: false,
      name: 'PAULO SILVEIRA',
      cargo: 'Hipster e CEO da Alura',
      image: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      team: teams[4].name
    },
    {
      id: uuidv4(),
      favorited: false,
      name: 'JULIANA AMOASEI',
      cargo: 'Desenvolvedora de software e instrutora',
      image: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      team: teams[5].name
    },
    {
      id: uuidv4(),
      favorited: false,
      name: 'DANIEL ARTINE',
      cargo: 'Engenheiro de Software na Stone Age',
      image: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      team: teams[5].name
    },
    {
      id: uuidv4(),
      favorited: false,
      name: 'GUILHERME LIMA',
      cargo: 'Desenvolvedor Python e JavaScript na Alura',
      image: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      team: teams[5].name
    },
    {
      id: uuidv4(),
      favorited: false,
      name: 'PAULO SILVEIRA',
      cargo: 'Hipster e CEO da Alura',
      image: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      team: teams[5].name
    },
  ]

  const [colaborators, setColaborators] = useState(initial)

  function deleteColaborator(id) {
    setColaborators(colaborators.filter(colaborator => colaborator.id !== id))
  }

  function changeTeamColor(color, id) {
    setTeams(teams.map(team => {
        if(team.id === id) {
          team.color = color;
        }
        return team;
      }))
  }

  function addTeam(newTeam) {
    setTeams([...teams, { ...newTeam, id: uuidv4()} ])
  }

  function onFavorite(id) {
      setColaborators(colaborators.map(colaborator => {
        if(colaborator.id === id) colaborator.favorited = !colaborator.favorited;
        return colaborator
      }))
  }

  return (
    <div className="App">
      <Banner enderecoImagem='/images/banner.png' textoAlternativo='Principal banner of page organo' />
      <Form 
        addTeam={addTeam}
        teams={teams.map(team => team.name)} 
        onCreate={colaborator => setColaborators([...colaborators, colaborator])}
      />
      <section className='teams'>
        <h1>My organization</h1>
        {teams.map((team, index) => 
          <Team
            onFavorite={onFavorite}
            changeColor={changeTeamColor}
            key={index} 
            team={team} 
            colaborators={colaborators.filter(colaborator => colaborator.team === team.name)}
            onDelete={deleteColaborator}
          />
        )}
      </section>
      <Footer />
    </div>
  )
}

export default App;
