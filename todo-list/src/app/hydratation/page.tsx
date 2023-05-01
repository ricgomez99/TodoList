import getQueryClient from "@/utils/getQueryClient";
import Hydrate from "@/utils/hydrate.client";
import { dehydrate } from "@tanstack/query-core";
import Items from "@/components/Items";
import { getItems } from "@/lib/helper";

export default async function Hydration() {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery(["hydrate-items"], getItems);
  const dehydratedState = dehydrate(queryClient);

  return (
    <Hydrate state={dehydratedState}>
      <Items />
    </Hydrate>
  );
}
