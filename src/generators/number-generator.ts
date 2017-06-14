export class NumberGenerator {
    rollDie(sides: number): number {
        return this.generateNumberBetween(1, sides);
    }

    rollDice(sides: number, times: number): number[] {
        const retVal: number[] = new Array();
        for (let n = 1; n <= times; n++) {
            retVal.push(this.rollDie(sides));
        }
        return retVal;
    }

    private generateNumberBetween(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
};
