import { useEffect, useState } from 'react';
import type { Entity } from '../types/entity'
import '../styles/player-table.css'

type PlayerTableProps = {
    player:Entity;
    allies: Entity[];
    enemies: Entity[];
    onAttack: (target: Entity, damage:number) => void;
}

const PlayerTable:React.FC<PlayerTableProps> = ({player, allies, enemies, onAttack}) => {
    const [showAttackTargets, setShowAttackTargets] = useState<Boolean>(false);
    const [enemyList, setEnemyList] = useState<Entity[]>([])
    const [entityStats, setEntityStats] = useState<Entity>();

    useEffect(() => {
        setEnemyList(enemies)
    }, [enemyList])

    return (
        <>
            <div className='player-table'>
                <div className='character-column'>
                    <h1>{player.name}</h1>
                    <h2>Health: {player.currentHealth}/{player.maxHealth}</h2>
                    <h2>Attack: {player.maxAttack}</h2>
                    <h2>Defense: {player.maxDefense}</h2>
                </div>
                <div className='character-column'>
                    <h1>test</h1>
                    <h1>test</h1>
                    <h1>test</h1>
                </div>
                    <div className='character-column'>
                    <h1>test</h1>
                    <h1>test</h1>
                    <h1>test</h1>
                </div>
                    <div className='character-column'>
                    <h1>test</h1>
                    <h1>test</h1>
                    <h1>test</h1>
                </div>
            </div>
            <div className='actions'>
                <div className='attack-selection'>
                    <button onClick={() => setShowAttackTargets(!showAttackTargets)}>Attack</button>
                    {showAttackTargets && (
                    <div>
                        {enemyList.map((enemy, index) => (
                        <button key={index} onClick={() => onAttack(enemy, player.currentAttack)}>{enemy.name}</button>
                        ))}
                    </div>
                    )}
                </div>
                </div>
        </>
    )
}

export default PlayerTable;