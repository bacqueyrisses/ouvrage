import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function SearchButton({ ...props }) {
  return (
    <Button
      variant="outline"
      className={cn(
        "relative h-9 w-full justify-start rounded-[0.5rem] text-sm text-muted-foreground sm:pr-12 md:w-40 lg:w-64",
      )}
      {...props}
    >
      <span className="hidden lg:inline-flex">Trouver un mot...</span>
      <span className="inline-flex lg:hidden">Trouver...</span>
      <kbd className="pointer-events-none absolute right-1.5 top-2 hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
        <span className="text-xs">⌘</span>K
      </kbd>
    </Button>
  );
}
