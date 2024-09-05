

interface TextareaProps {
  text: string;
  handleTextChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  maxChars: number;
  placeholder: string;
}

export function Textarea({
  text,
  handleTextChange,
  maxChars,
  placeholder,
}: TextareaProps) {
  return (
    <div className="">
      <textarea
        name="comment"
        className="w-full border border-gray-300 rounded p-2 h-32"
        placeholder={placeholder}
        value={text}
        onChange={handleTextChange}
        maxLength={maxChars}
      />
      <div className="text-right text-xs text-gray-400">
        {text.length}/{maxChars} caracteres
      </div>
    </div>
  );
}
