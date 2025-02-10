import Formulario from "../../components/Formulario";
import { Toasts } from "../../components/Toasts";

const FormularioPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
      <Formulario />
      <Toasts />
    </div>
  );
};

export default FormularioPage;
