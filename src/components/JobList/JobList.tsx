import * as React from 'react';
import { GetJobListQuery, GetCompaniesQuery, GetCountriesQuery } from '../../generated/graphql';
import { isEmpty, cloneDeep } from 'lodash';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { FormControl, Input, InputLabel, Select, MenuItem } from '@material-ui/core';
import './styles.css';

interface Props {
  jobsData: GetJobListQuery;
  companiesData: GetCompaniesQuery;
  countriesData: GetCountriesQuery;
}

declare global {
  interface Window { jobs: any; }
}

const className = 'LaunchList';

const LaunchList: React.FC<Props> = ({ jobsData, companiesData, countriesData }) => {
  const [filteredJobs, setFilteredJobs] = React.useState<any[]>(jobsData.jobs);
  const [selectedCompanies, setSelectedCompanies] = React.useState([]);
  const [selectedCountries, setSelectedCountries] = React.useState([]);
  window.jobs = jobsData.jobs;

  const filterJobs = React.useCallback((selectedCountries : any, selectedCompanies : any) => {
    if (isEmpty(selectedCountries) && isEmpty(selectedCompanies)) {
      setFilteredJobs(jobsData.jobs);
    } else {
      let filteredJobs = cloneDeep(jobsData.jobs);
      // filter by company
      if (!isEmpty(selectedCompanies)) {
        filteredJobs = filteredJobs.filter(job => selectedCompanies.includes(job.company?.id));
      }
      // filter by country
      if (!isEmpty(selectedCountries)) {
        filteredJobs = filteredJobs.filter((job : any )=> job.cities && job.cities.some((city : any) => selectedCountries.includes(city.country.id)));
      }
      setFilteredJobs(filteredJobs);
    }
  },  [jobsData.jobs]);

  return (
  <div className={className}>
    <h1>GraphQl Jobs</h1>
    <h4>Filtrar por</h4>
    <FormControl>
      <InputLabel id="select-country-label">País</InputLabel>
      <Select
        labelId="select-country-label"
        id="select-country"
        multiple
        value={selectedCountries}
        onChange={(e : any) => {
          console.log(e.target.value)
          setSelectedCountries(e.target.value);
          filterJobs(e.target.value, selectedCompanies);
        }}
        input={<Input />}
      >
        {countriesData.countries && countriesData.countries.map(country => (
          <MenuItem key={country.id} value={country.id} >
            {country.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
    <FormControl>
      <InputLabel id="select-company-label">Compañía</InputLabel>
      <Select
        labelId="select-company-label"
        id="select-company"
        multiple
        value={selectedCompanies}
        onChange={(e : any) => {
          console.log(e.target.value)
          setSelectedCompanies(e.target.value);
          filterJobs(selectedCountries, e.target.value);
        }}
        input={<Input />}
      >
        {companiesData.companies && companiesData.companies.map(company => (
          <MenuItem key={company.id} value={company.id} >
            {company.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
    
    <h3>Empleos</h3>
    <ol className={`${className}__list`}>
      {filteredJobs && filteredJobs.map(
          (job, i) =>
            !!job && (
              <li key={i} className={`${className}__item`}>
                {job.title} ({job.company?.name})
              </li>
            ),
        )}
    </ol>
  </div>
)};

export default LaunchList;