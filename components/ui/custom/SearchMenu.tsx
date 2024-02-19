import { Search } from "lucide-react";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandList,
  CommandItem,
} from "@/components/ui/command";
import { Dispatch, SetStateAction } from "react";

interface SearchMenuI {
  open: boolean;
  onOpenChange: Dispatch<SetStateAction<boolean>>;
  value: string[];
  handleSearch: (word: string) => void;
}

export default function SearchMenu({
  open,
  onOpenChange,
  value,
  handleSearch,
}: SearchMenuI) {
  const handleChange = (word: string) => {
    handleSearch(word);
    onOpenChange(false);
  };
  return (
    <CommandDialog open={open} onOpenChange={onOpenChange}>
      <CommandInput placeholder="Rechercher un mot..." />
      <CommandList>
        <CommandEmpty>Aucun mot trouvé.</CommandEmpty>
        <CommandGroup heading="Mots trouvés">
          {value.map((word: string, index: number) => (
            <CommandItem key={index} onSelect={() => handleChange(word)}>
              <Search className="mr-2 h-4 w-4" />
              {word}
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
}
