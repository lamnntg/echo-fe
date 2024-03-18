import Card from "@/components/Card";
import data from "@/data.json";
import { ProjectDef } from "@/types/project.type";

const page = () => {
  return (
    <div className="container mx-auto px-2 py-[80px]">
      <h1 className="text-center text-[32px] mb-8">
        DỰ ÁN DỰ ÁN ĐÃ HOÀN THÀNH
      </h1>
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
        {(data as ProjectDef[])
          .filter((item) => item.status === "completed")
          .map((item) => (
            <Card key={item.name} project={item as ProjectDef} />
          ))}
      </div>
    </div>
  );
};

export default page;
