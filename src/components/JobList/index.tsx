import * as React from 'react';
import { useGetJobListQuery, useGetCompaniesQuery, useGetCountriesQuery } from '../../generated/graphql';
import JobList from './JobList';

const JobListContainer = () => {
  const { data:jobsData, error: jobsError, loading: jobsLoading } = useGetJobListQuery();
  const { data: companiesData, error: companiesError, loading: companiesLoading } = useGetCompaniesQuery();
  const { data: countriesData, error: countriesError, loading: countriesLoading } = useGetCountriesQuery();

  if (jobsLoading || companiesLoading || countriesLoading) {
    return <div>Loading...</div>;
  }

  if (jobsError || companiesError || countriesError || !jobsData || !companiesData || !countriesData) {

    return <div>ERROR</div>;
  }

  return <JobList jobsData={ jobsData} countriesData={countriesData} companiesData={companiesData} />;
};

export default JobListContainer;
