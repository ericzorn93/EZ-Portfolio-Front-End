import React from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";

import { useFindGitHubRepoQuery } from "../../lib/generated/GithubGraphqlComponents";
import { PageContainer } from "../../components/page_styles/overall";

const ProjectID: NextPage = () => {
  const router = useRouter();

  const { data, loading, error } = useFindGitHubRepoQuery({
    context: { clientName: "githubLink" },
    variables: {
      name: `${router.query.name}`
    }
  });

  if (!data || loading || error) {
    return <h1>Loading...</h1>;
  }

  return (
    <PageContainer>
      <h1>Project Id: {data.viewer.repository.name}</h1>
      <p>{data.viewer.repository.primaryLanguage.name}</p>
    </PageContainer>
  );
};

export default ProjectID;