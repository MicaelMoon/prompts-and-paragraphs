import { Entity } from "./entity";

class Player extends Entity {

    override attack (target:Entity, flavorText?:string) {
        super.attack(target)

        if(flavorText){
            console.log(flavorText)
        }
    }
}