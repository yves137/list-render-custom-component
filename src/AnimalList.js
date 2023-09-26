export function AnimalList({animals}){
    return (
        <ul className="ml-10 mt-10 ">
          {animals.map((animal,i)=><li key={i}>{animal}</li>)}
        </ul>
      );
}