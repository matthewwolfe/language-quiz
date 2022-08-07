interface Options {
  max: number;
  min: number;
  // Numbers to omit
  omit?: number[];
  size: number;
}

function randomFromRange({ max, min, omit = [], size }: Options): number[] {
  const array: number[] = [];

  for (let i = 0; i < size; i++) {
    let pushed = false;

    while (!pushed) {
      const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);

      if (!array.includes(randomNumber) && !omit.includes(randomNumber)) {
        array.push(randomNumber);
        pushed = true;
      }
    }
  }

  return array;
}

export default randomFromRange;
