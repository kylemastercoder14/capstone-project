import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const CardProvider = ({ title, value, percentage, icon }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <div className="flex items-center gap-x-3">
            <div>{icon}</div>
            <p className="capitalize font-semibold text-sm">{title}</p>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-3xl font-semibold">{value}</p>
      </CardContent>
      <CardFooter>
        <p>
          <span className="text-green-700 dark:text-green-500">
            {percentage}
          </span>{" "}
          more than previous week
        </p>
      </CardFooter>
    </Card>
  );
};

export default CardProvider;
