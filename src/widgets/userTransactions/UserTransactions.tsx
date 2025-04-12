import { useAppSelector } from "@/shared/lib/hooks";
import { selectUserTransactions } from "@/entities/user/model/selectors";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, AlertCircle, Clock } from "lucide-react";
import { useNavigate } from "react-router";

export function UserTransactions() {
  const navigate = useNavigate();
  const transactions = useAppSelector(selectUserTransactions);

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

  if (transactions.length === 0) {
    return (
      <Card>
        <CardContent className="flex flex-col items-center justify-center py-12">
          <p className="text-lt-muted-foreground dark:text-dk-muted-foreground">
            У вас пока нет транзакций
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>История транзакций</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {transactions.map((transaction) => (
            <div
              key={transaction.id}
              className="flex justify-between items-center border-b pb-4 last:border-0 last:pb-0"
            >
              <div>
                <div
                  onClick={() => navigate("/projects/" + transaction.projectId)}
                  className="font-medium hover:underline"
                >
                  {transaction.projectTitle}
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-sm text-lt-muted-foreground dark:text-dk-muted-foreground">
                    {new Date(transaction.date).toLocaleDateString()}
                  </span>
                  {getStatusBadge(transaction.status)}
                </div>
              </div>
              <div className="text-right">
                <span className="font-medium">
                  {transaction.amount.toLocaleString()} ₽
                </span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
