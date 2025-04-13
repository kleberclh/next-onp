"use client";
import { useState } from "react";

export default function Teste1() {
  const [isVisible, setIsVisible] = useState(false);
  interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
  }

  const pessoa = [
    {
      nome: "Kleber",
      idade: 26,
      perfil: "https://i.imgur.com/yYoXPe0.mp4", // imagem real
    },
    {
      nome: "Larissa",
      idade: 26,
      perfil: "https://i.imgur.com/2ZfYF7f.jpg", // imagem real
    },
  ];
  return (
    <div>
      <h1>Renderizando o Teste 1</h1>

      <div>
        <div style={{ visibility: isVisible ? "visible" : "hidden" }}>
          <h2 className="text-xl font-semibold mb-2">Este é um Modal</h2>
          <p className="text-gray-700">Conteúdo dentro do modal vai aqui!</p>
          <div>
            {pessoa.map((pessoas, index) => (
              <li key={index}>
                Nome: {pessoas.nome}, Idade: {pessoas.idade}, Foto:{" "}
                <iframe width={50} height={50} src={pessoas.perfil} />
              </li>
            ))}
          </div>
        </div>
        <button onClick={() => setIsVisible(!isVisible)}>Click</button>
      </div>
    </div>
  );
}
