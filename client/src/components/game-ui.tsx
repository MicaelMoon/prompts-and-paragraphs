import {useState, useEffect} from 'react'
import "../styles/game-ui.css"
import {Entity} from "../types/entity"
import BattleMenu from './battle-menu'
import PlayerTable from './player-table'
import Chat from './chat'

type GameUIProps = {
    player:Entity
}

const GameUI:React.FC<GameUIProps> = ({player}) =>{
    const [party, setParty] = useState<Entity[]>([]);
    const [enemyList, setEnemyList] = useState<Entity[]>([]);
    const [playerStats, setPlayerStats] = useState<Entity>(player);
    const [playerPrompts, setPlayerPrompts] = useState<string[]>([]);
    const [aiResponses, setAiResponses] = useState<string[]>([])

    useEffect(() => {
        setPlayerStats(player);
    },[player])

    useEffect(() => {
        setPlayerPrompts(["I want to look for traps"]);
    }, [])

    useEffect(() => {
        setAiResponses(['You almost stepped on a trap. "Be careful there!" -said John.']);
    }, [])

    useEffect(() => {
        setParty([
            playerStats,
            new Entity('Henry', 20, 5, 5),
            new Entity('Elara', 16, 4, 3)
        ])
    }, [])

    useEffect(() => {
        setEnemyList([
            new Entity('Troll', 25, 7, 5),
            new Entity('Goblin', 14, 4, 1),
            new Entity('Hound', 7, 3, 0),
        ])
    }, [])

    return (
        <>
            <div className="container">
                <div className="column game-column">
                    <PlayerTable player={playerStats} allies={party} enemies={enemyList} onAttack={attack}/>
                    <hr/>
                    <BattleMenu player={playerStats} allies={party} enemies={enemyList}/>
                </div>

                <div className="column chat-column">
                    <Chat playerPrompts={playerPrompts} aiResponses={aiResponses}/>
                    <button onClick={() => debug(playerStats)}>Debug</button>
                </div>
            </div>
        </>
    )
    
    function debug(entity:Entity){
        const updatedEntity = Object.assign(
            Object.create(Object.getPrototypeOf(entity)),
            entity
        );
        updatedEntity.takeDamage(4);
        setPlayerStats(updatedEntity);
    }

    function attack(target:Entity, damage:number,){
        const updatedEnemyList = [...enemyList]
        updatedEnemyList.map((enemy:Entity, index:number) => {
            if(enemy.name === target.name){
                enemy.takeDamage(damage)
            }
        })

        setEnemyList(updatedEnemyList)
    }
}

export default GameUI;