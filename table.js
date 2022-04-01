import "./styles.css";

const Table = () => {
  return (
    <div className="img">
      <img src="books.jpg" alt="" width={550} height={250} />
      <div className="table">
        <table>
          <thead>
            <tr>
              <th>Book</th>
              <th>Author</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Harry Potter and the Goblet of Fire</td>
              <td>J K Rowling</td>
            </tr>
            <tr>
              <td>Diary of a Wimpy Kid</td>
              <td>Jeff Kinney</td>
            </tr>
            <tr>
              <td>Timmy Failure</td>
              <td>Stephan Pastis</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Table;
