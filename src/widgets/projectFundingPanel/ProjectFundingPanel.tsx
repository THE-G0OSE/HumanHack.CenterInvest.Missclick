import type React from "react";

import { useAppSelector } from "@/shared/lib/hooks";
import { selectProjectById } from "@/entities/project/model/selectors";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import { usePostTransactionMutation } from "@/entities/transaction/model/api/transactionApi";

interface ProjectFundingPanelProps {
  id: string;
}

export function ProjectFundingPanel({ id }: ProjectFundingPanelProps) {
  const project = useAppSelector(selectProjectById(id));
  const [amount, setAmount] = useState("500");
  const [postTransaction] = usePostTransactionMutation();

  if (!project) {
    return null;
  }

  const progress = Math.min(
    Math.round((project.current_amount / project.target_amount) * 100),
    100
  );

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9]/g, "");
    setAmount(value);
  };

  const handleQuickAmount = (value: string) => {
    setAmount(value);
  };

  const submitHandler = () => {
    postTransaction({ project_id: id, amount: Number(amount) });
  };

  return (
    <Card className="sticky top-24">
      <CardHeader>
        <CardTitle>Поддержать проект</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="font-medium">
              {project.current_amount.toLocaleString()} ₽
            </span>
            <span className="text-lt-muted-foreground dark:text-dk-muted-foreground">
              из {project.target_amount.toLocaleString()} ₽
            </span>
          </div>
          <Progress value={progress} className="h-2" />
          <div className="flex justify-between text-sm">
            <span className="text-lt-muted-foreground dark:text-dk-muted-foreground">
              {project.backers} спонсоров
            </span>
            <span className="text-lt-muted-foreground dark:text-dk-muted-foreground">
              {project.days_left} дней осталось
            </span>
          </div>
        </div>

        <Tabs defaultValue="money">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="money">Деньги</TabsTrigger>
            <TabsTrigger value="crypto">Криптовалюта</TabsTrigger>
          </TabsList>
          <TabsContent value="money" className="space-y-4">
            <div className="grid grid-cols-3 gap-2 mt-4">
              <Button
                variant={amount === "100" ? "default" : "outline"}
                onClick={() => handleQuickAmount("100")}
              >
                100 ₽
              </Button>
              <Button
                variant={amount === "500" ? "default" : "outline"}
                onClick={() => handleQuickAmount("500")}
              >
                500 ₽
              </Button>
              <Button
                variant={amount === "1000" ? "default" : "outline"}
                onClick={() => handleQuickAmount("1000")}
              >
                1000 ₽
              </Button>
            </div>

            <div className="space-y-2">
              <label htmlFor="custom-amount" className="text-sm font-medium">
                Другая сумма
              </label>
              <div className="relative">
                <Input
                  id="custom-amount"
                  type="text"
                  value={amount}
                  onChange={handleAmountChange}
                  className="pl-8"
                />
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-lt-muted-foreground dark:text-dk-muted-foreground">
                  ₽
                </span>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="crypto" className="space-y-4">
            <p className="text-sm text-lt-muted-foreground dark:text-dk-muted-foreground">
              Поддержите проект с помощью криптовалюты. Мы принимаем Bitcoin,
              Ethereum и другие популярные криптовалюты.
            </p>
            <Button variant="outline" className="w-full">
              Подключить кошелек
            </Button>
          </TabsContent>
        </Tabs>
      </CardContent>
      <CardFooter>
        <Button onClick={submitHandler} className="w-full">
          Поддержать проект
        </Button>
      </CardFooter>
    </Card>
  );
}
