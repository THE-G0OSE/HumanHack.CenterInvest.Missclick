import { useAppSelector } from "@/shared/lib/hooks";
import { selectUserAchievements } from "@/entities/user/model/selectors";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Award,
  Leaf,
  TreePine,
  Droplets,
  Heart,
  Globe,
  Users,
} from "lucide-react";

export function UserAchievements() {
  const achievements = useAppSelector(selectUserAchievements);

  const getAchievementIcon = (icon: string) => {
    switch (icon) {
      case "award":
        return <Award className="h-6 w-6" />;
      case "leaf":
        return <Leaf className="h-6 w-6" />;
      case "tree":
        return <TreePine className="h-6 w-6" />;
      case "water":
        return <Droplets className="h-6 w-6" />;
      case "heart":
        return <Heart className="h-6 w-6" />;
      case "globe":
        return <Globe className="h-6 w-6" />;
      case "users":
        return <Users className="h-6 w-6" />;
      default:
        return <Award className="h-6 w-6" />;
    }
  };

  if (achievements.length === 0) {
    return (
      <Card>
        <CardContent className="flex flex-col items-center justify-center py-12">
          <p className="text-lt-muted-foreground dark:text-dk-muted-foreground">
            У вас пока нет достижений
          </p>
          <p className="text-lt-muted-foreground dark:text-dk-muted-foreground">
            Поддержите проекты, чтобы получить награды
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {achievements.map((achievement) => (
        <Card key={achievement.id}>
          <CardHeader className="pb-2">
            <div className="flex items-center gap-2">
              <div className="bg-lt-primary/10 dark:bg-dk-primary/10 p-2 rounded-full">
                {getAchievementIcon(achievement.icon)}
              </div>
              <div>
                <CardTitle className="text-lg">{achievement.title}</CardTitle>
                <CardDescription>
                  Получено {new Date(achievement.earnedAt).toLocaleDateString()}
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-lt-muted-foreground dark:text-dk-muted-foreground">
              {achievement.description}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
