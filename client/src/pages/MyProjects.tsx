import { useEffect, useState } from 'react';

import { Loader2Icon, PlusIcon, TrashIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

import { dummyProjects } from '../assets/constants';
import Footer from '../components/Footer.tsx';

const MyProjects = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [projects, setProjects] = useState<Project[]>([]);
  const navigate = useNavigate();

  const fetchProjects = async () => {
    setProjects(dummyProjects);
    // Simulate loading
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  const deleteProject = async (projectId: string) => {
    console.log(`Deleting project with ID: ${projectId}`);
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <>
      <div className='px-4 md:px-16 lg:px-24 xl:px-32'>
        {loading ? (
          <div className='flex h-[80vh] items-center justify-center'>
            <Loader2Icon className='size-7 animate-spin text-indigo-200' />
          </div>
        ) : projects.length > 0 ? (
          <div className='min-h-[80vh] py-10'>
            <div className='mb-12 flex items-center justify-between'>
              <h1 className='text-2xl font-medium text-white'>My Projects</h1>
              <button
                onClick={() => navigate('/')}
                className='flex items-center gap-2 rounded bg-linear-to-br from-indigo-500 to-indigo-600 px-3 py-1 text-white transition-all hover:opacity-90 active:scale-95 sm:px-6 sm:py-2'
              >
                <PlusIcon size={18} /> Create New
              </button>
            </div>

            <div className='flex flex-wrap gap-3.5'>
              {projects.map((project) => (
                <div
                  onClick={() => navigate(`/projects/${project.id}`)}
                  key={project.id}
                  className='group relative w-72 cursor-pointer overflow-hidden rounded-lg border border-gray-700 bg-gray-900/60 shadow-md transition-all duration-300 hover:border-indigo-800/80 hover:shadow-indigo-700/30 max-sm:mx-auto'
                >
                  {/* Desktop-like Mini Preview */}
                  <div className='relative h-40 w-full overflow-hidden border-b border-gray-800 bg-gray-900'>
                    {project.current_code ? (
                      <iframe
                        srcDoc={project.current_code}
                        className='pointer-events-none absolute top-0 left-0 h-[800px] w-[1200px] origin-top-left'
                        sandbox='allow-scripts allow-same-origin'
                        style={{ transform: 'scale(0.25)' }}
                      />
                    ) : (
                      <div className='flex h-full items-center justify-center text-gray-500'>
                        No Preview
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className='bg-linear-180 from-transparent to-transparent p-4 text-white transition-colors group-hover:from-indigo-950'>
                    <div className='flex items-start justify-between'>
                      <h2 className='line-clamp-2 text-lg font-medium'>
                        {project.name}
                      </h2>
                      <button className='mt-1 ml-2 rounded-full border border-gray-700 bg-gray-800 px-2.5 py-0.5 text-xs'>
                        Website
                      </button>
                    </div>
                    <p className='mt-1 line-clamp-2 text-sm text-gray-400'>
                      {project.initial_prompt}
                    </p>

                    <div
                      onClick={(e) => e.stopPropagation()}
                      className='mt-6 flex items-center justify-between'
                    >
                      <span className='text-xs text-gray-500'>
                        {new Date(project.createdAt).toLocaleDateString()}
                      </span>
                      <div className='flex gap-3 text-sm text-white'>
                        <button
                          onClick={() => navigate(`/preview/${project.id}`)}
                          className='rounded-md bg-white/10 px-3 py-1.5 transition-all hover:bg-white/15'
                        >
                          Preview
                        </button>
                        <button
                          onClick={() => navigate(`/projects/${project.id}`)}
                          className='rounded-md bg-white/10 px-3 py-1.5 transition-colors hover:bg-white/15'
                        >
                          Open
                        </button>
                      </div>
                    </div>
                  </div>

                  <div
                    onClick={(e) => e.stopPropagation()}
                    className=''
                  >
                    <TrashIcon
                      onClick={() => deleteProject(project.id)}
                      className='absolute top-3 right-3 size-7 scale-0 cursor-pointer rounded bg-white p-1.5 text-xl text-red-500 transition-all group-hover:scale-100'
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className='flex h-[80vh] flex-col items-center justify-center'>
            <h1 className='text-3xl font-semibold text-gray-300'>
              You have no projects yet!
            </h1>
            <button
              onClick={() => navigate('/')}
              className='mt-5 rounded-md bg-indigo-500 px-5 py-2 text-white transition-all hover:bg-indigo-600 active:scale-95'
            >
              Create New
            </button>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default MyProjects;
