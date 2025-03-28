const JobCard = ({ job, addFilter }) => {
  return (
    <div
      className={`relative bg-white rounded-md shadow-md p-6 mb-12 ${
        job.featured ? "border-l-4 border-primary" : ""
      }`}
    >
      <div className="flex flex-col md:flex-row md:items-center gap-4">
        {/* Company Logo */}
        <div className="absolute -top-8 left-6 w-14 h-14 md:static md:w-16 md:h-16 md:mr-6">
          <img
            src={job.logo}
            alt={job.company}
            className="w-full h-full object-contain"
          />
        </div>

        {/* Job Details */}
        <div className="flex-1 mt-10 md:mt-0">
          <div className="flex items-center flex-wrap gap-x-4 mb-2">
            <h3 className="text-primary font-bold">{job.company}</h3>
            <div className="flex gap-2">
              {job.new && (
                <span className="bg-primary text-white text-xs font-bold px-2 py-1 rounded-full uppercase">
                  New!
                </span>
              )}
              {job.featured && (
                <span className="bg-veryDarkCyan text-white text-xs font-bold px-2 py-1 rounded-full uppercase">
                  Featured
                </span>
              )}
            </div>
          </div>

          <h2 className="text-veryDarkCyan font-bold text-lg mb-2 hover:text-primary cursor-pointer transition-colors">
            {job.position}
          </h2>

          <div className="flex flex-wrap items-center gap-4 text-darkCyan text-sm mb-4">
            <span>{job.postedAt}</span>
            <span>•</span>
            <span>{job.contract}</span>
            <span>•</span>
            <span>{job.location}</span>
          </div>
        </div>

        {/* Divider for mobile */}
        <div className="border-t border-darkCyan md:hidden"></div>

        {/* Job Tags */}
        <div className="flex flex-wrap gap-3">
          <button
            onClick={() => addFilter(job.role)}
            className="bg-filterTablets text-primary font-bold px-3 py-1 rounded hover:bg-primary hover:text-blue-300 cursor-pointer transition-colors"
          >
            {job.role}
          </button>
          <button
            onClick={() => addFilter(job.level)}
            className="bg-filterTablets text-primary font-bold px-3 py-1 rounded hover:bg-primary hover:text-blue-300 cursor-pointer  transition-colors"
          >
            {job.level}
          </button>
          {job.languages.map((language) => (
            <button
              key={language}
              onClick={() => addFilter(language)}
              className="bg-filterTablets text-primary cursor-pointer  font-bold px-3 py-1 rounded hover:bg-primary hover:text-blue-300 transition-colors"
            >
              {language}
            </button>
          ))}
          {job.tools.map((tool) => (
            <button
              key={tool}
              onClick={() => addFilter(tool)}
              className="bg-filterTablets text-primary cursor-pointer  font-bold px-3 py-1 rounded hover:bg-primary  hover:text-blue-300 transition-colors"
            >
              {tool}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobCard;
