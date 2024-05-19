import { Typography, Chip } from "@material-tailwind/react";

export default function ProductUse() {
  return (
    <article className="flex flex-row mx-auto my-12 w-[1006px] h-[300px] items-center gap-2">
      <img src="product-section.svg" alt="Hero Image" />
      <div className="flex flex-col">
        <Typography variant="h2">Quizlogy cocok untuk...</Typography>
        <div className="flex flex-row gap-2 flex-wrap max-w-[507px] mt-2">
          <Chip variant="ghost" value="Pekerjaan Rumah" />
          <Chip variant="ghost" value="Tugas" />
          <Chip variant="ghost" value="Pengetahuan Umum" />
          <Chip variant="ghost" value="Persiapan Ujian" />
          <Chip variant="ghost" value="Quiz General" />
          <Chip variant="ghost" value="Tes Kepribadian" />
        </div>
      </div>
    </article>
  );
}