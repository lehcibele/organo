import { useState } from 'react';
import Banner from './components/Banner';
import Formulario from './components/Formulario';
import Time from './components/Time';
import Rodape from './components/Rodape';
import { v4 as uuidv4 } from 'uuid';

function App() {

  // Times estaticos
  const [times, setTimes] = useState([
    {
      id: uuidv4(),
      nome: 'Programação',
      cor: '#57C278',
    },
    {
      id: uuidv4(),
      nome: 'Front-End',
      cor: '#82CFFA',
    },
    {
      id: uuidv4(),
      nome: 'Data Science',
      cor: '#A6D158',
    },
    {
      id: uuidv4(),
      nome: 'Devops',
      cor: '#E06B69',
    },
    {
      id: uuidv4(),
      nome: 'UX e Design',
      cor: '#D86EBF',
    },
    {
      id: uuidv4(),
      nome: 'Mobile',
      cor: '#FFBA05',
    },
    {
      id: uuidv4(),
      nome: 'Inovação e Gestão',
      cor: '#FF8A29',
    },
  ]);

  const inicial = [
    {
      id: uuidv4(),
      favorito: false,
      nome: 'LETICIA CIBELE',
      cargo: 'Desenvolvedora Front-end',
      imagem: 'https://github.com/lehcibele.png',
      time: times[0].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'LETICIA CIBELE',
      cargo: 'Desenvolvedora Front-end',
      imagem: 'https://github.com/lehcibele.png',
      time: times[0].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'LETICIA CIBELE',
      cargo: 'Desenvolvedora Front-end',
      imagem: 'https://github.com/lehcibele.png',
      time: times[1].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'LETICIA CIBELE',
      cargo: 'Desenvolvedora Front-end',
      imagem: 'https://github.com/lehcibele.png',
      time: times[1].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'LETICIA CIBELE',
      cargo: 'Desenvolvedora Front-end',
      imagem: 'https://github.com/lehcibele.png',
      time: times[2].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'LETICIA CIBELE',
      cargo: 'Desenvolvedora Front-end',
      imagem: 'https://github.com/lehcibele.png',
      time: times[2].nome
    },

  ]

  // o colchete dentro o useState crie uma lista
  const [colaboradores, setColaboradores] = useState(inicial);

  const aoNovoColaboradorAdicionado = (colaborador) => {
    // debugger -> mostra linha a linha no inspercionar o que está acontecendo
    setColaboradores([...colaboradores, colaborador]);
  }

  function deletarColaborador(id) {
    setColaboradores(colaboradores.filter(colaborador => colaborador.id !== id))
  }

  function mudarCorDoTime(cor, id) {
    setTimes(times.map(time => {
      if(time.id === id) {
        time.cor = cor;
      }
      return time;
    }));
  }

  function cadastrarTime(novoTime) {
    setTimes([...times, {...novoTime, id: uuidv4() } ])
  }

  function resolverFavorito(id) {
    setColaboradores(colaboradores.map(colaborador => {
      if(colaborador.id === id) colaborador.favorito = !colaborador.favorito
      return colaborador
    }))
  }

  return (
    <div className="App">
      <Banner />
      <Formulario 
        cadastrarTime={cadastrarTime}
        times={times.map(time => time.nome)} 
        aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}
      />

      {times.map((time, indice) => 
        <Time
          mudarCor={mudarCorDoTime} 
          key={indice} 
          nome={time.nome} 
          time={time}
          // filter -> filtra os colaboradores de acordo com o seu time
          colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)} 
          aoDeletar={deletarColaborador}
          aoFavoritar={resolverFavorito}
        />
      )}

      <Rodape />
      
    </div>
  );
}

export default App;
