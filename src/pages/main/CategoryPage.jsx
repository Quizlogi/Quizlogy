import { Typography } from "@material-tailwind/react";
import { useStore } from "../../states/category";
import { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { BarLoader } from "react-spinners";
import CategoryCard from "../../components/main/CategoryCard";

export default function CategoryPage() {
  const { categories, loading, fetchCategoriesMain } = useStore((state) => ({
    categories: state.categories,
    loading: state.loading,
    fetchCategoriesMain: state.fetchCategoriesMain,
  }));

  useEffect(() => {
    fetchCategoriesMain();
  }, [fetchCategoriesMain]);

  return (
    <div className="mx-auto my-12 max-w-screen-xl px-4 md:px-6 lg:px-8 overflow-hidden">
      <Toaster />
      <div>
        {loading ? (
          <div className="flex justify-center mb-5">
            <BarLoader color="#0f172a" css="margin: 0 auto" />
          </div>
        ) : (
          <>
            <Typography
              color="black"
              variant="h4"
              className="mb-12 text-center"
            >
              List Kategori
            </Typography>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 h-full pb-7 items-center justify-center">
              <CategoryCard data={categories} />
            </div>
          </>
        )}
      </div>
    </div>
  );
}
