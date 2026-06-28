import { FaStar } from "react-icons/fa";

function ReviewItem({ name, date, review }) {
  return (
    <div className="pb-3 border-b border-gray-200">
      <div className="flex flex-wrap items-center gap-2 mb-2">
        <h3 className="font-bold text-gray-800">
          {name}
        </h3>

        <span className="text-gray-400 text-sm font-normal">
          {date}
        </span>

        <div className="flex ml-2 text-yellow-400 text-sm pl-10">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </div>
      </div>

      <p className="text-gray-500 text-sm leading-6">
        {review}
      </p>
    </div>
  );
}

export default ReviewItem;