import { getItem, returnItem } from "@/api";
import { Item as ItemSchema } from "@/api/runtimeSchemas";
import { ItemContext } from "@/context/itemContext";
import { Button } from "@mui/joy";
import { Item } from "@prisma/client";
import { useContext } from "react";

const Return = () => {
  const { setItemState, item } = useContext(ItemContext);
  const { id } = ItemSchema.parse(item);

  const handleReturn = async () => {
    await returnItem(id);
    const item = await getItem(id);
    if (item) setItemState(item);
  };

  return (
    <Button onClick={handleReturn} color="success">
      return
    </Button>
  );
};

export default Return;
