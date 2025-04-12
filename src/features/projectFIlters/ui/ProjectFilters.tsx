import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { useState } from "react";

export function ProjectFilters() {
  const [priceRange, setPriceRange] = useState([0, 1000000]);
  const [esgMinRating, setEsgMinRating] = useState(0);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Фильтры</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <h3 className="font-medium">Категории</h3>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Checkbox id="ecology" />
              <Label htmlFor="ecology">Экология</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="social" />
              <Label htmlFor="social">Социальные проекты</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="governance" />
              <Label htmlFor="governance">Управление</Label>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex justify-between">
            <h3 className="font-medium">Сумма финансирования</h3>
            <span className="text-sm text-lt-muted-foreground dark:text-dk-muted-foreground">
              {priceRange[0].toLocaleString()} ₽ -{" "}
              {priceRange[1].toLocaleString()} ₽
            </span>
          </div>
          <Slider
            defaultValue={[0, 1000000]}
            max={1000000}
            step={10000}
            value={priceRange}
            onValueChange={setPriceRange}
          />
        </div>

        <div className="space-y-4">
          <div className="flex justify-between">
            <h3 className="font-medium">Минимальный ESG-рейтинг</h3>
            <span className="text-sm text-lt-muted-foreground dark:text-dk-muted-foreground">
              {esgMinRating}/15
            </span>
          </div>
          <Slider
            defaultValue={[0]}
            max={15}
            step={1}
            value={[esgMinRating]}
            onValueChange={([value]: number[]) => setEsgMinRating(value)}
          />
        </div>

        <div className="space-y-4">
          <h3 className="font-medium">Статус проекта</h3>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Checkbox id="active" defaultChecked />
              <Label htmlFor="active">Активные</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="completed" />
              <Label htmlFor="completed">Завершенные</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="new" defaultChecked />
              <Label htmlFor="new">Новые (до 7 дней)</Label>
            </div>
          </div>
        </div>

        <Button className="w-full">Применить фильтры</Button>
      </CardContent>
    </Card>
  );
}
