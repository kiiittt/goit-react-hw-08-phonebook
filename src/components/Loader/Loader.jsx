import { MutatingDots } from 'react-loader-spinner';

const Loader = () => {
  return (
    <div
      style={{
        display: 'flex',

        justifyContent: 'center',
        alignItems: 'center',
        margn: '0 auto',
        marginTop: '5rem',
      }}
    >
      <MutatingDots
        height="100"
        width="100"
        color="#007fff"
        secondaryColor="#007fff"
        radius="12.5"
        ariaLabel="mutating-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        speed={1000}
      />
    </div>
  );
};

export default Loader;
