
import { LoaderCircle } from 'lucide-react'; // Import LoaderCircle from lucide-react

const Loader = () => {
  return (
    <div className="loader-container">
      <LoaderCircle className="loader-icon" />
      {/* <p>Loading...</p> */}
    </div>
  );
};

export default Loader;
