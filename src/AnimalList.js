export function AnimalList({animals}){
    return (
        <ul className="ml-10 mt-10 ">
          {animals.map((animal,i)=><li key={i} className="py-3 px-7 border max-w-[10rem]">{animal}</li>)}
        </ul>
      );
}