import {Entity} from '../types/entity'
import '../styles/battle-menu.css'

type BattleMenuProps = {
    player: Entity;
    allies: Entity[];
    enemies: Entity[];
}


const BattleMenu:React.FC<BattleMenuProps> = ({player, enemies, allies}) => {

    return (
        <div className='container battle-menu'>
            
            <div className='column ally-column'>
                {allies.map((ally, index) => (
                    <div key={index} className={`entity-card ${ally.name === player.name ? 'player-card' : 'ally-card'} `}>
                        <p>{ally.name}</p>
                        <p>Health: {ally.currentHealth}/{ally.maxHealth}</p>
                        <p>Attack: {ally.currentAttack}</p>
                        <p>Defense {ally.currentDefense}</p>
                    </div>
                ))}
            </div>
            <div className='column enemy-column'>
                {enemies.map((enemy, index) => (
                    <div key={index} className='entity-card enemy-card'>   
                        <p>{enemy.name}</p>
                        <p>Health: {enemy.currentHealth}/{enemy.maxHealth}</p>
                        <p>Attack: {enemy.currentAttack}</p>
                        <p>Defense {enemy.currentDefense}</p>
                    </div>
                ))}
            </div>
        </div>

    )
}

export default BattleMenu;