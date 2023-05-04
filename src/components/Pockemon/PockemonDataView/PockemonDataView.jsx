export function PockemonDataView({ pockemon: { sprites, name, stats } }) {
  return (
    <div>
      <img
        src={sprites.other["official-artwork"].front_shiny}
        width={300}
        alt={name}
      />
      <p>{name}</p>
      <ul>
        {stats.map((entry) => (
          <li key={entry.stat.name}>
            {entry.stat.name}: {entry.base_stat}
          </li>
        ))}
      </ul>
    </div>
  );
}
