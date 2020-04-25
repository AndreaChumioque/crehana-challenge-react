import * as React from 'react';
import { useGetJobDetailQuery } from '../../generated/graphql';
import JobDetail from './JobDetail';
import Loader from '../Loader';

interface OwnProps {
  match: any;
}

const JobDetailContainer = ({ match }: OwnProps) => {
  console.log(match);
  const { data, error, loading } = useGetJobDetailQuery({
    variables: {
      input: {
        jobSlug: match.params.jobslug,
        companySlug: match.params.companyslug,
      }
    }
  });

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <div>ERROR</div>;
  }

  if (!data) {
    return <div>No tenemos información disponible.</div>;
  }

  return <JobDetail data={data} />;
};

export default JobDetailContainer;