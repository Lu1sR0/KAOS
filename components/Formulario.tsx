"use client"
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@headlessui/react";  // Usando Button do Headless UI
import { toast } from "react-toastify";
import { useState } from "react";

// Definindo o esquema de validação com Zod
const formularioSchema = z.object({
  nome: z.string().min(2, "O nome é obrigatório."),
  zap: z.string().min(10, "O número do WhatsApp é obrigatório."),
  mail: z.string().email("Por favor, insira um e-mail válido."),
  endereco: z.string().min(5, "O endereço é obrigatório."),
  area_atuacao: z.string().min(3, "A área de atuação é obrigatória."),
});

type FormData = z.infer<typeof formularioSchema>;

// Componente de Input customizado
const Input = ({ id, register, placeholder }: { id: string, register: any, placeholder: string }) => (
  <input
    id={id}
    {...register(id)}
    placeholder={placeholder}
    className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
  />
);

// Componente de Label customizado
const Label = ({ htmlFor, children }: { htmlFor: string, children: React.ReactNode }) => (
  <label htmlFor={htmlFor} className="block text-white text-sm mb-2">
    {children}
  </label>
);

const Formulario = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(formularioSchema),
  });

  const [loading, setLoading] = useState(false);

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    try {
      const response = await fetch('/api/submitForm', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        toast.success("Formulário enviado com sucesso!");
      } else {
        toast.error("Erro ao enviar o formulário.");
      }
    } catch {
      toast.error("Erro ao enviar o formulário.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-lg mx-auto p-6 bg-gray-800 rounded-lg shadow-lg">
      <h1 className="text-3xl text-center text-white mb-6">Formulário de Contato</h1>

      <div className="mb-4">
        <Label htmlFor="nome">Nome</Label>
        <Input id="nome" register={register} placeholder="Seu nome" />
        {errors.nome && <p className="text-red-500">{errors.nome.message}</p>}
      </div>

      <div className="mb-4">
        <Label htmlFor="zap">WhatsApp</Label>
        <Input id="zap" register={register} placeholder="Seu número no WhatsApp" />
        {errors.zap && <p className="text-red-500">{errors.zap.message}</p>}
      </div>

      <div className="mb-4">
        <Label htmlFor="mail">E-mail</Label>
        <Input id="mail" register={register} placeholder="Seu e-mail" />
        {errors.mail && <p className="text-red-500">{errors.mail.message}</p>}
      </div>

      <div className="mb-4">
        <Label htmlFor="endereco">Endereço</Label>
        <Input id="endereco" register={register} placeholder="Seu endereço" />
        {errors.endereco && <p className="text-red-500">{errors.endereco.message}</p>}
      </div>

      <div className="mb-4">
        <Label htmlFor="area_atuacao">Área de Atuação</Label>
        <Input id="area_atuacao" register={register} placeholder="Área de atuação" />
        {errors.area_atuacao && <p className="text-red-500">{errors.area_atuacao.message}</p>}
      </div>

      <Button type="submit" disabled={loading} className="w-full mt-4">
        {loading ? 'Enviando...' : 'Enviar'}
      </Button>
    </form>
  );
};

export default Formulario;
