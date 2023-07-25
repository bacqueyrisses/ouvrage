import { Search } from "lucide-react";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandList,
  CommandItem,
} from "@/components/ui/command";

export default function SearchMenu({ open, onOpenChange, value, handleSearch }: any) {
    const handleChange = (word: any) => {
        console.log(word)
        handleSearch(word)
        onOpenChange(false)
    }
  return (
    <CommandDialog open={open} onOpenChange={onOpenChange}>
      <CommandInput placeholder="Rechercher un mot..." />
      <CommandList>
        <CommandEmpty>Aucun mot trouvé.</CommandEmpty>
        <CommandGroup heading="Mots trouvés">
          {value.map((word: any, index: any) => {
              console.log(word)
              return (
            <CommandItem key={index} onSelect={() => handleChange(word)}>
              <Search className="mr-2 h-4 w-4" />
              {word}
            </CommandItem>
              )})}
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
}
