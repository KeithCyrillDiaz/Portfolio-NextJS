import { TechnicalSkillTypes } from "./constant";


export const isFirstHalf = (index: number, arrayLength: number): boolean => {
    return index < (Math.floor(arrayLength / 2));

}

export const getSecondHalfItems = (index: number, items: TechnicalSkillTypes[] ) => {
    const secondHalfIndex = index + Math.floor(items.length / 2);
    return items[secondHalfIndex];
}