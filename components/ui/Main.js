import { Tabs } from "./tabs";
import { Card, CardContent } from "./card";
import AllTabs from "../AllTabs";
import AllContent from "../AllContent";

export default function Main() {
  return (
    <>
      <CardContent className="w-full h-full">
        <Card className="w-full h-full lg:p-10 p-2">
          <Tabs defaultValue="complete" className="w-full h-full">
            <AllContent />
            <AllTabs />
          </Tabs>
        </Card>
      </CardContent>
    </>
  );
}
