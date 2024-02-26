import { FunctionComponent, useRef } from "react";
import ReactToPrint from "react-to-print";
import { Button } from "antd";

interface PreviewPageProps { }
export type dataType = {
  depth: number;
  description: string;
};
const PreviewPage: FunctionComponent<PreviewPageProps> = () => {
  const componentRef = useRef<any>(null);

  const handlePrint = () => {
    if (componentRef.current) {
      // Trigger the print action
      componentRef.current.onPrint();
    }
  };

  return (
    <div>
      <ReactToPrint
        trigger={() => (
          <Button
            type="primary"
            style={{ margin: "8px 16px " }}
            onClick={handlePrint}
          >
            Export
          </Button>
        )}
        content={() => componentRef.current}
      />

    </div>
  );
};

export default PreviewPage;