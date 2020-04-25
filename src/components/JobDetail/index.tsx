import * as React from 'react';
import { useGetJobDetailQuery } from '../../generated/graphql';
import JobDetail from './JobDetail';

const JobDetailContainer = () => {
  const { data, error, loading } = useGetJobDetailQuery({
    variables: {
      input: {
        jobSlug: 'slug',
        companySlug: 'slug'
      }
    }
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>ERROR</div>;
  }

  if (!data) {
    return <div>Select a flight from the panel</div>;
  }

  return <JobDetail data={data} />;
};

export default JobDetailContainer;