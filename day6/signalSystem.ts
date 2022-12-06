const input = await Deno.readTextFile("day6/input.txt");

const getCharactersProcessed = (input: string[]) => {
  const signalSet = new Set();
  let i = 0;
  while (signalSet.size <= 4) {
    if (signalSet.size === 4) {
      i - 1;
      break;
    }
    if (!signalSet.has(input[i])) {
      signalSet.add(input[i]);
      i++;
    } else {
      i = i - (signalSet.size - 1);
      signalSet.clear();
    }
  }
  return i;
};

getCharactersProcessed(input.split(""));

export default getCharactersProcessed;
