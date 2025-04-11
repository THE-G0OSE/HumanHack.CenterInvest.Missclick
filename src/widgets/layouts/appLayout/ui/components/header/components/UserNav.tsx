import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useAppSelector } from "@/shared/lib/hooks";
import { selectUser } from "@/entities/user/model/selectors";
import { useNavigate } from "react-router";

export function UserNav() {
  const user = useAppSelector(selectUser);
  const navigate = useNavigate();

  const logOut = () => {};

  if (!user) return null;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-8 w-8 rounded-full">
          <Avatar className="h-8 w-8">
            <AvatarImage src={user.avatar} alt={user.name} />
            <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">{user.name}</p>
            <p className="text-xs leading-none text-muted-foreground">
              {user.email}
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <button onClick={() => navigate("/dashboard")}>
            <DropdownMenuItem>Личный кабинет</DropdownMenuItem>
          </button>
          <button onClick={() => navigate("/dashboard/projects")}>
            <DropdownMenuItem>Мои проекты</DropdownMenuItem>
          </button>
          <button onClick={() => navigate("/dashboard/achivments")}>
            <DropdownMenuItem>Достижения</DropdownMenuItem>
          </button>
          <button onClick={() => navigate("/dashboard/settings")}>
            <DropdownMenuItem>Настройки</DropdownMenuItem>
          </button>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <button onClick={logOut}>
          <DropdownMenuItem>Выйти</DropdownMenuItem>
        </button>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
