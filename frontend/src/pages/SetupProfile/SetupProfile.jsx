import { NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom';
import {
  User, Briefcase, GraduationCap, Star,
  Link, Clock, IndianRupee,
  ChevronLeft, ChevronRight,
  MoveRight,
  MapPin
} from 'lucide-react';
import { useEffect } from 'react';
import { useAuth } from '../../context/auth.context';
import Loading from '../../components/Loading'


function SetupProfile() {

const { user, isLoggedIn, isLoading, verifyUser } = useAuth();

  const location = useLocation();
  const navigate = useNavigate();

  const steps = [
    { path: 'personal-info', title: 'Personal Info', icon: User },
    { path: 'address-info', title: 'Address Info', icon: MapPin },
    { path: 'work-experience', title: 'Work Experience', icon: Briefcase },
    { path: 'education-info', title: 'Education', icon: GraduationCap },
    { path: 'expertise-info', title: 'Expertise', icon: Star },
    { path: 'social-link', title: 'Social Links', icon: Link },
    { path: 'availability-info', title: 'Availability', icon: Clock },
    { path: 'rates-info', title: 'Set Rate', icon: IndianRupee },
  ];

  const currentStepIndex = steps.findIndex((step) =>
    location.pathname.endsWith(step.path)
  );

  const isBaseRoute = steps.every(step => !location.pathname.includes(step.path));


  const goToStep = (index) => {
    navigate(`/setup-profile/${steps[index].path}`);
  };

  const nextStep = () => {
    if (currentStepIndex < steps.length - 1) {
      goToStep(currentStepIndex + 1);
    }
  };

  const prevStep = () => {
    if (currentStepIndex > 0) {
      goToStep(currentStepIndex - 1);
    }
  };


useEffect(() => {
  if (!steps || steps.length === 0) {
    document.title = 'Setup Profile';
    return;
  }

  const currentTitle = steps[currentStepIndex]?.title;
  document.title = currentTitle
    ? `${currentTitle} - Setup Profile`
    : 'Setup Profile';
}, [currentStepIndex, steps]);



useEffect(() => {
  const checkUser = async () => {
    if (isLoading) return;

    if (!isLoggedIn || !user.username || !user.role) {
      navigate('/login');
      return;
    }

    const isValid = await verifyUser(user.username, user.role);
    if (!isValid) {
      navigate('/login');
    }
  };

  checkUser();
}, [user, isLoggedIn, isLoading, navigate, verifyUser]);

  if (isLoading) {
    return (
  <div className="fixed inset-0 z-[9999] flex items-center justify-center backdrop-blur-3xl bg-white/30">
    <Loading />
  </div>
);
}
  // Show login redirect if not logged in
  if (!isLoggedIn || !user.username) {
    return <div className="fixed inset-0 z-[9999] flex items-center justify-center backdrop-blur-3xl bg-white/30">Redirecting to login...</div>;
  }
  

  return (
    <div className="max-w-5xl mx-auto px-4 py-10 space-y-10">
      
      {isBaseRoute && (
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold text-gray-900">Let’s build your mentor profile</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Fill out each section step-by-step. This helps mentees trust your background and increases your chances of getting booked.
          </p>

          <NavLink to={'personal-info'} className='flex justify-center items-center gap-2 text-blue-600 cursor-pointer underline underline-offset-7 mt-5 transition-all ease-in-out duration-200 hover:scale-103'>Let's start from your personal details <MoveRight className='-mb-2'/></NavLink>
        </div>
      )}

      {/* Step Navigation */}
      <div className="flex flex-wrap justify-between items-center gap-2">
        {steps.map((step, index) => (
          <button
            key={step.path}
            onClick={() => goToStep(index)}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all ${
              currentStepIndex === index
                ? 'bg-blue-600 text-white shadow-lg'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <step.icon size={18} />
            <span className="text-sm font-medium">{step.title}</span>
          </button>
        ))}
      </div>

      {/* Nested Route Content */}
      <Outlet />

      {/* Show controls only if a specific step is selected */}
      {currentStepIndex !== -1 && (
        <div className="flex justify-between items-center mt-10">
          <button
            disabled={currentStepIndex === 0}
            onClick={prevStep}
            className="flex items-center gap-2 bg-gray-200 hover:bg-gray-300 text-gray-700 px-6 py-3 rounded-xl transition-all disabled:opacity-50"
          >
            <ChevronLeft size={18} /> Back
          </button>

          <div className="flex gap-4">

            {currentStepIndex < steps.length - 1 && (
              <button
                onClick={nextStep}
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl transition-all"
              >
                Next <ChevronRight size={18} />
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default SetupProfile;
