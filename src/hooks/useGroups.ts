import { useEffect, useState } from "react";
import axios from "axios";

export interface Group {
  igId: number;
  name: string;
  description?: string;
}

export function useGroups() {
  const [groups, setGroups] = useState<Group[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/groups")
      .then((res) => setGroups(res.data))
      .catch((err) => console.error("Failed to fetch groups:", err))
      .finally(() => setLoading(false));
  }, []);

  return { groups, loading };
}
