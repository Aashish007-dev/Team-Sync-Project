import { axiosInstance } from "../../../../config/axiosInstance";

export const getAllEmployees = async ({
  page = 1,
  limit = 20,
  role = "",
  status = "active",
  department = "",
  search= ""
}) => {
  try {
    const res = await axiosInstance.get(
      `/employee?page=${page}&limit=${limit}&search=${search}&role=${role}&department=${department}&status=${status}`,
    );
    console.log(res.data.data);
    return res;
  } catch (error) {
    console.log("error in all employee api", error);
  }
};
