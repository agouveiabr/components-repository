interface BasicModalProps {
  title: string;
  description: string;
  confirmButtonText: string;
  cancelButtonText: string;
  closeBasicModal: () => void;
}

export function BasicModal({
  title,
  description,
  confirmButtonText,
  cancelButtonText,
  closeBasicModal,
}: BasicModalProps) {
  function handleAnswer(answer: string) {
    console.log(answer);

    closeBasicModal();
  }
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
      <div className="w-96 rounded-xl py-5 px-6 bg-zinc-100 space-y-5">
        <h2 className="text-xl font-bold text-center">{title}</h2>
        <div>
          <p className="text-center font-medium">{description}</p>

          <div className="flex flex-col justify-center items-center gap-2 mt-4 text-white">
            <button
              onClick={() => handleAnswer("Sim")}
              className="flex justify-center font-bold text-xs px-8 py-3 rounded-md drop-shadow-md bg-green-700 w-80"
            >
              {confirmButtonText}
            </button>

            <button
              onClick={() => handleAnswer("Não")}
              className="flex justify-center font-bold text-xs px-8 py-2 rounded-md drop-shadow-md bg-stone-400 w-48"
            >
              {cancelButtonText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
