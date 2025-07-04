import type { FC } from "react";
import { SkillsPanel } from "@/pages/Resume/Panels/SkillsPanel";
import { EducationPanel } from "@/pages/Resume/Panels/EducationPanel";
import { ExperiencePanel } from "@/pages/Resume/Panels/ExperiencePanel";
import { CertsPanel } from "@/pages/Resume/Panels/CertsPanel";


interface Props{
  key         : string,
  label       : string,
  component   : FC,
  icon        : string,  
}

export const ProfileTabsData : Props[] =  [
  {
    key       : "Skills",
    label     : "Habilidades",
    icon      : "mdi:tools",
    component :  SkillsPanel, 
  },
  {
    key       : "Education",
    label     : "Educación",
    icon      : "mdi:school",
    component : EducationPanel
  },  
  {
    key       : "Experience",
    label     : "Experiencia",
    icon      : "mdi:rocket",
    component : ExperiencePanel
  },
  {
    key       : "Certifications",
    label     : "Certificaciones",
    icon      : "mdi:certificate",
    component : CertsPanel
  },  
];
