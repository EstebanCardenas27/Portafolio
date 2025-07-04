import { EducationData } from "@/constants/Resume/EducationData";
import { EducationTimeline } from "@/components/TimeLine/EducationTimeLine";

export const EducationPanel = () => {
  return (
    <div className="space-y-16">
      <EducationTimeline
        title="Ingeniería en Informática"
        data={EducationData.ingenieria}
      />
      <EducationTimeline
        title="Analista Programador"
        data={EducationData.tecnico}
      />
    </div>
  );
};