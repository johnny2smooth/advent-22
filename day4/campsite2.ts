const input = await Deno.readTextFile("day4/input.txt");

const campsiteDuties = input
  .split(/\n/)
  .map((input) => input.split(",").map((input) => input.split("-")))
  .map((areas) => areas.map((areas) => [+areas[0], +areas[1]]))
  .map((arrays) => [...arrays[0], ...arrays[1]]);

const doesOverlap = campsiteDuties.filter(([start1, end1, start2, end2]) => {
  return (
    (start1 <= start2 && end1 >= start2) || (start2 <= start1 && end2 >= start1)
  );
}).length;

console.log(doesOverlap);

export default doesOverlap;
