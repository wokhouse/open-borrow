"use client";
import { getAllItems } from "@/api";
import StateChip from "@/components/StateChip";
import { Box, Chip, Table } from "@mui/joy";
import { Item } from "@prisma/client";
import { useEffect, useState } from "react";
import useAsyncEffect from "use-async-effect";

const ViewItems = () => {
  const [items, setItems] = useState<Item[]>([]);

  useAsyncEffect(async (isMounted) => {
    const res = await getAllItems();
    setItems(res);
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
          {items.map(({ id, department, type, state }) => (
            <tr key={id}>
              <td>{id}</td>
              <td>{department}</td>
              <td>{type}</td>
              <td>
                <StateChip state={state} />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Box>
  );
};

export default ViewItems;
