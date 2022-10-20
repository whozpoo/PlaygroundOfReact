import React from "react";
import { createRoot } from "react-dom/client";
import { faker } from "@faker-js/faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          author="Sam"
          time="Today at 6:00PM"
          content="Nice blog post!"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Tom"
          time="Today at 7:00PM"
          content="Thank you very much!"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Bran"
          time="Today at 8:00PM"
          content="Great Great Great!"
        />
      </ApprovalCard>
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
