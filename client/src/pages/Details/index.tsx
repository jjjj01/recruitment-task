import { useParams } from "react-router-dom";
import { Card, EmptyState } from "../../components";
import { DetailsNavigation } from "./DetailsNavigation";
import { FileDetails } from "./FileDetails";
import { FolderDetails } from "./FolderDetails";
import { findNodeByPath } from "../../utils";
import { useCurrentJson } from "../../api/queries";

type DetailsStatus = "INITIAL" | "ERROR" | "SUCCESS";

export const Details = () => {
  const params = useParams();
  const nodePath = params["*"];

  const { data: jsonData } = useCurrentJson();

  const node = jsonData ? findNodeByPath(jsonData, nodePath ?? "") : undefined;

  const status: DetailsStatus =
    !nodePath || !jsonData ? "INITIAL" : node ? "SUCCESS" : "ERROR";

  if (!nodePath) return null;

  return (
    <div className="min-h-screen">
      <Card>
        <DetailsNavigation />

        {status === "SUCCESS" && node ? (
          node.type === "file" ? (
            <FileDetails data={node} path={nodePath} />
          ) : (
            <FolderDetails data={node} path={nodePath} />
          )
        ) : (
          <EmptyState
            title="Incorrect Path"
            message={`The path "${nodePath}" does not exist in the tree.`}
            actionLink="/tree"
            actionLabel="Return to Tree"
          />
        )}
      </Card>
    </div>
  );
};
