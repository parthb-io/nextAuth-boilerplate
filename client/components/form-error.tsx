import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

interface FormErorProps {
  message?: string;
}

export const FormError = ({ message }: FormErorProps) => {
  if (!message) return null;

  return (
    <div className="bg-destructive/15 p-3 rounded-md flex items-center text-sm gap-2 text-destructive">
        <ExclamationTriangleIcon className="h-4 w-4"/>
       <p className="">{message}</p>
    </div>
  );
};
