import { useQuery } from "@tanstack/react-query";
import { getAllEmployees } from "../api/employeeApis";
import { useState } from "react";

export const useEmployee = () => {
  const [page, setPage] = useState(1);
  const [filters, setFilters] = useState({
    search: "",
    role: "",
    department: "",
    status: ""
  });
  const { data, isPending, isFetching } = useQuery({
    queryKey: ["employees", page],
    queryFn: () =>
      getAllEmployees({
        page,
        limit: 20,
        role: filters.role,
        status: filters.status,
        department: filters.department,
        search: filters.search
      }),
    staleTime: 100000,
    keepPreviosData: true,
  });

  const handlePageChange = (newPage) => {
    if (newPage < 1) return;

    if (newPage > data?.pagination?.totalPages) return;

    setPage(newPage);
  };

  const handleSearchFilters = (name, value) => {
    setFilters({...filters, [name]:value})
  }


  return {
    isPending,
    data,
    handlePageChange,
    isFetching,
    handleSearchFilters,
    filters
  };
};
