import * as React from 'react';
import { Link } from "react-router-dom";
import { isEmpty, cloneDeep, orderBy } from 'lodash';
import * as moment from 'moment';
import 'moment/locale/es';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Grid, FormControl, Input, Select, MenuItem, Avatar, Paper, Box } from '@material-ui/core';
import { GetJobListQuery, GetCompaniesQuery, GetCountriesQuery } from '../../generated/graphql';

moment.default().locale('es');

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: `${theme.spacing(1)}px 0`,
    },
    select: {
      border: '1px solid #dcdcdc',
      padding: theme.spacing(1),
      borderRadius: theme.spacing(1),
    },
    dropDownIcon: {
      right: 8,
    },
    label: {
      marginTop: theme.spacing(1),
      marginBottom: 0,
    },
    large: {
      height: 50,
      width: 50,
      marginRight: theme.spacing(2),
    },
    link: {
      textDecoration: 'none',
    },
    jobPaper: {
      margin: `${theme.spacing(2)}px 0`,
      padding: theme.spacing(2),
      borderRadius: theme.spacing(1),
    }
  }),
);

// Paper dropdown styles
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

interface Props {
  jobsData: GetJobListQuery;
  companiesData: GetCompaniesQuery;
  countriesData: GetCountriesQuery;
}

const JobList: React.FC<Props> = ({ jobsData, companiesData, countriesData }) => {
  const classes = useStyles();
  const [filteredJobs, setFilteredJobs] = React.useState<any[]>(orderBy(jobsData.jobs, 'postedAt', 'desc'));
  const [selectedCompanies, setSelectedCompanies] = React.useState([]);
  const [selectedCountries, setSelectedCountries] = React.useState([]);
  const [sortOrder, setSortOrder] = React.useState<'desc' | 'asc'>('desc');

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
        filteredJobs = filteredJobs.filter((job : any )=> job.cities && (job.cities as any[]).some(city => selectedCountries.includes(city.country.id)));
      }
      setFilteredJobs(orderBy(filteredJobs, 'postedAt', sortOrder));
    }
  },  [jobsData.jobs, sortOrder]);

  const sortJobs = React.useCallback((order : 'desc' | 'asc') => {
    setSortOrder(order);
    const sortedJobs = orderBy(filteredJobs, ['postedAt'], [order]);
    setFilteredJobs(sortedJobs);
  }, [filteredJobs]);

  return (
  <React.Fragment>
    <h1 className="bold">GraphQl Jobs</h1>
    <h4 className={classes.label}>Filtrar por</h4>
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6} md={4}>
        <FormControl fullWidth className={classes.formControl}>
          <Select
            id="select-country"
            displayEmpty
            multiple
            className={classes.select}
            classes={{
              icon: classes.dropDownIcon
            }}
            value={selectedCountries}
            onChange={(e : any) => {
              setSelectedCountries(e.target.value);
              filterJobs(e.target.value, selectedCompanies);
            }}
            renderValue={(selected) => {
              if ((selected as string[]).length === 0) {
                return <em>País</em>;
              }
              const selectedNames = (selected as string[]).map((s) => {
                const match = (countriesData.countries as any[]).find(c => c.id === s);
                return match && match.name;
              });
              return (selectedNames as string[]).join(', ');
            }}
            input={<Input disableUnderline />}
            MenuProps={MenuProps}
          >
            <MenuItem disabled value="">
              <em>País</em>
            </MenuItem>
            {countriesData.countries && countriesData.countries.map((country : any) => (
              <MenuItem key={country.id} value={country.id}>
                {country.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <FormControl fullWidth className={classes.formControl}>
          <Select
            id="select-company"
            displayEmpty
            multiple
            className={classes.select}
            classes={{
              icon: classes.dropDownIcon
            }}
            value={selectedCompanies}
            onChange={(e : any) => {
              setSelectedCompanies(e.target.value);
              filterJobs(selectedCountries, e.target.value);
            }}
            renderValue={(selected) => {
              if ((selected as string[]).length === 0) {
                return <em>Compañía</em>;
              }
              const selectedNames = (selected as string[]).map((s) => {
                const match = (companiesData.companies as any[]).find(c => c.id === s);
                return match && match.name;
              });
              return (selectedNames as string[]).join(', ');
            }}
            input={<Input disableUnderline />}
            MenuProps={MenuProps}
          >
            <MenuItem disabled value="">
              <em>Compañía</em>
            </MenuItem>
            {companiesData.companies && companiesData.companies.map(company => (
              <MenuItem key={company.id} value={company.id}>
                {company.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
    </Grid>
    <h4 className={classes.label}>Ordenar por fecha</h4>
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6}>
        <FormControl fullWidth className={classes.formControl}>
          <Select
            labelId="select-order-label"
            id="select-order"
            className={classes.select}
            classes={{
              icon: classes.dropDownIcon
            }}
            value={sortOrder}
            onChange={(e : any) => {
              sortJobs(e.target.value);
            }}
            input={<Input disableUnderline />}
            MenuProps={MenuProps}
          >
            <MenuItem key="order-desc" value="desc">
              De más nuevo a más antiguo
            </MenuItem>
            <MenuItem key="order-asc" value="asc">
              De más antiguo a más nuevo
            </MenuItem>
          </Select>
        </FormControl>
      </Grid>
    </Grid>
    <h2>Empleos</h2>
    {filteredJobs && filteredJobs.map(
        (job, i) =>
          !!job && (
            <Link key={i} to={`/detail/${job.company.slug}/${job.slug}`} style={{ textDecoration: 'none'}}>
              <Paper variant="outlined" className={classes.jobPaper}>
                <Grid container direction="row" alignItems="center">
                  {job.company.logoUrl
                    ? (
                      <Avatar alt={job.company.name} src={job.company.logoUrl} className={classes.large} />
                    ) : (
                      <Avatar alt={job.company.name} className={classes.large}>{job.company.name.charAt(0).toUpperCase()}</Avatar>
                    )}
                  <Box flexGrow={1}>
                    <h3>{job.title}</h3>
                      <Grid container>
                      <Grid item xs={12} sm={4}>
                        {job.company?.name}
                      </Grid>
                      <Grid item xs={12} sm={4}>
                        {job.cities.length && job.cities[0].country.name}
                      </Grid>
                      <Grid item xs={12} sm={4}>
                        <span>{moment.default(job.postedAt).format('LL')}</span>
                      </Grid>
                    </Grid>
                  </Box>
                </Grid>
              </Paper>
            </Link>
          ),
      )}
  </React.Fragment>
)};

export default JobList;