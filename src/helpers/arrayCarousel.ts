
import  Foto_doutor1 from "../assets/images/Foto_doutor1.png";
import  Foto_doutor2 from "../assets/images/Foto_doutor2.png";
import  Foto_doutor3 from "../assets/images/Foto_doutor3.png";
import  Foto_doutor4 from "../assets/images/Foto_doutor4.png";

type JsonProps = {
  icon: string;
  title: string;
  description: string;
  id: number;
};

export const arrayTreatments: JsonProps[] = [
  {
    id: 1,
    icon: Foto_doutor1 ,
    title: "Dr. Pedro Ribeiro",
    description: "Ortodontista",
  },
  {
    id: 2,
    icon: Foto_doutor2 ,
    title: "Dra. Katarina Alves",
    description: "Clínica geral",
  },
  {
    id: 3,
    icon: Foto_doutor3 ,
    title: "Dr. Gustavo Ramos",
    description: "Odontopediatra",
  }, {
    id: 4,
    icon: Foto_doutor4 ,
    title: "Dra. Melissa",
    description: "Implantodentista",
  },

];
