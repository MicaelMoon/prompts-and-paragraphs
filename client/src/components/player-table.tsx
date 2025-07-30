import '../styles/game-ui.css'
import type { Entity } from '../types/entity'

type PlayerTableProps = {
    player:Entity
}

const PlayerTable:React.FC<PlayerTableProps> = ({player}) => {


    return (
        <div className='character-column'>
            <h1>{player.name}</h1>
            <h2>Health: {player.currentHealth}/{player.maxHealth}</h2>
            <h2>Attack: {player.maxAttack}</h2>
            <h2>Defense: {player.maxDefense}</h2>
        </div>
    )
}

export default PlayerTable;