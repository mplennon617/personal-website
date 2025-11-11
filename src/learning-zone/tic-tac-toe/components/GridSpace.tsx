interface GridSpaceType {
  onClick:() => void;
  player: string
}

const GridSpace = (props:GridSpaceType) => {
  return (
    <div onClick={props.onClick} className="hover:bg-gray-800 transition cursor-pointer">
      <p className="border-1 p-8"> {props.player} </p>
    </div>
  );
};

export default GridSpace;