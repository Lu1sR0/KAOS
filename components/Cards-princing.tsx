const plans = [
  {
    name: "Free",
    price: "Gratuito",
    features: [
      "Acesso à comunidade",
      "Grupo exclusivo no WhatsApp",
      "Preenchimento de formulário para entrada",
    ],
    buttonText: "Quero fazer parte da comunidade",
    buttonLink: "#formulario",
  },
  {
    name: "Kaos completo",
    price: "EM BREVE - R$ ?/mês",
    features: [
      "Aulas pocket semanais (30 min) sobre estrutura de negócio, vendas e prospecção",
      "Descontos para eventos presenciais e produtos de empresas parceiras",
      "Acesso a um link de site da Kaos para bio",
      "Exposição de produtos na loja online",
    ],
    buttonText: "Em breve...",
    buttonLink: "#",
  },
  {
    name: "Um pouco de Kaos ",
    price: "EM BREVE - R$ ?/mês",
    features: [
      "Aulas pocket semanais (30 min) sobre universo digital",
      "Transição do CLT para o digital",
      "Acesso a um link de site da Kaos para bio",
    ],
    buttonText: "Em breve....",
    buttonLink: "#",
  },
 
];

export function PricingCards() {
  return (
    <div className="flex justify-center items-center w-full py-12 px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl w-full">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="p-6 flex flex-col items-center text-white bg-gradient-to-b from-red-900 to-black rounded-2xl shadow-lg border border-red-700 transition-transform transform hover:scale-105 w-full max-w-xs mx-auto"
          >
            <h2 className="text-2xl font-extrabold mb-2 text-center text-red-500">
              {plan.name}
            </h2>
            <p className="text-xl font-semibold mb-4 text-center">
              {plan.price}
            </p>
            <ul className="mb-6 space-y-3 text-center text-lg">
              {plan.features.map((feature, i) => (
                <li
                  key={i}
                  className="text-sm bg-red-700 px-4 py-2 rounded-lg"
                >
                  ✔ {feature}
                </li>
              ))}
            </ul>
            <a
              href={plan.buttonLink}
              className="mt-auto bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg shadow-md transition-all duration-300 w-full text-center"
            >
              {plan.buttonText}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
