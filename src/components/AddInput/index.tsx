import { PlusCircleIcon } from "@heroicons/react/24/solid";

const AddInput = ({ handleSubmit }: any) => {
  return (
    <form
      className="flex gap-2 mx-auto max-w-[400px] w-full"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        className="w-full p-3 transition-all border border-gray-300 rounded-md outline-none focus:border-cyan-500"
        placeholder="Adding todo..."
      />
      <button
        type="submit"
        className="flex items-center gap-1 p-3 text-white transition-all border-black rounded-md outline-none cursor-pointer bg-gradient-to-r from-cyan-500 to-blue-500 hover:brightness-110"
      >
        <PlusCircleIcon className="w-6 h-6" />
        Add
      </button>
    </form>
  );
};

export default AddInput;
