"use client";
import { getAllItems } from "@/api";
import StateChip from "@/components/StateChip";
import { ItemContext } from "@/context/itemContext";
import { Box, Chip, CircularProgress, Table } from "@mui/joy";
import { Item } from "@prisma/client";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import useAsyncEffect from "use-async-effect";

const ViewItems = () => {
  const { setItemState } = useContext(ItemContext);
  const [items, setItems] = useState<
    Item[] | { loading: true } | { uninitialized: true }
  >({ uninitialized: true });

  useAsyncEffect(async (isMounted) => {
    setItems({ loading: true });
    const res = await getAllItems();
    if (isMounted()) {
      setItems(res);
    }
  }, []);

  return (
    <Box>
      <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>department</th>
            <th>type</th>
            <th>state</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(items) ? (
            items.map((item) => {
              const { id, department, type, state } = item;
              return (
                <tr key={id}>
                  <td>
                    <Link
                      onClick={() => {
                        setItemState(item);
                      }}
                      href="/checkout/modify"
                    >
                      {id}
                    </Link>
                  </td>
                  <td>{department}</td>
                  <td>{type}</td>
                  <td>
                    <StateChip state={state} />
                  </td>
                </tr>
              );
            })
          ) : (
            <CircularProgress />
          )}
        </tbody>
      </Table>
    </Box>
  );
};

export default ViewItems;
