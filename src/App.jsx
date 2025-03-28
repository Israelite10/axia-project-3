import { useState } from "react";
import JobCard from "./components/jobCard";
import FilterBar from "./components/FilterBar";
import jobsData from "./data/jobs.json";

function App() {
  const [filters, setFilters] = useState([]);

  const addFilter = (filter) => {
    if (!filters.includes(filter)) {
      setFilters([...filters, filter]);
    }
  };

  const removeFilter = (filterToRemove) => {
    setFilters(filters.filter((filter) => filter !== filterToRemove));
  };

  const clearFilters = () => {
    setFilters([]);
  };

  const filteredJobs = jobsData.filter((job) => {
    if (filters.length === 0) return true;

    const jobFilters = [job.role, job.level, ...job.languages, ...job.tools];

    return filters.every((filter) => jobFilters.includes(filter));
  });

  return (
    <div className="min-h-screen bg-lightBg">
      {/* Header with background */}
      <header className="h-32 bg-primary bg-[url('/images/bg-header-desktop.svg')] bg-cover"></header>

      <main className="container mx-auto px-4 py-12 max-w-6xl">
        {/* Filter bar (only shows when filters are active) */}
        <FilterBar
          filters={filters}
          removeFilter={removeFilter}
          clearFilters={clearFilters}
        />

        {/* Job listings */}
        <div className="space-y-8 md:space-y-6">
          {filteredJobs.map((job) => (
            <JobCard key={job.id} job={job} addFilter={addFilter} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
