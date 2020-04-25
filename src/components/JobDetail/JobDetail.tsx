import * as React from 'react';
import { GetJobDetailQuery } from '../../generated/graphql';
import './styles.css';

interface Props {
  data: GetJobDetailQuery;
}

const className = 'LaunchProfile';

const LaunchProfile: React.FC<Props> = ({ data }) => {
  if (!data.job) {
    return <div>No tenemos información por el momento.</div>;
  }

  return (
    <div className={className}>
      <div className={`${className}__status`}>
        <span>{data.job.company?.name}: </span>
      </div>
      <h1 className={`${className}__title`}>
        {data.job.title}
      </h1>
      <p className={`${className}__description`}>{data.job.description}</p>
      {!!data.job.company?.logoUrl && (
        <div className={`${className}__image-list`}>
          <img src={data.job.company.logoUrl} alt={`${data.job.company.name} Logo`} className={`${className}__image`} />
        </div>
      )}
    </div>
  );
};

export default LaunchProfile;