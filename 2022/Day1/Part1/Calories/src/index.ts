

export function findMostCalories(input: string): number { 

    const groupedArray: string[] = input.split("\n\n")
    const totals: number[] = []    
    for (let item of groupedArray) { 

        const groupedNumbers: string[] = item.split("\n")
        
        let groupTotal = 0
        
        for (let index = 0; index < groupedNumbers.length; index++) { 
            let digit = Number(groupedNumbers[index])
            groupTotal = groupTotal + digit
        }
        totals.push(groupTotal)
    }

    let greatestNumber = 0
    for (let item of totals) { 
        if (item > greatestNumber) { 
            greatestNumber = item
        }
    }
    return greatestNumber

}