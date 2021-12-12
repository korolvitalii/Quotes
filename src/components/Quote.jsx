const Quote = ({ quote, author }) => {
  return (
    <div>
      <h1>{quote}</h1>
      <h6>{author}</h6>
    </div>
  );
};

export default Quote;
