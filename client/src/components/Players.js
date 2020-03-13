import React from 'react';

function Players(props) {
    return (
      <>
        {props.player.map(player => (
          <div key={player.name} className="players">
            {/* <img src={pokemon.img} alt={pokemon.name} />
            <div>
              <h3>{pokemon.name}</h3>
              {pokemon.next_evolution &&
                pokemon.next_evolution.map(e => <p key={e.num}>{e.name}</p>)} */}
            {/* </div> */}
          </div>
        ))}
      </>
    );
  }

  export default Players;