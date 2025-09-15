import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

export default function Profile() {
  return (
    <Button variant="ghost" className="h-auto p-0 hover:bg-transparent">
      <Avatar>
        <AvatarImage src="./avatar.webp" alt="Profile image" />
        <AvatarFallback>KK</AvatarFallback>
      </Avatar>
    </Button>
  );
}
