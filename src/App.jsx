import logements from "./data/logements.json"

function App() {
  return (
    <div>
      <h1>Bienvenue sur KASA</h1>
      <p>Nombre de logements : {logements.length}</p>

      <ul>
        {logements.map((logement) => (
          <li key={logement.id}>
            {logement.title}
              <ul>
                <li>Localisation : {logement.location}</li>
                <li>Propriétaire : {logement.host.name}</li>
                <li>Nombre d'étoiles : {logement.rating}/5</li><br />
              </ul>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
