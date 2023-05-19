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
        <div className="bg-[#fff] w-[500px] max-h-[600px] shadow-[17px_13px_24px_-3px_#00000070] rounded-md">
          <div className="p-[10px] flex justify-center">
            <h2 className="text-gray-800 text-[24px] font-semibold">
              Are you sure?
            </h2>
          </div>
          <div className="p-[10px] self-center flex flex-row justify-around gap-2">
            <button onClick={confirmHandler}>Confirm</button>
            <button onClick={cancelHandler}>Cancel</button>
          </div>
        </div>
      </article>
    </>
  );
}
