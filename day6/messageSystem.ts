const input = await Deno.readTextFile("day6/input.txt");

const getCharactersProcessed = (input: string[], messageLength: number) => {
  const signalSet = new Set();
  let i = 0;
  while (signalSet.size <= messageLength) {
    if (signalSet.size === messageLength) {
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

getCharactersProcessed(input.split(""), 14);

export default getCharactersProcessed;
