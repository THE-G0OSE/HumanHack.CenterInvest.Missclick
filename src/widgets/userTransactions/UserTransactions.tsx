import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, AlertCircle, Clock } from "lucide-react";

export function UserTransactions() {

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "completed":
        return (
          <Badge
            variant="outline"
            className="flex items-center gap-1 text-green-600 border-green-600"
          >
            <CheckCircle className="h-3 w-3" />
            Завершено
          </Badge>
        );
      case "pending":
        return (
          <Badge
            variant="outline"
            className="flex items-center gap-1 text-amber-600 border-amber-600"
          >
            <Clock className="h-3 w-3" />В обработке
          </Badge>
        );
      case "failed":
        return (
          <Badge
            variant="outline"
            className="flex items-center gap-1 text-red-600 border-red-600"
          >
            <AlertCircle className="h-3 w-3" />
            Ошибка
          </Badge>
        );
      default:
        return null;
    }
  };
  return (
    <Card>
      <CardHeader>
        <CardTitle>История транзакций</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {getStatusBadge('completed')}
        </div>
      </CardContent>
    </Card>
  );
}
