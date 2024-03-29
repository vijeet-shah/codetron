import React from "react";
import { Card, CardContent } from "./ui/card";
import DarkMode from "./controls/DarkMode";
import FontSize from "./controls/FontSize";
//langauge, font size, dark mode padding
function ControlOption() {
  return (
    <div>
      <Card className="fixed bottom-4 mx-6 bg-neutral-900/90 px-8 py-6 backdrop-blur">
        <CardContent className="flex flex-wrap gap-6 p-0">
          <DarkMode />
          <FontSize />
        </CardContent>
      </Card>
    </div>
  );
}

export default ControlOption;
