import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="border-b-2 border-gray-300 p-4 my-4 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div>
              <span className="font-bold">{item.card.info.name}</span>
              <div> ₹ {item.card.info.price / 100}</div>
            </div>
            <p className="text-sm text-gray-600">
              {item.card.info.description}
            </p>
          </div>
          <div className="w-3/12 p-4 relative">
            <button
              onClick={() => handleAddItem(item)}
              className=" rounded-lg shadow-lg bg-black text-white p-2 absolute bottom-4 left-14 bg-opacity-90"
            >
              Add +
            </button>

            <img
              src={CDN_URL + item.card.info.imageId}
              className="object-cover"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
