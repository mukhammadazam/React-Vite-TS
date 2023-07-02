import data from "../db/men.json";
const Men = () => {
  console.log(data);
  return (
    <div className='container'>
      <div className='men'></div>
    </div>
  );
};

export default Men;
