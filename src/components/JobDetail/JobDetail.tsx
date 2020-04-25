import * as React from 'react';
import { GetJobDetailQuery } from '../../generated/graphql';

interface Props {
  data: GetJobDetailQuery;
}

const LaunchProfile: React.FC<Props> = ({ data }) => {
  if (!data.job) {
    return <div>No tenemos información por el momento.</div>;
  }

  return (
    <div>
      <div>
        <span>{data.job.company?.name}: </span>
      </div>
      <h1>
        {data.job.title}
      </h1>
      <p>{data.job.description}</p>
      {!!data.job.company?.logoUrl && (
        <div>
          <img src={data.job.company.logoUrl} alt={`${data.job.company.name} Logo`} />
        </div>
      )}
    </div>
  );
};

export default LaunchProfile;