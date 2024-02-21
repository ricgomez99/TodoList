import { useAppDispatch } from "@/lib/hooks";
import { deleteItem, getItems } from "@/lib/helper";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import { deleteAction } from "@/redux/reducer";
import BackDrop from "../BackDrop";
import { motion } from "framer-motion";
import { dropIn } from "@/utils/motion";

interface DelteId {
  deleteId: string;
}

export default function Confirmation({ deleteId }: DelteId) {
  const dispatch = useAppDispatch();
  const queryClient = useQueryClient();

  //mutation
  const deleteMutation = useMutation((id: string) => deleteItem(id), {
    onSuccess: async () => {
      queryClient.prefetchQuery(["hydrate-items"], getItems);
    },
  });

  //handler functions
  const confirmHandler = async () => {
    await deleteMutation.mutate(deleteId);
    await dispatch(deleteAction(null));
  };
  const cancelHandler = async () => {
    await dispatch(deleteAction(null));
  };

  return (
    <>
      <BackDrop>
        <motion.div
          className="bg-[#fff] [width:_clamp(50%, 500px, 90%)] [height:_min(50%, 300px)] shadow-[17px_13px_24px_-3px_#00000070] text-center rounded-md flex flex-col padding-x-[2rem]"
          variants={dropIn as any}
          initial="hidden"
          animate="visible"
          exit="exit">
          <div className="p-[15px] justify-center align-middle">
            <h2 className="text-gray-800 text-[24px] font-bold">
              Are you sure?
            </h2>
            <p className="text-[16px] text-[#41444B] font-normal text-center">
              The task will be deleted permanently, and all its data will not be
              recovered.
            </p>
          </div>
          <div className="p-[10px] self-center flex lg:flex-row sm:flex-col md:flex-row justify-around gap-2">
            <button
              className="py-2 px-8  bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold rounded flex items-center"
              onClick={cancelHandler}>
              Cancel
            </button>
            <button
              className="py-2 px-8 bg-[#2e4765] hover:bg-[#425a78] text-white font-bold rounded flex items-center"
              onClick={confirmHandler}>
              Confirm
            </button>
          </div>
        </motion.div>
      </BackDrop>
    </>
  );
}
