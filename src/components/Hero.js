import { Sprite } from '@pixi/sprite'
import { Texture } from 'pixi.js';

class Hero extends Sprite {
    /**
     * 
     * @param {Number} x 
     * @param {Number} y 
     */
    constructor(x, y) {
        super(Texture.from('plane'))
        this.startingPos = {
            x,
            y
        }
        this.x = this.startingPos.x
        this.y = this.startingPos.y
        this.anchor.set(.5)
        this.interactive = true
        this.on('mousedown', this.onDragStart)
        .on('mouseup', this.onDragEnd)
        .on('mouseupoutside', this.onDragEnd)
        .on('mousemove', this.onDragMove)
    }

    onDragStart(event) {
        this.data = event.data;
        this.dragging = true;
    }

    onDragEnd() {
        this.dragging = false;
        this.data = null;
    }
    
    /**
     * updating the possition of hero
     */
    onDragMove() {
        if (this.dragging) {
            var newPosition = this.data.getLocalPosition(this.parent);
            this.position.x = newPosition.x >= 1280 ? 1280 : newPosition.x;
            this.position.y = newPosition.y >= 470 ? 470 : newPosition.y;
        }
    }

    /**
     * hide the hero sprite setting on starting possition and show again
     */
    refresh() {
        this.visible = false
        this.x = this.startingPos.x
        this.y = this.startingPos.y
        this.onDragEnd()
        
        setTimeout(() => {
            this.visible = true
        }, 600);
    }

    /**
     * increments fuel of hero
     */
    addFuel() {
        console.log('Fuel Added');
    }
}

export default Hero