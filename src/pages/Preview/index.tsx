import { FunctionComponent, useRef, useState } from "react";
import ReactToPrint from "react-to-print";
import { Button } from "antd";
import DocumentExportPDF from "../BoreLogs/DocumentExportPDF";
import React from 'react';

interface PreviewPageProps { }
export type dataType = {
  depth: number;
  description: string;
};
const PreviewPage: FunctionComponent<PreviewPageProps> = () => {
  const componentRef = useRef<any>(null);
  const [data, setData] = useState<dataType[]>();

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
      {/* <DocumentExportPDF
            ref={componentRef}
            data={data ?? []}
          ></DocumentExportPDF> */}
    </div>
  );
};

export default PreviewPage;