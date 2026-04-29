import { Card, Skeleton } from "@heroui/react";

const Loading = () => {
  return (
    <div className=" w-full grid grid-cols-2 md:grid-cols-4 gap-4">
      {[...Array(8)].map((_, i) => (
        <Card key={i} className="space-y-5 p-4" radius="lg">
          <Skeleton className="rounded-lg">
            <div className="h-48 rounded-lg bg-default-300"></div>
          </Skeleton>
          <div className="space-y-3">
            <Skeleton className="w-3/5 rounded-lg">
              <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
            </Skeleton>
            <Skeleton className="w-4/5 rounded-lg">
              <div className="h-3 w-4/5 rounded-lg bg-default-200"></div>
            </Skeleton>
          </div>
        </Card>
      ))}
    </div>
  );
};
export default Loading