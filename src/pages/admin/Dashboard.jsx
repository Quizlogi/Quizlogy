import { useEffect } from "react";
import { BarLoader } from "react-spinners";

import CardCount from "../../components/cardCount";
import { useStore as useStoreCategory } from "../../states/category";
import { useStore as useStoreRole } from "../../states/role";
import { useStore as useStoreUser } from "../../states/user";

export default function DashboardPenguji() {
  const {
    categories,
    fetchCategories,
    loading: loadingCategories,
  } = useStoreCategory((state) => ({
    categories: state.categories,
    fetchCategories: state.fetchCategories,
    loading: state.loading,
  }));

  const {
    roles,
    fetchRoles,
    loading: loadingRoles,
  } = useStoreRole((state) => ({
    roles: state.roles,
    fetchRoles: state.fetchRoles,
    loading: state.loading,
  }));

  const {
    users,
    fetchUsers,
    loading: loadingUsers,
  } = useStoreUser((state) => ({
    users: state.users,
    fetchUsers: state.fetchUsers,
    loading: state.loading,
  }));

  const isLoading = loadingCategories || loadingRoles || loadingUsers;

  useEffect(() => {
    fetchCategories();
    fetchRoles();
    fetchUsers();
  }, [fetchCategories, fetchRoles, fetchUsers]);

  const data = [
    { title: "Total Category", number: categories.length },
    { title: "Total Role", number: roles.length },
    { title: "Total User", number: users.length },
  ];

  return (
    <div className="flex-grow p-4">
      {isLoading ? (
        <div className="flex justify-center items-center h-full">
          <BarLoader color="#2563EB" />
        </div>
      ) : (
        <CardCount title="Dashboard Admin" data={data} />
      )}
    </div>
  );
}
