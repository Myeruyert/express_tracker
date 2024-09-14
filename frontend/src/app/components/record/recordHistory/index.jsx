import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";
import RecordHistory from "./recordHistory";
import { useContext } from "react";
import { RecordContext } from "../../context/userRecord-context";

const title = [{ title: "Today" }, { title: "Yesterday" }];

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
          <button className="btn btn-square bg-[#E5E7EB] border-0">
            <GrPrevious className="text-[#1F2937]" />
          </button>
          <p>Last 30 days</p>
          <button className="btn btn-square bg-[#E5E7EB] border-0">
            <GrNext className="text-[#1F2937]" />
          </button>
        </div>
        <select
          className="select select-bordered w-full max-w-xs bg-[#F9FAFB]"
          onChange={handleSort}
        >
          <option disabled selected>
            Newest first
          </option>
          <option>Lowest first</option>
          <option>Highest first</option>
        </select>
      </div>
      {title.map((title) => (
        <RecordHistory title={title.title} transactionData={transactionData} />
      ))}
    </div>
  );
};

export default RecordHistories;
