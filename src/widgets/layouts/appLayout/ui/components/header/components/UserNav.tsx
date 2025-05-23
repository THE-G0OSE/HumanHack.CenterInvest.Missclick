import { Avatar } from "@/components/ui/avatar";
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
import { useAppDispatch, useAppSelector } from "@/shared/lib/hooks";
import { selectUser } from "@/entities/user/model/selectors";
import { useNavigate } from "react-router";
import { setUser } from "@/entities/user";

export function UserNav() {
  const user = useAppSelector(selectUser);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const logOut = () => {
    window.localStorage.removeItem("token");
    dispatch(setUser(null));
  };

  if (!user) return null;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-8 w-8 rounded-full">
          <Avatar className="h-8 w-8">
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
          <div onClick={() => navigate("/dashboard")}>
            <DropdownMenuItem>Личный кабинет</DropdownMenuItem>
          </div>
          <div onClick={() => navigate("/dashboard/projects")}>
            <DropdownMenuItem>Мои проекты</DropdownMenuItem>
          </div>
          <div onClick={() => navigate("/dashboard/achivments")}>
            <DropdownMenuItem>Достижения</DropdownMenuItem>
          </div>
          <div onClick={() => navigate("/dashboard/settings")}>
            <DropdownMenuItem>Настройки</DropdownMenuItem>
          </div>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <button onClick={logOut}>
          <DropdownMenuItem>Выйти</DropdownMenuItem>
        </button>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
