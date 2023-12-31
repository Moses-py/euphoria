import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ActiveOrders from "./components/ActiveOrders";
import CancelledOrders from "./components/CancelledOrders";
import CompletedOrders from "./components/CompletedOrders";

const Orders = () => {
  return (
    <>
      <div className="flex-1 px-5 w-full">
        <Tabs defaultValue="active" className="w-full ">
          <TabsList className="w-full bg-transparent dark:bg-transparent my-5 ring-1 ring-primary">
            <TabsTrigger
              value="active"
              className="w-full bg-light text-primary rounded-md "
            >
              Active
            </TabsTrigger>
            <TabsTrigger
              value="cancelled"
              className="w-full bg-light text-primary rounded-md "
            >
              Cancelled
            </TabsTrigger>
            <TabsTrigger
              value="completed"
              className="w-full bg-light text-primary rounded-md "
            >
              Completed
            </TabsTrigger>
          </TabsList>
          <TabsContent value="active" className="w-full h-full">
            <ActiveOrders />
          </TabsContent>
          <TabsContent value="cancelled">
            <CancelledOrders />
          </TabsContent>
          <TabsContent value="completed">
            <CompletedOrders />
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
};

export default Orders;
