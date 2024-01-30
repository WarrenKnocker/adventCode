export function findTop3(input: string): number { 

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

        // console.log("Group Total: " + groupTotal)
    }


    let greatestNumber = 0
    let secondGreatestNumber = 0
    let thirdGreatestNumber = 0

    for (let item of totals) { 
        if (item > greatestNumber && item > secondGreatestNumber && item > thirdGreatestNumber) { 
            //qualifies for first place

            if (item > greatestNumber && greatestNumber > secondGreatestNumber && secondGreatestNumber > thirdGreatestNumber) { 
                thirdGreatestNumber = secondGreatestNumber
                secondGreatestNumber = greatestNumber
                greatestNumber = item
            }
            if (item > greatestNumber && greatestNumber > secondGreatestNumber && secondGreatestNumber == thirdGreatestNumber) { 
                thirdGreatestNumber = secondGreatestNumber
                secondGreatestNumber = greatestNumber
                greatestNumber = item
            }
            if (item > greatestNumber && greatestNumber == secondGreatestNumber) { 
                secondGreatestNumber = greatestNumber
                greatestNumber = item
            }
        }

        //qualifies for second place
        if (item < greatestNumber && item > secondGreatestNumber && item > thirdGreatestNumber) { 
            if (secondGreatestNumber > thirdGreatestNumber) { 
                thirdGreatestNumber = secondGreatestNumber
                secondGreatestNumber = item
            }
        }
        //qualifies for third
        if (item < greatestNumber && item < secondGreatestNumber && item > thirdGreatestNumber) { 
            thirdGreatestNumber = item
        }
        
       
    }

    // console.log("greatest number: " + greatestNumber)
    // console.log("secondGreatest number: " + secondGreatestNumber)
    // console.log("thirdGreates number: " + thirdGreatestNumber)
    
    return greatestNumber + secondGreatestNumber + thirdGreatestNumber

}