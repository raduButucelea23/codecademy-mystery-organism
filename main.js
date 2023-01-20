// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

const pAequorFactory = (specimenNum, inputDnaBaseArray) => {
  const mutate = () => {
    let randomIndex = Math.floor(Math.random() * inputDnaBaseArray.length);
    // console.log('The base to be changed: ', inputDnaBaseArray[randomIndex]);

    const changeBase = (baseToChange) => {
      let newBase = returnRandBase();
      if (newBase !== baseToChange) {
        // console.log(`The base ${baseToChange} has been changed to ${newBase}`);
        return newBase;
      } else {
        return changeBase(baseToChange);
      }
    }
    inputDnaBaseArray[randomIndex] = changeBase(inputDnaBaseArray[randomIndex]);
    console.log(inputDnaBaseArray);
  };
  
  const compareDNA = (pAequor) => {
    let count = 0;
    for (let i = 0; i < inputDnaBaseArray.length; i++) {
      if (inputDnaBaseArray[i] === pAequor.dna[i]) {
        count++;
      }
    }
    let percentage = (count / inputDnaBaseArray.length) * 100;
    // console.log(`Specimen #${inputNumber} and specimen #${pAequor.specimenNum} have ${percentage}% DNA in common.`);
  };

  const willLikelySurvive = () => {
    let count = 0;
    for (let i = 0; i < inputDnaBaseArray.length; i++) {
      if (inputDnaBaseArray[i] === 'C' || inputDnaBaseArray[i] === 'G') {
        count++;
      }
    }
    let percentage = (count / inputDnaBaseArray.length) * 100;
    if (percentage >= 60) {
      return true;
    } else {
      return false;
    }
  };

  return {specimenNum: specimenNum , dna: inputDnaBaseArray, mutate: mutate, compareDNA: compareDNA, willLikelySurvive: willLikelySurvive}
  // return {specimenNum, dna: inputDnaBaseArray, mutate, compareDNA, willLikelySurvive}
}

const findingSurvivors = (minSurvivorDNA) => {
  let survivors = [];
  while (survivors.length < minSurvivorDNA) {
    let dna = pAequorFactory(survivors.length, mockUpStrand());
    if (dna.willLikelySurvive()) {
      survivors.push(dna);
    }
  }
  return survivors;
}

let survivors = findingSurvivors(30);
console.log(survivors[0].dna);






// let dna1 = pAequorFactory(1, mockUpStrand());
// let dna2 = pAequorFactory(2, mockUpStrand());
// let dna3 = pAequorFactory(3, mockUpStrand());
// let dna4 = pAequorFactory(4, mockUpStrand());
// let dna5 = pAequorFactory(5, mockUpStrand());
// let dna6 = pAequorFactory(6, mockUpStrand());
// let dna7 = pAequorFactory(7, mockUpStrand());
// let dna8 = pAequorFactory(8, mockUpStrand());
// let dna9 = pAequorFactory(9, mockUpStrand());
// let dna10 = pAequorFactory(10, mockUpStrand());
// let dna11 = pAequorFactory(11, mockUpStrand());
// let dna12 = pAequorFactory(12, mockUpStrand());
// let dna13 = pAequorFactory(13, mockUpStrand());
// let dna14 = pAequorFactory(14, mockUpStrand());
// let dna15 = pAequorFactory(15, mockUpStrand());
// let dna16 = pAequorFactory(16, mockUpStrand());
// let dna17 = pAequorFactory(17, mockUpStrand());
// let dna18 = pAequorFactory(18, mockUpStrand());
// let dna19 = pAequorFactory(19, mockUpStrand());
// let dna20 = pAequorFactory(20, mockUpStrand());
// let dna21 = pAequorFactory(21, mockUpStrand());
// let dna22 = pAequorFactory(22, mockUpStrand());
// let dna23 = pAequorFactory(23, mockUpStrand());
// let dna24 = pAequorFactory(24, mockUpStrand());
// let dna25 = pAequorFactory(25, mockUpStrand());
// let dna26 = pAequorFactory(26, mockUpStrand());
// let dna27 = pAequorFactory(27, mockUpStrand());
// let dna28 = pAequorFactory(28, mockUpStrand());
// let dna29 = pAequorFactory(29, mockUpStrand());
// let dna30 = pAequorFactory(30, mockUpStrand());

//concepts: base and DNA strand.
// DNA contains 15 random bases




