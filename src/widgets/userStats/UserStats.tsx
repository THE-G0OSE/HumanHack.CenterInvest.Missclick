import { useAppSelector } from "@/shared/lib/hooks";
import { selectUser } from "@/entities/user/";
import { Card, CardContent } from "@/components/ui/card";
import { Leaf, Droplets, TreePine } from "lucide-react";

export function UserStats() {
  const user = useAppSelector(selectUser);

  if (!user) {
    return null;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <Card>
        <CardContent className="flex items-center gap-4 p-6">
          <div className="bg-green-100 dark:bg-green-900 p-3 rounded-full">
            <Leaf className="h-6 w-6 text-green-600 dark:text-green-400" />
          </div>
          <div>
            <p className="text-sm text-lt-muted-foreground dark:text-dk-muted-foreground">
              CO₂ сэкономлено
            </p>
            <p className="text-2xl font-bold">{user.ecoWallet.co2Saved} кг</p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="flex items-center gap-4 p-6">
          <div className="bg-emerald-100 dark:bg-emerald-900 p-3 rounded-full">
            <TreePine className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
          </div>
          <div>
            <p className="text-sm text-lt-muted-foreground dark:text-dk-muted-foreground">
              Деревьев посажено
            </p>
            <p className="text-2xl font-bold">{user.ecoWallet.treesPlanted}</p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="flex items-center gap-4 p-6">
          <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full">
            <Droplets className="h-6 w-6 text-blue-600 dark:text-blue-400" />
          </div>
          <div>
            <p className="text-sm text-lt-muted-foreground dark:text-dk-muted-foreground">
              Воды сэкономлено
            </p>
            <p className="text-2xl font-bold">{user.ecoWallet.waterSaved} л</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
