import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";
import RecordHistory from "./recordHistory";
import { useContext } from "react";
import { RecordContext } from "../../context/userRecord-context";
import { CategoryContext } from "../../context/category-context";

const title = [
  { title: "Today" },
  // { title: "Yesterday" }
];

const RecordHistories = ({ transactionData }) => {
  const { handleSort } = useContext(RecordContext);

  // const sortingFunc = (a, b) => {
  //   return a.amount - b.amount;
  // };

  // const sortedData = transactionData.sort((a, b) => a.amount - b.amount);
  // console.log("records ----- transactionData", transactionData);

  return (
    <div className="text-[#1F2937] w-full">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4 text-base">
          {/* <button className="btn btn-square bg-[#E5E7EB] border-0">
            <GrPrevious className="text-[#1F2937]" />
          </button> */}
          <p>All records</p>
          {/* <button className="btn btn-square bg-[#E5E7EB] border-0">
            <GrNext className="text-[#1F2937]" />
          </button> */}
        </div>
        <select
          className="select select-bordered w-full max-w-xs bg-[#F9FAFB]"
          onChange={handleSort}>
          <option value={0}>Newest first</option>
          <option value={1}>Lowest first</option>
          <option value={2}>Highest first</option>
        </select>
      </div>
      {title.map((title) => (
        <RecordHistory title={title.title} />
      ))}
    </div>
  );
};

export default RecordHistories;
