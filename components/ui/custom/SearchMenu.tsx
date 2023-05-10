import { Search } from "lucide-react";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandList,
  CommandItem,
} from "@/components/ui/command";

export default function SearchMenu({ open, onOpenChange, value }) {
  return (
    <CommandDialog open={open} onOpenChange={onOpenChange}>
      <CommandInput placeholder="Rechercher un mot..." />
      <CommandList>
        <CommandEmpty>Aucun mot trouvé.</CommandEmpty>
        <CommandGroup heading="Mots trouvés">
          {value.map((word: any) => (
            <CommandItem key={word.id} onSelect={() => console.log("hi")}>
              <Search className="mr-2 h-4 w-4" />
              {word.title}
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
}
