import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function LoginButton({ ...props }) {
  return (
    <Button
      variant="outline"
      className={cn(
        "relative h-9 w-full justify-start rounded-[0.5rem] text-sm text-muted-foreground sm:pr-12 md:w-40 lg:w-64",
      )}
      {...props}
    />
  );
}
