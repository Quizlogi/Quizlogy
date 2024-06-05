import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { BarLoader } from "react-spinners";
import { UserPlusIcon } from "@heroicons/react/24/solid";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";

import { useStore } from "../../states/category";
import TableCategory from "../../components/admin/TableCategory";
import ModalComponent from "../../components/modal";
import CategoryForm from "../../components/admin/form/CategoryForm";
import useInput from "../../hooks/useInput";

export default function CategoryPage() {
  const {
    categories,
    fetchCategories,
    createCategory,
    updateCategory,
    removeCategory,
    loading,
  } = useStore((state) => ({
    categories: state.categories,
    loading: state.loading,
    fetchCategories: state.fetchCategories,
    createCategory: state.createCategory,
    updateCategory: state.updateCategory,
    removeCategory: state.removeCategory,
  }));

  const [selectedCategory, setSelectedCategory] = useState(null);

  const [open, setOpen] = useState(false);
  const [name, setName] = useInput("");

  const handleOpen = () => {
    if (open) {
      setSelectedCategory(null);
    }
    setName({ target: { value: "" } });
    setOpen(!open);
  };

  const onDelete = (row) => {
    removeCategory(row.id);
  };

  const onEdit = (row) => {
    setSelectedCategory(row);
    setName({ target: { value: row.name } });
    setOpen(true);
  };

  const handleSubmit = async () => {
    setOpen(false);

    if (selectedCategory) {
      await updateCategory(selectedCategory.id, { name });
    } else {
      await createCategory({ name });

      setName({ target: { value: "" } });
    }
  };

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  return (
    <div className="flex-grow p-4">
      <Toaster />
      <Card className="h-full w-full">
        <CardHeader floated={false} shadow={false} className="rounded-none">
          <div className="mb-8 flex items-center justify-between gap-8">
            <div>
              <Typography variant="h5" color="blue-gray">
                List Category
              </Typography>
            </div>
            <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
              <Button
                className="flex items-center gap-3"
                size="sm"
                onClick={handleOpen}
              >
                <UserPlusIcon strokeWidth={2} className="h-4 w-4" /> Add
                Category
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardBody className="h-full">
          {loading ? (
            <div className="flex justify-center">
              <BarLoader color="#0f172a" css="margin: 0 auto" />
            </div>
          ) : (
            <TableCategory
              data={categories}
              onEdit={onEdit}
              onDelete={onDelete}
            />
          )}
        </CardBody>
      </Card>

      <ModalComponent
        open={open}
        handleOpen={handleOpen}
        handleSubmit={handleSubmit}
        title={selectedCategory ? "Edit Category" : "Add Category"}
      >
        <div className="flex flex-col gap-4">
          <CategoryForm name={name} setName={setName} />
        </div>
      </ModalComponent>
    </div>
  );
}
