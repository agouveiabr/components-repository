"use client";

import { useState } from "react";
import { BasicModal } from "./BasicModal";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import RangeSlider from "./RangeSlider";
import { Textarea } from "./Textarea";

export const description = "A collection of health charts.";

export function Blocks() {
  // Basic Modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Textarea
  const [text, setText] = useState("");
  const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  };

  return (
    <div className="chart-wrapper mx-auto flex max-w-6xl flex-col flex-wrap items-start justify-center gap-6 p-6 sm:flex-row sm:p-8">
      <div className="grid w-full gap-6 sm:grid-cols-2 lg:max-w-[22rem] lg:grid-cols-1 xl:max-w-[25rem]">
        <Card className="w-80">
          <CardHeader className="space-y-0 pb-2">
            <CardTitle className="text-xl">Basic Modal</CardTitle>
            <CardDescription>
              Modal simples com dois botões de ação.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center mt-4">
            <button
              onClick={openModal}
              className="p-3 bg-zinc-900 rounded-md text-white"
            >
              Abrir Modal
            </button>
          </CardContent>
          <CardFooter>
            {isModalOpen && (
              <BasicModal
                title="Modal Basico"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis reprehenderit placeat deserunt iste dolorum nisi libero dolores. Excepturi recusandae, ab quas beatae illum ducimus! Ducimus explicabo laborum dolores vitae temporibus."
                confirmButtonText="Sim, eu concordo"
                cancelButtonText="Nao, eu discordo"
                closeBasicModal={closeModal}
              />
            )}
          </CardFooter>
        </Card>
        <Card className="max-w-xs" x-chunk="charts-01-chunk-2">
          <CardHeader>
            <CardTitle>TextArea</CardTitle>
            <CardDescription>
              Um textarea bem simples com um contador de caracteres.
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <Textarea
              placeholder="Digite algo..."
              text={text}
              handleTextChange={handleTextChange}
              maxChars={50}
            />
          </CardContent>
        </Card>
      </div>
      <div className="grid w-full flex-1 gap-6 lg:max-w-[20rem]">
        <Card className="flex flex-col lg:max-w-md">
          <CardHeader className="flex items-start gap-4 space-y-0 pb-2">
            <CardTitle className="flex gap-1 text-xl tabular-nums">
              Range Slider
            </CardTitle>
            <CardDescription>
              Um range slider de 0 a 10, mostrando os numeros e a cor do vermeho
              ao verde.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-1 items-center">
            <RangeSlider
              disabled={false}
              onChange={(value) => console.log(value)}
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
