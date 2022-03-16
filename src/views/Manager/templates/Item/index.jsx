const Item = ({ item, edit }) => {
  return (
    <div>
      <div>
        <h3>{item?.title}</h3>
        <h3>{item?.price}</h3>
      </div>
      <p>{item?.desc}</p>
    </div>
  );
};

export default Item;
