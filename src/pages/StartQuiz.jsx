import { Card, Button, ButtonGroup, Chip, Typography, IconButton } from "@material-tailwind/react";
import { GrCaretPrevious, GrCaretNext } from "react-icons/gr";

export default function StartQuiz() {
  return (
    <Card className="w-[576px] h-[560px] mx-auto my-4">
      <article className="flex flex-col justify-between h-full m-6">
        <div className="upper-section">
          <section className="flex flex-row justify-between">
            <Typography>
              Sistem Organ Manusia
            </Typography>
            <Chip size="sm" variant="outlined" value="Biologi" color="blue-gray" className="w-fit" />
          </section>
          <hr className="my-2 border-t border-slate-300"/>
          <Typography variant="h5" className="text-slate-700">
            Apa fungsi utama dari sistem pernapasan?
          </Typography>
          <section className="flex flex-row justify-between my-2 mb-8">
            <Typography>
              Pertanyaan 1/13
            </Typography>
          </section>
          <ButtonGroup size="md" variant="outlined" className="flex flex-col gap-4 p-1">
            <Button className="flex flex-row gap-4 items-center border rounded">
              <Chip size="sm" variant="outlined" value="A" color="blue-gray" className="w-fit" />
              Mencerna makanan 
            </Button>
            <Button className="flex flex-row gap-4 items-center border rounded">
              <Chip size="sm" variant="outlined" value="B" color="blue-gray" className="w-fit" />
              Mengedarkan darah
            </Button>
            <Button className="flex flex-row gap-4 items-center border rounded">
              <Chip size="sm" variant="outlined" value="C" color="blue-gray" className="w-fit" />
              Mengambil oksigen dan mengeluarkan karbon dioksida
            </Button>
            <Button className="flex flex-row gap-4 items-center border rounded">
              <Chip size="sm" variant="outlined" value="D" color="blue-gray" className="w-fit" />
              Menghasilkan energi
            </Button>
          </ButtonGroup>
        </div>
        <div className="lower-section">
          <section className="flex flex-row justify-between">
            <IconButton size="lg" variant="outlined">
              <GrCaretPrevious />
            </IconButton>
            <IconButton size="lg" variant="outlined">
              <GrCaretNext />
            </IconButton>
          </section>
        </div>
      </article>
    </Card>
  );
}