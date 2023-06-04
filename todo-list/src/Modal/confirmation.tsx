import { useAppDispatch } from "@/lib/hooks";
import { deleteItem, getItems } from "@/lib/helper";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import { deleteAction } from "@/redux/reducer";

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
      <article className="bg-[#00000070] fixed flex flex-col items-center justify-center inset-0 overflow-hidden z-1">
        <div className="bg-[#fff] w-[300px]  lg:w-[500px] md:w-[400px] shadow-[17px_13px_24px_-3px_#00000070] text-center rounded-md flex flex-col">
          <div className="p-[10px] justify-center">
            <h2 className="text-gray-800 text-[24px] font-semibold">
              Are you sure?
            </h2>
            <p className="text-[15px] text-[#9BA4B5] font-normal">
              The task will be deleted permanently, and all its data won't be
              recovered.
            </p>
          </div>
          <div className="p-[10px] self-center flex lg:flex-row sm:flex-col md:flex-row justify-around gap-2">
            <button
              className="py-2 px-8  bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold rounded flex items-center"
              onClick={cancelHandler}
            >
              Cancel
            </button>
            <button
              className="py-2 px-8 bg-[#2e4765] hover:bg-[#425a78] text-white font-bold rounded flex items-center"
              onClick={confirmHandler}
            >
              Confirm
            </button>
          </div>
        </div>
      </article>
    </>
  );
}
